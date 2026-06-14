import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-load Gemini GoogleGenAI SDK to prevent startup crash if GEMINI_API_KEY is missing
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// Idol configs for personality prompts
const IDOL_PROMPTS: Record<string, { systemPrompt: string; fallbackText: string; feedbackFallback: any }> = {
  ronaldo: {
    systemPrompt: `You are Sandesh Poudel's "Discipline & Consistency" creative mindset. Speak with intense focus on relentless early-morning preparation, raw physical consistency, and building your fine-art visual craft step-by-step. Encourage daily practice—such as walking before sunrise in Kathmandu to seek clean, morning shadows. No markdown bullet points, just elegant, inspiring paragraphs. Keep your reply between 80 to 120 words.`,
    fallbackText: "My friend, greatness is built on daily, relentless hours of training and commitment. Every sunrise is a new canvas—wake up early, anchor your feet, and capture the light before the city wakes.",
    feedbackFallback: {
      feedback: "Your composition resonates with the pure, disciplined alignment of an early riser. The shadow geometry has structural elegance. Keep committing to the long hours behind closed doors—consistency is your greatest catalyst.",
      score: 93,
      suggestions: [
        "Capture fast-moving traffic or pedestrians using slow shutter speeds in dim twilight.",
        "Secure your composition placement early, anticipating the shadow paths before characters arrive.",
        "Challenge yourself to shoot the exact same street corner at sunrise for seven straight days."
      ],
      inspiredQuote: "Without relentless hours behind closed doors, no masterwork is born. Stand ready before the light breaks."
    }
  },
  kohli: {
    systemPrompt: `You are Sandesh Poudel's "Absolute Creative Calm" creative mindset. Speak with deep internal conviction, absolute concentration, and quiet, meditative serenity. Remind the user to block out the noisy "stadium chatter" of client expectations and busy surroundings, discovering the unvarnished, authentic emotional truths in front of their lens. Keep your reply between 80 to 120 words – direct, motivating, and deep.`,
    fallbackText: "Maintain complete silence within your spirit under pressure. When the external world is screaming, look through your viewfinder and make that single moment your entire universe.",
    feedbackFallback: {
      feedback: "This is a masterpiece of pure visual presence. You successfully blocked out any surrounding chaos, capturing a singular unvarnished reality that stands tall. It tells a deep story of creative calm.",
      score: 95,
      suggestions: [
        "Dramatize deep shadows further to highlight only the essential, high-contrast parts.",
        "Limit the active colors on your canvas to eliminate background visual noise.",
        "Take a moment to fully pre-visualize the final, high-contrast edit before clicking the shutter."
      ],
      inspiredQuote: "If you can stay silent inside, the story writes itself. Focus on the singular truth."
    }
  },
  musk: {
    systemPrompt: `You are Sandesh Poudel's "First-Principles Eye" creative mindset. Ask the user to reject standard compositions, grids, and generic guidelines, analyzing light pathways, visual gravity, and physical structures from the ground up. Treat every technical issue as telemetry data to debug and optimize. Keep your reply between 80 to 120 words, slightly technical and future-focused.`,
    fallbackText: "Boil composition down to fundamental physical truths—the physics of light reflection, structural density, and gravity. Then, rebuild your frame from those first principles.",
    feedbackFallback: {
      feedback: "Your camera frame deconstructs shadow and glare into raw, physical layers. It has a beautiful structural weight that feels robustly engineered. That's how we reconstruct visual experiences from scratch.",
      score: 94,
      suggestions: [
        "Deconstruct standard layout grids; design purely based on high-contrast lines and physical mass.",
        "Experiment with complex mechanical textures or glass surfaces to capture raw reflection glare.",
        "Treat bad exposures or corrupted frames as essential system logging data for optimization."
      ],
      inspiredQuote: "When a visual structure is built on first principles, it doesn't need standard rules to shine. Build from the raw physics of light."
    }
  },
  einstein: {
    systemPrompt: `You are Sandesh Poudel's "Relativity of Focus" creative mindset. Share playful curiosity, imaginative awe, and experimental adventure. Suggest that perspective is relative to our coordinates; encourage deep thought-experiments with custom glass prisms, unusual height levels, and bending light curves in the wild. Keep your reply between 80 to 120 words.`,
    fallbackText: "Ah! An excellent display of coordinate relativity! Time and space are relative, and so is our visual frame. Constantly shift your viewpoints to unlock the mystery of light.",
    feedbackFallback: {
      feedback: "What a marvelous visual experiment in relativity! By rejecting a normal, comfortable level, you show that space is a playground of coordinates. It is a brilliant reminder that imagination is far more powerful than gear budget.",
      score: 92,
      suggestions: [
        "Shift your camera level to extreme coordinates—shoot directly from street-dirt level or overhead rooftops.",
        "Incorporate custom items like glass prisms to warp and refract light paths in natural sunlight.",
        "Conduct mental thought experiments with shadows and weather paths before ever setting up your tripod."
      ],
      inspiredQuote: "Your camera is simply a tool; your imagination is the coordinate grid of the universe. Play without bounds."
    }
  }
};

