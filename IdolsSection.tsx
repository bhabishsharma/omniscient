import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Sparkles, MessageSquare, BookOpen, Clock, Heart, Send, Lightbulb } from 'lucide-react';
import { Idol } from '../types';

export const IDOL_DATA: Idol[] = [
  {
    id: 'ronaldo',
    name: 'Discipline & Consistency',
    title: 'Step 1: Relentless Preparation',
    birthDeath: '2015 – 2018: The Foundations',
    avatar: '⏰',
    bio: 'My creative journey began not with natural talent, but with daily, relentless practice. I committed to waking up early every single morning in Kathmandu, walking the dark alleys before sunrise to capture the first beams of morning light. I treated photography as an athletic discipline—carrying out tireless practice and taking hundreds of shots every day to master the mechanics of my camera and anticipate rapid city movements before they unfolded.',
    legacy: 'Learned the raw physics of manual exposure, developed high muscle memory with physical lenses, and established a foundation of pure consistency.',
    quotes: [
      "No matter how tired you are, the sunrise waits for no one. — Inspired by Cristiano Ronaldo",
      "Raw talent is secondary; consistency is the soil of creative mastery. — Inspired by Cristiano Ronaldo",
      "Tireless daily repetition is how you find your distinct voice. — Inspired by Cristiano Ronaldo"
    ],
    lessons: [
      {
        title: 'Uncompromising Rhythm',
        description: 'I took at least 100 shots every single morning for three years. This repetition taught my hand to steady and my eye to locate dynamic alignments automatically.',
        takeaway: 'Consistency builds a deep subconscious bond with your gear.'
      },
      {
        title: 'Anticipating the Stance',
        description: 'Just as a striker positions themselves before a strike, I learned to anchor my feet at a street junction, pre-visualizing the shadow pathways before walkers arrived.',
        takeaway: 'A pristine composition is captured when you are already prepared.'
      }
    ],
    inspiredGallery: [
      {
        title: 'Resonance of Tokyo',
        description: 'Captured in Shibuya. Long-exposure panned shot capturing the kinetic energy and explosive motion tracks of the modern city.',
        url: 'https://images.openai.com/static-rsc-4/Hx0WwIT4t25PDAAxipUU9TpzzN78U7zNsYm5rimhxEwnoTuTPZrFZHS7fN-Qojk_nMF6qya2SslFVuIGhzdZvy4qv1mw6NpwDSl6Lto_Hu2gpwqiZ9BOFhysvNgZlfdMnb6ef82TuA1kdB9ejGBZmsoKqzkJTmTB-4tsWH8xq9s6M_kBpbJyyZch1tJZNemS?purpose=fullsize'
      }
    ]
  },
  {
    id: 'kohli',
    name: 'Absolute Creative Calm',
    title: 'Step 2: Focus Under Pressure',
    birthDeath: '2018 – 2021: The Creative Zone',
    avatar: '🎯',
    bio: 'As my commercial photography client work scaled up, I confronted immense creative pressure, tight schedules, and noisy crowd expectation. I had to learn how to block out the "stadium noise" entirely. I trained myself to enter a zen-like state of complete concentration, viewing my viewfinder as my entire universe. This absolute presence allowed me to capture intense emotional truths in overcrowded, stressful situations without panicking.',
    legacy: 'Successfully completed over 200 client briefs under intense pressure, developed a unique signature portrait style of natural, unvarnished dignity.',
    quotes: [
      "Strip away the crowd's expectations to see the raw moment in front of you. — Inspired by Virat Kohli",
      "If you can maintain utter silence inside you under pressure, the focus is your gift. — Inspired by Virat Kohli",
      "Visualization under stress decides the clarity of your final outcome. — Inspired by Virat Kohli"
    ],
    lessons: [
      {
        title: 'Mental Chase & Visualization',
        description: 'Before pressing the shutter in crowded markets, I completely pre-visualized the edited, contrast-balanced image in my mind, locking down the boundaries.',
        takeaway: 'Clear mental visualization guarantees clean raw capture.'
      },
      {
        title: 'Blocking Out the Noise',
        description: 'I learned to treat background distractions—shouting bystanders, passing vehicles, or ambient glare—as blank gray canvas, accentuating only my main focal point.',
        takeaway: 'Absolute presence transforms stressful constraints into fine art.'
      }
    ],
    inspiredGallery: [
      {
        title: 'The Clean Line',
        description: 'An architectural abstraction. Eliminating everything save for the sky and the sharp angle of a white concrete structure, embodying pure focus.',
        url: 'https://images.openai.com/static-rsc-4/Tjhj0BeUnFDrvidxQbNdCv36Oez-muUlD0Da6DJY-e6_87G09gu-SaprseRPzG4F1d2B_cMhxsjlIVS-fbwfRNF0k5z33ZEF5XLqb1Ptp_TdoiuLVdXzbeedunsTL-1LKv8wbfss5AYqPzcB4BxYCHrDCWuFjpBQeUf6bsO0kiEHyepTMcL8Lvs6CcnT1EoX?purpose=fullsize'
      }
    ]
  },
  {
    id: 'musk',
    name: 'First-Principles Eye',
    title: 'Step 3: Rebuilding from Basics',
    birthDeath: '2021 – 2024: Deconstructing Rules',
    avatar: '🔬',
    bio: 'In 2021, I liquidated my savings to purchase advanced high-resolution sensors and prime glass, fully dedicating myself to independent fine art. Instead of following generic landscape templates and standard rule-of-thirds checklists, I deconstructed compositions from base physics—analyzing the direct pathways of light refraction, gravitational weights of details, and geometry. When severe technical failures or corrupted files happened, I treated them as vital rocket telemetry: raw data to study, learn from, and re-attempt.',
    legacy: 'Pioneered custom-engineered physical lighting arrays, built a highly automated cataloging system, and held my first solo exhibition.',
    quotes: [
      "Don't follow composition guides blindly—boil the light down to its fundamental physics. — Inspired by Elon Musk",
      "Every failed photoshoot is essential data for mechanical optimization. — Inspired by Elon Musk",
      "When a design idea is important enough, you gamble on it even if advice is against you. — Inspired by Elon Musk"
    ],
    lessons: [
      {
        title: 'First-Principles Eye',
        description: 'Ignore traditional "beautiful layout" assumptions. Reconstruct your frames from basic physics—the raw angles of light glare, structural curvature, and visual gravity.',
        takeaway: 'Original frames are built by reasoning from base principles.'
      },
      {
        title: 'Analyzing My Bad Exposures',
        description: 'When a shoot returned a set of corrupted cards or bad horizons, I spent hours indexing the errors, diagnosing the lens angles, and debugging my focus presets.',
        takeaway: 'Every corrupted frame is vital signal data for future success.'
      }
    ],
    inspiredGallery: [
      {
        title: 'The Enduring Light',
        description: 'Warm gold backlight silhouette of a massive modern structure, capturing the relentless engineering transition of humanity.',
        url: 'https://images.openai.com/static-rsc-4/9cpGIsFpOVQGoTL2Tq3FV-5jJ3hUdkAD0XVWKRQjYV8-cj54nVKMosoBfGhhfrraoPMkz0RS3SHf3OC4zwAne6uAXvFdiqTQv9KWoZbBbaHKS_myw850ls7mA59XTfbeoYh0hFA8twD2l2JaAbECCgA9iJgZE0WrRF-rmwKRKs0evr_KZvq0CvIyb6aG-egU?purpose=fullsize'
      }
    ]
  },
  {
    id: 'einstein',
    name: 'Relativity of Focus',
    title: 'Step 4: Perspective Experiments',
    birthDeath: '2024 – Present: Playful Curiosity',
    avatar: '🌌',
    bio: 'Today, I view each landscape excursion and studio study as an open-ended physics sandbox. Inspired by standard coordinate relativity, I reject static, comfortable angles, constantly shooting from extremely high, low, or skewed coordinates, reminding the viewer that their visual reality is relative to their position. I believe an active, curious imagination is far more powerful than the cost of your camera body, turning a simple walk in the forest into a cosmic experiment.',
    legacy: 'Integrated custom glass prisms in street photography, curated an ongoing exhibition of relativistic scale and perspectives.',
    quotes: [
      "Your camera is simply a tool; your imagination is the coordinate grid of the universe. — Inspired by Albert Einstein",
      "A perfect frame is not a formula—it is a playground of wonder. — Inspired by Albert Einstein",
      "To see the miraculous in the mundane is the source of all true visual craft. — Inspired by Albert Einstein"
    ],
    lessons: [
      {
        title: 'Relativity of the Lens',
        description: 'Every frame is just one perspective in a network of infinite coordinates. Shift your levels constantly, shooting from street-dirt level to rooftops.',
        takeaway: 'A single subject holds infinite relative realities.'
      },
      {
        title: 'Light Thought Experiments',
        description: 'Spend hours visualizing how shadows and light paths refract through dense mountain mist before you even lift your camera.',
        takeaway: 'Sublime atmospheric captures are won through mental modeling.'
      }
    ],
    inspiredGallery: [
      {
        title: 'The Silent mist',
        description: 'A quiet mountain tree covered in morning frost. Discovering the cosmic mathematics and delicate balance of nature.',
        url: 'https://images.openai.com/static-rsc-4/osa37Iv4tgvJ9bCYI2DD8Is6J3Tb_d5ceqyekgBuMdLF9ox8rO1NOoIlqcHzLu_0FfSdvzaCSTbXWbCSN2z97WeR_WKv2cWKlTrVwg2oIF-rS0tGJ2Vn6DleS2Bk5W0Hty3jyF2f5q6AwWQHu8Gu-HzN5duQ3LXZ28Hn1UD5pmKv-EUxDR8vN541dt4M-VJo?purpose=fullsize'
      }
    ]
  }
];

