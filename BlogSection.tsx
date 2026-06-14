import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, ThumbsUp, MessageSquare, ArrowLeft, ArrowUpRight, Send, Check } from 'lucide-react';
import { BlogPost } from '../types';

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  
  // Comment custom input
  const [newCommentUser, setNewCommentUser] = useState<string>('');
  const [newCommentText, setNewCommentText] = useState<string>('');
  const [isCommentAdded, setIsCommentAdded] = useState<boolean>(false);

  useEffect(() => {
    // Attempt load from localStorage, otherwise set static defaults
    const stored = localStorage.getItem('omniscient_blogs');
    if (stored) {
      try {
        setBlogs(JSON.parse(stored));
        return;
      } catch (e) {
        console.error(e);
      }
    }

    const defaultBlogs: BlogPost[] = [
      {
        id: 'b1',
        title: 'The Genesis of My Vision: 5 Rules of Absolute Concentration',
        excerpt: 'How I completely rebuilt my mental posture to survive intense pressure, clear out visual clutter, and establish my early fine-art footprint.',
        content: `Transitioning from a casual photographer to a full-time visual artist was a test of supreme discipline. Early in my career, my frames were constantly cluttered and scattered. I wanted to capture everything—and missed the essence. 

Here are five profound lessons of extreme concentration that completely revolutionized my framing, editing, and creative discipline:

### 1. Simple is Harder than Complex
Complexity and visual noise are the default; achieving simplicity takes immense cognitive effort. Do not just blindly snap. Stop, inspect every element in the corners of your frame, and block out the noise.

### 2. Ruthless Deletion and Focus
In editing, be ruthless. Prune away 90% of your visual distractions to allow the core subject’s emotional truth to stand uncontested. Only present your absolute best frames.

### 3. The Excellence Behind the Scene
True craftsmanship translates to the hidden details—perfecting absolute alignment, manual exposure offsets, and meticulous library classification that no customer ever sees.

### 4. Stay Hungry, Keep Testing
Don't get comfortable with a single reliable composition preset or standard viewpoint. If you are known for tranquil landscape symmetries, step out of your zone to chase fast action, street light trails, or raw shadows. Force your eyes to confront visual discomfort.

### 5. Speak a Narrative of Self-Belief
The image without a narrative is just a cluster of pixels on a sensor. Wrap your finest photographs in the legends, perseverance patterns, and stories they embody.`,
        date: 'June 4, 2026',
        author: 'Sandesh Poudel',
        readTime: '4 min read',
        category: 'Personal Development',
        imageUrl: 'https://images.openai.com/static-rsc-4/Tjhj0BeUnFDrvidxQbNdCv36Oez-muUlD0Da6DJY-e6_87G09gu-SaprseRPzG4F1d2B_cMhxsjlIVS-fbwfRNF0k5z33ZEF5XLqb1Ptp_TdoiuLVdXzbeedunsTL-1LKv8wbfss5AYqPzcB4BxYCHrDCWuFjpBQeUf6bsO0kiEHyepTMcL8Lvs6CcnT1EoX?purpose=fullsize',
        likes: 42,
        comments: [
          { id: 'c1', user: 'Alex Rivers', text: 'This lesson on "ruthless pruning" resonates so much! I used to showcase 20 photos. Now I choose my top 3, and people love it more.', date: 'June 5, 2026' },
          { id: 'c2', user: 'Sophia Grace', text: 'The calligraphy class backstory is my favorite. Interdisciplinary synthesis is key!', date: 'June 6, 2026' }
        ]
      },
      {
        id: 'b2',
        title: 'How Photography Changed My Perspective',
        excerpt: 'An exploration of how a simple 50mm lenses taught me to slow down, notice the delicate patterns of light, and appreciate our daily, quiet reality.',
        content: `Before I held a premium mirrorless camera, the world was a fast blur. I hurried between trains, walked past crowds, and drank coffee without ever studying the beautiful micro-refractions on the surface of the steam. A camera is fundamentally a temporal anchor. 

By forcing myself to select a locked focal length (the humble, classic 50mm primer lens), I learned three lessons about our daily perspective:

### 1. Constraints Foster True Abundance
When you cannot adjust zoom, you have to move your legs. You are forced to kneel, lean, stand on your toes, and slide against brick walls to get your shot. It turns out that confining your sight expands your artistic resourcefulness. 

### 2. Symmetries in the Mundane
Street architecture is filled with unexpected, geometric rhythm. When you wait on a street corner for twenty minutes for a walker's shadow to hit a diagonal concrete joint precisely, you realize the world is not random chaos—it has design waiting to be selected.

### 3. Gratitude for Shifting Shadows
Every hour of the day tells a different story. The golden hours paint the city in warm optimism, whereas the midday sun challenges you with brutal, unforgiving high-contrast shadows. Learning to see other times of day with compassion shifted how I perceive personal hardship. Shadows are just high-contrast opportunities.`,
        date: 'May 28, 2026',
        author: 'Sandesh Poudel',
        readTime: '3 min read',
        category: 'Creative Philosophy',
        imageUrl: 'https://images.openai.com/static-rsc-4/pCsz-Xlxi3PInTvVP9my1ZT4zb4Z7HTpaA8fy9k4KEjryUdgUbdnc1kOWFBp_rddBJnygiD1fWh427axg1Cwk0YEiseyV4ytiN41zIsKUoIP4XEHwDChoABs2v7zcCgfcKdFYI677ydlxJIpzTMlk01BuflQsXx9UjoAXX2jIxlhypmvv8F0BdpNqfkM4IVg?purpose=fullsize',
        likes: 35,
        comments: [
          { id: 'ca1', user: 'Liam Fox', text: '50mm prime is indeed a magical restriction. Outstanding thoughts here.', date: 'May 29, 2026' }
        ]
      },
      {
        id: 'b3',
        title: 'Artistic Breakthrough: How I Discovered the "Omniscient" Eye',
        excerpt: 'My journey of risking everything, leaving standard composition rules behind, and rebuilding my style from fundamental physics.',
        content: `In 2021, I made the hardest decision of my life—leaving my stable day job to devote myself entirely to fine-art photography and visual curation. My family was skeptical, and my funding was running thin. That was the moment I chose to embrace the philosophy of **Omniscient**—the idea of an all-encompassing, all-observing eye that sees the hidden symmetries of our universe.

This transition from an amateur to a master was built on three core pillars:

### 1. Deep Internal Visualization First
Before I put my eye to the viewfinder, I visualize the target composition down to the exact light angles and refraction values. In the early mornings, I mentally outline the frame before the fog even parts. External capturing is simply the execution of a prior internal draft.

### 2. High Tolerance for Discomfort
Creative breakthroughs are a test of emotional endurance. I survived freezing Sapa mountain lines, early morning exhaustion in Kathmandu, and sleepless nights in Shibuya. Suffer the quiet hours of preparation so you can seize the fleeting moments of elite alignment.

### 3. Deconstruction to Fundamental Truths
I stopped following generic layout catalogs. Instead, I deconstructed shadows and highlights into raw physics: analyzing direct light reflection angles, natural gravity, and structural geometries. Rebuilding form from these base truths is how I achieved my signature look.`,
        date: 'May 14, 2026',
        author: 'Sandesh Poudel',
        readTime: '5 min read',
        category: 'Personal Development',
        imageUrl: 'https://images.openai.com/static-rsc-4/9cpGIsFpOVQGoTL2Tq3FV-5jJ3hUdkAD0XVWKRQjYV8-cj54nVKMosoBfGhhfrraoPMkz0RS3SHf3OC4zwAne6uAXvFdiqTQv9KWoZbBbaHKS_myw850ls7mA59XTfbeoYh0hFA8twD2l2JaAbECCgA9iJgZE0WrRF-rmwKRKs0evr_KZvq0CvIyb6aG-egU?purpose=fullsize',
        likes: 51,
        comments: []
      },
      {
        id: 'b4',
        title: 'The Story Behind My Best Photograph',
        excerpt: 'How waiting four hours in freezing mountain air in Sapa culminated in a serene snapshot of misty light breaking through misty pines.',
        content: `Many people view professional photos and think of high-speed cameras or lucky timings. But the secret of exceptional landscape composition is usually quite boring: it is the art of waiting with absolute stillness.

My photograph "The Silent Mist" was captured in the remote mountain passes of Vietnam. Sapa was enveloped in a cold, uniform shroud of gray mist. I arrived at the target coordinates at 5:00 AM, hoping for light, but saw nothing except a wall of absolute white.

### The Temptation to Pack up
After three hours of shivering, my fingers were numb, and my camera battery charge was dropping rapidly. I questioned my dedication. "Why am I waiting in a frozen mountain line for a shot that will likely be ruined?" But then I remembered my own commitment to relentless preparation—the deep understanding that perfect, elite compositions only align with patience, grit, and tireless discipline. 

### The Break in the Shroud
At precisely 8:43 AM, a micro-warmth from the mountain sun began to disperse the fog. For an electric window of only sixty seconds, the sun cast dramatic, parallel beams of light directly through the pine canopies, illuminating the frost. 

### The Frame Closes
I didn't zoom. I kept my exposure dialed down to retain the rich, deep shadows, and clicked five frames. By 8:45 AM, the fog reformed, and the pines vanished again. Those sixty seconds of light were my prize for 4 hours of cold stillness. 

That frame is a living metaphor: no matter how uniform the gray surrounding your life might feel, wait with persistence. The mist always breaks.`,
        date: 'April 22, 2026',
        author: 'Sandesh Poudel',
        readTime: '4 min read',
        category: 'Behind the Lens',
        imageUrl: 'https://images.openai.com/static-rsc-4/osa37Iv4tgvJ9bCYI2DD8Is6J3Tb_d5ceqyekgBuMdLF9ox8rO1NOoIlqcHzLu_0FfSdvzaCSTbXWbCSN2z97WeR_WKv2cWKlTrVwg2oIF-rS0tGJ2Vn6DleS2Bk5W0Hty3jyF2f5q6AwWQHu8Gu-HzN5duQ3LXZ28Hn1UD5pmKv-EUxDR8vN541dt4M-VJo?purpose=fullsize',
        likes: 64,
        comments: [
          { id: 'co3', user: 'Marcus Vance', text: '"Shadows are just high-contrast opportunities." I am printing this quote and pinning it right above my edit panel!', date: 'April 23, 2026' }
        ]
      }
    ];

    setBlogs(defaultBlogs);
    localStorage.setItem('omniscient_blogs', JSON.stringify(defaultBlogs));
  }, []);

  const persistBlogs = (updated: BlogPost[]) => {
    setBlogs(updated);
    localStorage.setItem('omniscient_blogs', JSON.stringify(updated));
  };

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = blogs.map(b => {
      if (b.id === id) {
        return { ...b, likes: b.likes + 1 };
      }
      return b;
    });
    persistBlogs(updated);
    if (selectedBlog && selectedBlog.id === id) {
      setSelectedBlog(prev => prev ? { ...prev, likes: prev.likes + 1 } : null);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentUser.trim() || !newCommentText.trim() || !selectedBlog) return;

    const newComment = {
      id: `c_${Date.now()}`,
      user: newCommentUser.trim(),
      text: newCommentText.trim(),
      date: 'Today'
    };

    const updatedBlogs = blogs.map(b => {
      if (b.id === selectedBlog.id) {
        return {
          ...b,
          comments: [...b.comments, newComment]
        };
      }
      return b;
    });

    persistBlogs(updatedBlogs);
    setSelectedBlog(prev => prev ? { ...prev, comments: [...prev.comments, newComment] } : null);
    
    setNewCommentUser('');
    setNewCommentText('');
    setIsCommentAdded(true);
    setTimeout(() => setIsCommentAdded(false), 3000);
  };

  return (
    <section id="blog-section" className="py-20 bg-stone-950/20 border-b border-white/10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {!selectedBlog ? (
            /* BLOG INDEX GRID VIEW */
            <motion.div
              key="index"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12"
            >
              {/* Blog Header */}
              <div className="text-center">
                <h2 id="blog-title" className="text-3xl font-serif font-light tracking-widest text-white sm:text-4xl uppercase">
                  Inspiration Blog & Stories
                </h2>
                <p id="blog-subtitle" className="mt-4 max-w-2xl mx-auto text-sm text-stone-400 font-light leading-relaxed">
                  Reflective essays, behind-the-scene narratives, and philosophical letters mapping core life patterns with fine visual compositions.
                </p>
              </div>

              {/* Grid of articles */}
              <div id="blog-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {blogs.map((blog) => (
                  <article
                    key={blog.id}
                    id={`blog-card-${blog.id}`}
                    onClick={() => setSelectedBlog(blog)}
                    className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/8 backdrop-blur-md cursor-pointer group transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Featured Image */}
                      <div className="relative aspect-16/9 bg-stone-950 overflow-hidden">
                        <img
                          src={blog.imageUrl}
                          alt={blog.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-103 transition-transform duration-700"
                        />
                        <span className="absolute top-3 left-3 bg-stone-950/90 border border-white/10 backdrop-blur-md text-amber-300 text-[9px] uppercase font-extrabold tracking-widest px-2.5 py-1 rounded-full shadow-md">
                          {blog.category}
                        </span>
                      </div>

                      {/* Snippet Info */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-stone-400 mb-3 font-light">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-amber-300/80" />
                            {blog.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {blog.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-serif font-light text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug">
                          {blog.title}
                        </h3>
                        <p className="text-xs text-stone-300 mt-2.5 line-clamp-3 leading-relaxed font-light">
                          {blog.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Footer and dynamic metrics */}
                    <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs mt-4">
                      <span className="font-semibold text-amber-300 hover:text-white flex items-center gap-1 text-[11px] uppercase tracking-wider transition-colors">
                        Read Story
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                      <div className="flex items-center gap-3 text-stone-400 font-mono">
                        <button
                          id={`like-btn-${blog.id}`}
                          onClick={(e) => handleLike(blog.id, e)}
                          className="flex items-center gap-1.5 hover:text-amber-300 transition-colors p-1.5 rounded hover:bg-white/5 border border-transparent hover:border-white/5"
                        >
                          <ThumbsUp className="w-3.5 h-3.5" />
                          {blog.likes}
                        </button>
                        <span className="flex items-center gap-1.5 p-1.5">
                          <MessageSquare className="w-3.5 h-3.5" />
                          {blog.comments.length}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          ) : (
            /* BLOG DETAILED FULL READER */
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="max-w-3xl mx-auto bg-stone-900 border border-white/10 overflow-hidden shadow-2xl rounded-3xl backdrop-blur-xl"
            >
              {/* Cover elements */}
              <div className="p-6 sm:p-8 bg-stone-950/80 text-white relative border-b border-white/10">
                <button
                  id="back-to-blogs"
                  onClick={() => setSelectedBlog(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-300 hover:text-white mb-6 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Back to Articles
                </button>

                <span className="bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full block w-max mb-4">
                  {selectedBlog.category}
                </span>

                <h1 className="text-2xl sm:text-3.5xl font-serif font-light tracking-wide text-white mb-4 leading-tight">
                  {selectedBlog.title}
                </h1>

                <div className="flex flex-wrap gap-4 text-xs text-stone-400 font-light">
                  <span>By <strong className="text-white hover:text-amber-300 font-medium">{selectedBlog.author}</strong></span>
                  <span>•</span>
                  <span>{selectedBlog.date}</span>
                  <span>•</span>
                  <span>{selectedBlog.readTime}</span>
                </div>
              </div>

              {/* Cover photographic background strip */}
              <div className="h-64 sm:h-80 w-full overflow-hidden bg-stone-950 relative border-b border-white/5">
                <img
                  src={selectedBlog.imageUrl}
                  alt={selectedBlog.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center opacity-80"
                />
              </div>

              {/* Text content Body */}
              <div className="p-6 sm:p-10">
                <div id="blog-content-body" className="prose prose-invert max-w-none text-stone-300 text-sm leading-relaxed space-y-4 font-light">
                  {selectedBlog.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('###')) {
                      return (
                        <h4 key={index} className="text-base font-serif font-light text-amber-200 pt-4 border-b border-white/5 pb-1">
                          {paragraph.replace('###', '').trim()}
                        </h4>
                      );
                    }
                    if (paragraph.startsWith('##')) {
                      return (
                        <h3 key={index} className="text-lg font-serif font-light text-amber-300 pt-5 pb-1">
                          {paragraph.replace('##', '').trim()}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('-')) {
                      return (
                        <ul key={index} className="list-disc pl-5 space-y-1 my-2 text-stone-400">
                          <li>{paragraph.substring(1).trim()}</li>
                        </ul>
                      );
                    }
                    return <p key={index}>{paragraph}</p>;
                  })}
                </div>

                {/* Bottom metrics bar */}
                <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                  <button
                    id="like-blog-detail"
                    onClick={(e) => handleLike(selectedBlog.id, e)}
                    className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 text-amber-300 text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-black/20"
                  >
                    <ThumbsUp className="w-4 h-4 text-amber-200" />
                    Appreciate ({selectedBlog.likes})
                  </button>
                  <span className="text-stone-400 text-xs font-light">Comments ({selectedBlog.comments.length})</span>
                </div>

                {/* Comments section */}
                <div className="mt-12">
                  <h3 className="text-lg font-serif font-light text-white mb-6 flex items-center gap-1.5 uppercase tracking-wide">
                    <MessageSquare className="w-5 h-5 text-stone-500" />
                    Reader Discussion
                  </h3>

                  {/* List comments */}
                  <div className="space-y-4 mb-8">
                    {selectedBlog.comments.length === 0 ? (
                      <p className="text-stone-500 italic text-xs">No responses yet. Be the first to start the conversation!</p>
                    ) : (
                      selectedBlog.comments.map((comment) => (
                        <div key={comment.id} className="bg-white/5 rounded-xl p-4 border border-white/5">
                          <div className="flex justify-between items-center text-xs mb-1 font-light">
                            <span className="font-semibold text-white">{comment.user}</span>
                            <span className="text-stone-500">{comment.date}</span>
                          </div>
                          <p className="text-xs text-stone-300 leading-relaxed font-light">{comment.text}</p>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Add comment Form */}
                  <form onSubmit={handleAddComment} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h4 className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-4">Add Your Reflection</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1 shadow-xs">Your Name</label>
                        <input
                           id="comment-author-name"
                          type="text"
                          required
                          value={newCommentUser}
                          onChange={(e) => setNewCommentUser(e.target.value)}
                          placeholder="William Herschel"
                          className="w-full text-xs bg-stone-950/50 border border-white/10 rounded-xl p-3 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-405 focus:border-amber-400 focus:bg-stone-900"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1 shadow-xs font-light">Your Remark</label>
                      <textarea
                        id="comment-remark-text"
                        required
                        rows={3}
                        value={newCommentText}
                        onChange={(e) => setNewCommentText(e.target.value)}
                        placeholder="Share your thoughts on how Sandesh's fine-art life stories inspired your creative process..."
                        className="w-full text-xs bg-stone-950/50 border border-white/10 rounded-xl p-3 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-405 focus:border-amber-400 focus:bg-stone-900"
                      />
                    </div>

                    <button
                      id="submit-comment-button"
                      type="submit"
                      className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-350 text-stone-950 text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md cursor-pointer"
                    >
                      {isCommentAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          Reflection Submitted!
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          Publish Remark
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
 
        </div>
      </section>
    );
}
