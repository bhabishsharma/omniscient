import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, MapPin, Calendar, Scroll, CheckCircle2, ChevronRight, PenTool, Sparkles, Send, Trash2 } from 'lucide-react';

interface StoryChapter {
  id: string;
  number: string;
  title: string;
  period: string;
  location: string;
  image: string;
  accentColor: string;
  synopsis: string;
  prose: string[];
  quote: string;
  quoteAuthor: string;
  reflectionPrompt: string;
  spec: {
    lensPreference: string;
    keyLearning: string;
    focusStyle: string;
  };
}

const LIFE_STORIES: StoryChapter[] = [
  {
    id: 'ch1',
    number: 'Story I',
    title: 'The Alleys of Kathmandu',
    period: '2015 – 2018',
    location: 'Kathmandu Valley, Nepal',
    image: '/src/assets/images/nepali_temple_1781446165729.jpg',
    accentColor: 'from-amber-550/20 to-amber-400/5',
    synopsis: 'Discovering the high-contrast geometries and deep shadows of Kathmandu during frozen, early morning light walks.',
    prose: [
      'My creative journey began not with a high-end dynamic sensor or client guidelines, but with a simple manual lens and an alarm set before dawn. I committed to waking up early every single morning in Kathmandu, stepping out into the chilly, silent temple squares of Pashupatinath and the narrow brick alleys of Patan before the city woke.',
      'In those early, unvarnished hours, the light in Nepal has a sharp, razor-thin clarity. Flocks of pigeons would explode from ancient stone steps in perfect, chaotic arrays. I walked for hours every morning, studying how morning beams sliced through rising incense and dense wood carvings, training my muscles to adjust focus ring gears instantly.',
      'This period laid the ground rule of my creative voice: absolute, routine preparation. I learned to select a street corner, steady my stance, and pre-visualize the entire geometry of a composition minutes before a single pedestrian walked into my shadow traps. Without this foundational discipline, Omniscient would never have been born.'
    ],
    quote: "The sunrise waits for no one. Greatness is won in the hours before the lights go on.",
    quoteAuthor: "Cristiano Ronaldo",
    reflectionPrompt: "What is your early morning grounding ritual, and how does consistency shape your current craft?",
    spec: {
      lensPreference: 'FE 50mm f/1.2 • Prime manual stance',
      keyLearning: 'Daily routine builds physical intuition with camera gear.',
      focusStyle: 'Extreme high-contrast morning shadows'
    }
  },
  {
    id: 'ch2',
    number: 'Story II',
    title: 'High Altitudes & Whispering Pine Mist',
    period: '2018 – 2021',
    location: 'Sapa Mountains & Annapurna',
    image: '/src/assets/images/green_hills_mist_1781446213200.jpg',
    accentColor: 'from-emerald-550/10 to-emerald-400/5',
    synopsis: 'Conquering freezing mountaintops to capture elegant cloud interactions and dark pine forest symmetries.',
    prose: [
      'As my technical foundations matured, I wanted to seek absolute solitude far from busy streets. I headed into high-altitude areas, taking grueling treks into North Vietnam’s Sapa range and the cold Annapurna trails. Here, the landscape doesn’t move at the speed of a pedestrian; it moves at the speed of the winds.',
      'I spent days in freezing temperatures, waiting for the thick, heavy alpine mist to parts. I learned to observe how thick fog threads around deep green conifers, creating perfect natural rhythms of gradient shadows. In these thin-air environments, time completely slows down.',
      'This became my study of "Creative Calm." In the silence of high peaks, under cold clouds, I learned to block out any external commercial noise or self-doubt. When you wait six hours for a single 10-second opening in the clouds, your viewport becomes your entire meditative universe. You discover truth simply by remaining still.'
    ],
    quote: "Maintain absolute silence within your own spirit when the outer world is chaotic.",
    quoteAuthor: "Virat Kohli",
    reflectionPrompt: "When did you last step completely back from external chatter to listen to your authentic creative intuition?",
    spec: {
      lensPreference: 'GF 32-64mm f/4 • Medium Format Depth',
      keyLearning: 'Patience and mental stillness are the ultimate optical filters.',
      focusStyle: 'Dreamy low-key light levels and misty ridges'
    }
  },
  {
    id: 'ch3',
    number: 'Story III',
    title: 'Rebuilding from First Principles',
    period: '2021 – 2024',
    location: 'Fine Art Studio & Architectural Ruin',
    image: '/src/assets/images/bw_krishna_mandir_1781446269702.jpg',
    accentColor: 'from-blue-550/10 to-blue-400/5',
    synopsis: 'Selling standard glass to fund high-res sensors, analyzing light pathways from basic physics, and overcoming structural failures.',
    prose: [
      'By 2021, I hit a creative wall. I had become too comfortable following standard rules of thirds, classic portrait grids, and standard visual patterns. I realized that to evolve, I had to deconstruct my compositions entirely and analyze light in its rawest, physical state.',
      'I liquidated my savings, purchased high-res digital equipment, and treated every photoshoot as a direct scientific thought-experiment. I analyzed how glare reflects off ancient brick, how geometric stone structures hold mass, and how shadows cast spatial weights.',
      'There were setbacks. I faced massive technical corruption—damaged memory cards, failed shutter mechanism gears, and exposures ruined by extreme weather. But instead of feeling defeated, I treated every failure as essential system telemetry. I cataloged the parameters, optimized my setups, and went back out. That is how real breakthroughs happen.'
    ],
    quote: "Boil every system down to its base physical truth and construct your frame from those basics.",
    quoteAuthor: "Elon Musk",
    reflectionPrompt: "How can you deconstruct the traditional rules of your daily work to find a completely new approach?",
    spec: {
      lensPreference: 'Summilux-M 35mm f/1.4 • RAW Optics',
      keyLearning: 'Setbacks are not failures; they are vital diagnostic logs.',
      focusStyle: 'Deconstructed monochrome geometric textures'
    }
  },
  {
    id: 'ch4',
    number: 'Story IV',
    title: 'The Relativity of Focus',
    period: '2024 – Present',
    location: 'Nepal Forests & High Gorges',
    image: '/src/assets/images/scenic_valley_river_1781446238761.jpg',
    accentColor: 'from-violet-550/10 to-violet-400/5',
    synopsis: 'Conducting creative optical experiments with custom prisms and shifting coordinates to reveal the relativity of space.',
    prose: [
      'Today, I treat the camera as a playful lens to observe coordinate grids in the wild. Inspired by the principles of coordinate relativity, I reject standard eye-level tripods and comfortable viewing plains.',
      'I shoot from extreme heights, dirt-level paths, or look through handcrafted glass prisms that warp and bend light paths in natural sunlight. By constantly shifting coordinates, I remind my viewers that there is no singular authentic reality—every composition is relative to the coordinates of the observer.',
      'I believe that an active, curious imagination is far more valuable than a million-dollar commercial gear bag. With a basic lens and a heart full of wonder, the simplest river valley or forest glade transforms into a cosmic gateway. We are here to witness the luminous mathematical elegance of existence.'
    ],
    quote: "Your camera is just a light box; your imagination is the coordinate grid of the universe.",
    quoteAuthor: "Albert Einstein",
    reflectionPrompt: "How can shifting your physical standpoint reveal a completely unexpected layer in a familiar subject?",
    spec: {
      lensPreference: 'FE 16-35mm f/2.8 GM • Ultra-Wide Perspective',
      keyLearning: 'Perspective is relative. The mind’s coordinate grid defines the scene.',
      focusStyle: 'Playful curved refractions and skewed coordinates'
    }
  }
];