// API: Chat with life idols
app.post("/api/chat-idol", async (req, res) => {
  const { idolId, message, history } = req.body;
  const idolConf = IDOL_PROMPTS[idolId as string];

  if (!idolConf) {
    return res.status(400).json({ error: "Invalid idol ID requested." });
  }

  try {
    const ai = getGeminiClient();

    // Map history to parts standard formatting for gemini-3.5-flash
    const chatHistory = (history || []).map((h: any) => ({
      role: h.role === 'model' ? 'model' : 'user',
      parts: [{ text: h.text }]
    }));

    // Add current user prompt
    const contents = [...chatHistory, { role: 'user', parts: [{ text: message }] }];

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction: idolConf.systemPrompt,
        temperature: 0.8,
      },
    });

    const reply = response.text || idolConf.fallbackText;
    res.json({ text: reply });
  } catch (error: any) {
    console.error("Gemini Chat Error:", error.message);
    // Graceful fallback so users can interact even without API key configured yet
    res.json({ text: idolConf.fallbackText, isFallback: true });
  }
});

// API: Feedbacks for Idol Challenge
app.post("/api/feedback", async (req, res) => {
  const { idolId, photoTitle, photoDescription, userStory } = req.body;
  const idolConf = IDOL_PROMPTS[idolId as string];

  if (!idolConf) {
    return res.status(400).json({ error: "Invalid idol ID requested." });
  }

  try {
    const ai = getGeminiClient();

    const mindsetName = idolId === 'ronaldo' ? 'Discipline & Consistency' : idolId === 'kohli' ? 'Absolute Creative Calm' : idolId === 'musk' ? 'First-Principles Eye' : 'Relativity of Focus';

    const promptText = `
      You are judging a photography submission for Sandesh's "${mindsetName}" creative milestone challenge.
      Here is the user's photoshoot details:
      - Title of Photo: ${photoTitle}
      - Photo Description: ${photoDescription}
      - Inspiration Story: ${userStory}

      Critique this photography submission acting entirely as Sandesh Poudel's simulated "${mindsetName}" mindset.
      Make your response specific, constructive, heartwarming, and full of lessons.

      Return the result in JSON format matching this schema exactly:
      {
        "feedback": "Your personal critique representing the specific mindset in 3-4 inspiring sentences.",
        "score": 85,
        "suggestions": [
          "Detailed, specific actionable camera/concept suggestion 1",
          "Detailed, specific actionable camera/concept suggestion 2",
          "Detailed, specific actionable camera/concept suggestion 3"
        ],
        "inspiredQuote": "A custom quote in the style of this mindset addressing their work."
      }
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            feedback: { type: Type.STRING, description: "Detailed, heartwarming mentor feedback in the personality of the chosen idol." },
            score: { type: Type.INTEGER, description: "A creative score from 80 to 100 based on storytelling and depth." },
            suggestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 concrete, actionable creative recommendations."
            },
            inspiredQuote: { type: Type.STRING, description: "A custom/inspired quote fitting the user's photo and story, written in the style of the Idol." }
          },
          required: ["feedback", "score", "suggestions", "inspiredQuote"]
        },
        temperature: 0.8,
      }
    });

    const jsonText = response.text ? response.text.trim() : null;
    if (!jsonText) {
      throw new Error("No text returned from Gemini");
    }

    const data = JSON.parse(jsonText);
    res.json(data);
  } catch (error: any) {
    console.error("Gemini Feedback Error:", error.message);
    res.json({ ...idolConf.feedbackFallback, isFallback: true });
  }
});

// Setup Vite Dev server or Production file service
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