export default function IdolsSection() {
  const [activeIdolId, setActiveIdolId] = useState<string>('ronaldo');
  const [inputText, setInputText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // Simple localized chat logs per chapter
  const [chatLogs, setChatLogs] = useState<Record<string, { role: 'user' | 'model'; text: string }[]>>({
    ronaldo: [
      { role: 'model', text: 'I am Sandesh\'s simulated "Discipline & Consistency" mindset. Ask me how daily relentless practice, consistency, and early morning discipline can build your visual craftsmanship.' }
    ],
    kohli: [
      { role: 'model', text: 'I am Sandesh\'s "Absolute Creative Calm" mindset. Ask me how to block out external "stadium noise" and focus on a singular high-contrast visual goal under intense pressure.' }
    ],
    musk: [
      { role: 'model', text: 'I am Sandesh\'s "First-Principles Eye" mindset. Let\'s talk about deconstructing your composition down to basic light physics and building your frame from the ground up.' }
    ],
    einstein: [
      { role: 'model', text: 'I am Sandesh\'s simulated "Relativity of Focus" mindset. Ask me about custom prism refractions, shifting camera levels, or capturing the relativity of light in the wild.' }
    ]
  });

  const activeIdol = IDOL_DATA.find(i => i.id === activeIdolId)!;
  const currentChat = chatLogs[activeIdolId] || [];

  const handleSendMessage = async (textToSend?: string) => {
    const rawMessage = textToSend || inputText;
    if (!rawMessage.trim()) return;

    const userMessage = { role: 'user' as const, text: rawMessage };
    
    // Update local state temporarily
    const updatedLogs = {
      ...chatLogs,
      [activeIdolId]: [...currentChat, userMessage]
    };
    setChatLogs(updatedLogs);
    setInputText('');
    setIsTyping(true);

    try {
      // Call our Express server endpoint which proxies Gemini
      const response = await fetch('/api/chat-idol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idolId: activeIdolId,
          message: rawMessage,
          history: currentChat
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      setChatLogs(prev => ({
        ...prev,
        [activeIdolId]: [...(prev[activeIdolId] || []), { role: 'model', text: data.text }]
      }));
    } catch (e) {
      console.error(e);
      // Fail gracefully and inject our custom simulated response
      const fallbackMsg = IDOL_DATA.find(i => i.id === activeIdolId)?.lessons[0]?.description || 'My wisdom is currently offline, but persist onward!';
      setChatLogs(prev => ({
        ...prev,
        [activeIdolId]: [...(prev[activeIdolId] || []), { role: 'model', text: `[Offline Reflection] ${fallbackMsg}` }]
      }));
    } finally {
      setIsTyping(false);
    }
  };

  const presetQuestions: Record<string, string[]> = {
    ronaldo: [
      'How did you maintain early-morning discipline in Kathmandu?',
      'Tell me more about the Uncompromising Rhythm lesson.',
      'How does perfect stance help in anticipating street shadows?'
    ],
    kohli: [
      'How did you handle client pressure and block out the "stadium noise" during noisy shoots?',
      'Tell me more about your Mental Chase & Visualization lesson.',
      'How do I stay calm inside when composition constraints feel high?'
    ],
    musk: [
      'How do I deconstruct standard rules of photography using first-principles?',
      'How did you approach severe technical failures or corrupted memory cards?',
      'What were the core light physics rules you analyzed first?'
    ],
    einstein: [
      'Explain how coordinate relativity applies to composition viewpoints.',
      'Why is imagination more crucial than raw camera gear budget?',
      'How do you model light thought-experiments before a shoot?'
    ]
  };

  return (
    <section id="idols-section" className="py-20 bg-stone-950/20 border-b border-white/10 relative">
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-indigo-500/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Idols Section Title */}
        <div className="text-center mb-12">
          <h2 id="idols-title" className="text-3xl font-serif font-light tracking-widest text-white sm:text-4xl uppercase">
            My Life Chapters & Milestones
          </h2>
          <p id="idols-subtitle" className="mt-4 max-w-2xl mx-auto text-sm text-stone-400 font-light leading-relaxed">
            Explore the key chapters of my creative evolution and artistic breakthroughs. Under each phase, consult my simulated design mindset for personalized feedback.
          </p>
        </div>

        {/* Idol Quick Selection Buttons */}
        <div id="idols-nav" className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
          {IDOL_DATA.map((idol) => (
            <button
              key={idol.id}
              id={`idol-nav-${idol.id}`}
              onClick={() => setActiveIdolId(idol.id)}
              className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all backdrop-blur-md ${
                activeIdolId === idol.id
                  ? 'border-amber-450/40 bg-white/10 shadow-lg shadow-amber-400/5 text-white'
                  : 'border-white/10 bg-white/5 text-stone-400 hover:text-stone-200 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <div className="text-2xl animate-pulse">{idol.avatar}</div>
              <div>
                <h4 className="font-semibold text-sm">{idol.name}</h4>
                <p className="text-[9px] text-stone-500 font-bold uppercase tracking-wider truncate w-28">{idol.title}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Idol Container */}
        <div id="idol-details-card" className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white/5 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-xl">
          
          {/* Column A: Biography & Lessons (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 border-white/10">
            <div className="relative">
              <span className="text-7xl absolute -top-4 right-0 opacity-5 select-none">{activeIdol.avatar}</span>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300/80 uppercase tracking-widest mb-2">
                <Clock className="w-3.5 h-3.5" />
                {activeIdol.birthDeath}
              </div>
              <h3 className="text-3xl font-serif font-light text-white mt-1 mb-4">{activeIdol.name}</h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-6 font-light">{activeIdol.bio}</p>

              {/* Quotes Carousel or List */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-6 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-3">
                  <Quote className="w-4 h-4 text-amber-400/60" />
                  Key Perspective Quote
                </div>
                <p className="text-white font-serif font-light italic text-sm leading-relaxed text-stone-100">
                  "{activeIdol.quotes[0]}"
                </p>
              </div>

              {/* Lessons learned */}
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-400/80" />
                Lessons For Creators
              </h4>
              <div className="space-y-4">
                {activeIdol.lessons.map((lesson, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/5 shadow-inner">
                    <h5 className="font-serif font-bold text-xs text-amber-300 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      {lesson.title}
                    </h5>
                    <p className="text-xs text-stone-300 mt-2 leading-relaxed font-light">{lesson.description}</p>
                    <div className="mt-3 flex items-center gap-1 text-[10px] font-bold text-amber-200 uppercase bg-amber-500/10 border border-amber-500/20 rounded-lg px-2.5 py-1 w-max">
                      <Lightbulb className="w-3 h-3 text-amber-300" />
                      Takeaway: {lesson.takeaway}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inspired Portfolio Snapshot */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-3 block">Inspired Composition</h4>
              <div className="rounded-xl overflow-hidden border border-white/10 relative aspect-21/9 bg-stone-900 group">
                <img
                  src={activeIdol.inspiredGallery[0].url}
                  alt={activeIdol.inspiredGallery[0].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-75 group-hover:scale-102 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent p-4 flex flex-col justify-end">
                  <h5 className="text-amber-300 font-serif text-sm font-medium">{activeIdol.inspiredGallery[0].title}</h5>
                  <p className="text-stone-300 text-xs font-light truncate max-w-md">{activeIdol.inspiredGallery[0].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column B: Live "Talk to your Idol" chat (5 cols) */}
          <div id="idol-chat-panel" className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10 bg-stone-950/40 backdrop-blur-md flex flex-col justify-between min-h-[480px]">
            {/* Chat header */}
            <div className="p-4 bg-white/5 border-b border-white/10 text-white flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="text-xl">{activeIdol.avatar}</span>
                <div>
                  <h4 className="text-xs font-black tracking-wider uppercase font-serif text-white">{activeIdol.name} Mind</h4>
                  <p className="text-[9px] font-bold text-amber-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                    Synchronized & Online
                  </p>
                </div>
              </div>
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            </div>

            {/* Chat feed */}
            <div id="chat-messages-container" className="p-4 flex-1 overflow-y-auto max-h-[340px] space-y-4">
              {currentChat.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed shadow-md ${
                      msg.role === 'user'
                        ? 'bg-amber-400 text-stone-950 rounded-br-none font-medium'
                        : 'bg-white/10 border border-white/10 text-stone-100 rounded-bl-none backdrop-blur-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 border border-white/10 rounded-2xl p-3 rounded-bl-none shadow-md flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-amber-300 rounded-full animate-bounce [animation-delay:0s]" />
                    <span className="w-1.5 h-1.5 bg-amber-300 rounded-full animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 bg-amber-300 rounded-full animate-bounce [animation-delay:0.3s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Direct suggestions buttons */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <p className="text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-2.5">Preset Dialog Options</p>
              <div className="flex flex-col gap-2">
                {presetQuestions[activeIdolId]?.map((question, i) => (
                  <button
                    key={i}
                    id={`preset-q-${activeIdolId}-${i}`}
                    onClick={() => handleSendMessage(question)}
                    className="text-[10px] text-stone-300 hover:text-white text-left bg-white/5 hover:bg-white/10 border border-white/10 py-1.5 px-3 rounded-xl truncate transition-all font-light"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-3.5 bg-stone-950/80 border-t border-white/10 flex items-center gap-2">
              <input
                id="chat-input-text"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={`Ask ${activeIdol.name} about your design ideas...`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
                className="flex-1 text-xs border border-white/10 rounded-xl px-4 py-2.5 bg-white/5 text-stone-100 focus:outline-none focus:border-amber-400 focus:bg-white/10 placeholder-stone-500"
              />
              <button
                id="send-chat-button"
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                className="p-2.5 bg-amber-400 text-stone-950 rounded-xl hover:bg-amber-350 disabled:bg-white/5 disabled:text-stone-600 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