export default function StoriesSection() {
  const [activeStoryId, setActiveStoryId] = useState<string>('ch1');
  const [reflectionInput, setReflectionInput] = useState<string>('');
  const [journalEntries, setJournalEntries] = useState<{ id: string; storyTitle: string; content: string; date: string }[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  // Load stored user reflection entries if present
  useEffect(() => {
    const saved = localStorage.getItem('omniscient_journal');
    if (saved) {
      try {
        setJournalEntries(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load journal entries", e);
      }
    }
  }, []);

  const activeStory = LIFE_STORIES.find(s => s.id === activeStoryId)!;

  const handleSaveReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reflectionInput.trim()) return;

    const newEntry = {
      id: `ref-${Date.now()}`,
      storyTitle: activeStory.title,
      content: reflectionInput,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    const updatedJournal = [newEntry, ...journalEntries];
    setJournalEntries(updatedJournal);
    localStorage.setItem('omniscient_journal', JSON.stringify(updatedJournal));
    setReflectionInput('');
    setNotification('Your personal reflection has been securely cataloged inside your browser cache.');
    setTimeout(() => setNotification(null), 4000);
  };

  const handleDeleteEntry = (id: string) => {
    const filtered = journalEntries.filter(e => e.id !== id);
    setJournalEntries(filtered);
    localStorage.setItem('omniscient_journal', JSON.stringify(filtered));
  };

  return (
    <section id="stories-workspace" className="py-16 sm:py-24 bg-stone-950 text-stone-100 relative overflow-hidden">
      {/* Decorative background grids */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-amber-400 font-extrabold flex items-center justify-center gap-1.5">
            <BookOpen className="w-4 h-4 text-amber-300" />
            Interactive Chronicles
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight leading-tight">
            Stories of My Journey
          </h2>
          <p className="text-sm font-sans font-light text-stone-400 leading-relaxed">
            Trace the evolutionary phases of my life, mechanical study, and artistic breakthroughs. Switch between chapters, read my personal journals, and use the prompt fields below to ponder your own narrative.
          </p>
        </div>

        {/* Outer Layout wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Quick Navigation Chapters - capsules list */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs uppercase font-semibold text-stone-550 text-stone-500 tracking-wider mb-5 flex items-center gap-2">
              <Scroll className="w-4 h-4 text-stone-500" />
              Chronicle Chapters
            </h3>
            <div className="space-y-4">
              {LIFE_STORIES.map((story) => (
                <button
                  key={story.id}
                  id={`chapter-nav-${story.id}`}
                  onClick={() => {
                    setActiveStoryId(story.id);
                    setReflectionInput('');
                  }}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    activeStoryId === story.id
                      ? 'bg-white/5 border-amber-400/50 shadow-lg shadow-amber-400/5'
                      : 'bg-stone-900/40 border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-stone-950 border border-white/10 shrink-0">
                      <img
                        src={story.image}
                        alt={story.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-75 group-hover:scale-103 transition-transform"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-amber-300">{story.number}</p>
                      <h4 className="text-base font-serif font-light text-white truncate group-hover:text-amber-100 transition-colors">{story.title}</h4>
                      <p className="text-[11px] text-stone-500 mt-0.5 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-stone-600" />
                        {story.period}
                      </p>
                    </div>
                  </div>
                  {activeStoryId === story.id && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-300">
                      <ChevronRight className="w-5 h-5 animate-pulse" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Major Content Reading Pane & Interactive Notebook */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStoryId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-stone-900/60 border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8 backdrop-blur-md relative overflow-hidden"
              >
                {/* Header of Story Panel */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-semibold uppercase text-amber-300 tracking-wider bg-amber-400/10 px-3 py-1 rounded-full">
                      {activeStory.number}
                    </span>
                    <h3 className="text-2xl sm:text-3.5xl font-serif font-light text-white mt-2 leading-tight">
                      {activeStory.title}
                    </h3>
                    <p className="text-xs text-stone-400 flex items-center gap-4 font-light pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-300" />
                        {activeStory.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-300" />
                        {activeStory.period}
                      </span>
                    </p>
                  </div>
                  
                  {/* Photo representation in content block */}
                  <div className="w-full sm:w-44 h-24 rounded-2xl overflow-hidden border border-white/10 bg-black shadow-lg">
                    <img
                      src={activeStory.image}
                      alt={activeStory.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-80 hover:scale-103 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Prose story details */}
                <div id="story-block-prose" className="prose prose-invert max-w-none text-stone-300 text-sm font-sans font-light leading-relaxed space-y-6">
                  {activeStory.prose.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Inspirational Quote callout */}
                <div className="bg-white/5 border-l-2 border-amber-400 rounded-r-2xl p-6 relative">
                  <span className="absolute top-2 right-4 text-7xl font-serif text-white/5 leading-none select-none">“</span>
                  <p className="text-white text-base font-serif italic relative z-10 leading-relaxed font-light">
                    "{activeStory.quote}"
                  </p>
                  <p className="text-amber-300 text-xs font-mono uppercase tracking-wider mt-3 font-semibold">
                    — Inspired by {activeStory.quoteAuthor}
                  </p>
                </div>

                {/* Spec details card */}
                <div className="bg-stone-950/80 border border-white/5 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                  <div className="space-y-1">
                    <span className="text-stone-500 uppercase tracking-wider font-semibold font-mono text-[10px]">Lenses Preference</span>
                    <p className="text-stone-200 font-medium">{activeStory.spec.lensPreference}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-stone-500 uppercase tracking-wider font-semibold font-mono text-[10px]">Key Breakthrough</span>
                    <p className="text-stone-200 font-medium">{activeStory.spec.keyLearning}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-stone-500 uppercase tracking-wider font-semibold font-mono text-[10px]">Aesthetic Style</span>
                    <p className="text-stone-200 font-medium">{activeStory.spec.focusStyle}</p>
                  </div>
                </div>

                {/* Philosophical reflection prompt area */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-2 text-stone-200">
                    <PenTool className="w-4.5 h-4.5 text-amber-400" />
                    <span className="text-sm font-serif font-light">Aesthetic Reflection prompt</span>
                  </div>
                  <h4 className="text-white text-base font-serif font-light leading-snug">
                    {activeStory.reflectionPrompt}
                  </h4>
                  
                  <form onSubmit={handleSaveReflection} className="space-y-3 pt-2">
                    <textarea
                      id="reflection-textbox"
                      rows={3}
                      value={reflectionInput}
                      onChange={(e) => setReflectionInput(e.target.value)}
                      placeholder="Type your personal insights, resonance level, or creative journals..."
                      className="w-full bg-stone-950 border border-white/10 rounded-xl p-4 text-sm text-stone-100 placeholder-stone-550 placeholder-stone-600 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 transition-all font-light"
                    />
                    <div className="flex justify-between items-center bg-stone-950 border-t border-white/5 px-2 py-2 rounded-xl">
                      <span className="text-[10px] font-mono text-stone-500 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        Stored offline in your browser session.
                      </span>
                      <button
                        type="submit"
                        id="save-reflection-btn"
                        className="inline-flex items-center gap-1.5 bg-amber-400 text-stone-950 text-xs font-bold px-4 py-2 rounded-lg hover:bg-amber-350 transition-all cursor-pointer shadow-md"
                      >
                        <Send className="w-3 h-3 fill-stone-950" />
                        Log in Journal
                      </button>
                    </div>
                  </form>

                  {/* Notification confirmation banner */}
                  <AnimatePresence>
                    {notification && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 p-3.5 rounded-xl flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>{notification}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Journal entries explorer list (if entries exist) */}
                {journalEntries.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <h3 className="text-white text-base font-serif font-light">My Local Reflection Journals</h3>
                    <div className="space-y-3 max-h-[250px] overflow-y-auto pr-1">
                      {journalEntries.map((entry) => (
                        <div key={entry.id} className="bg-stone-950/40 border border-white/5 p-4 rounded-xl flex items-start justify-between gap-4">
                          <div className="space-y-1">
                            <span className="text-[9px] font-mono uppercase tracking-wider text-amber-300">
                              Resonance in: {entry.storyTitle}
                            </span>
                            <p className="text-xs text-stone-300 font-light leading-relaxed">{entry.content}</p>
                            <span className="text-[9px] text-stone-500 font-mono inline-block pt-1">{entry.date}</span>
                          </div>
                          <button
                            onClick={() => handleDeleteEntry(entry.id)}
                            className="p-1 rounded bg-white/5 hover:bg-rose-500/10 text-stone-500 hover:text-rose-450 hover:text-rose-400 transition-all shrink-0"
                            title="Delete entry"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
