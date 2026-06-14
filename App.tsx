import { useState } from 'react';
import { Camera, Compass, BookOpen, User, Mail, ShieldAlert, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import GallerySection from './components/GallerySection';
import IdolsSection from './components/IdolsSection';
import BlogSection from './components/BlogSection';
import StoriesSection from './components/StoriesSection';

export default function App() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'idols' | 'blog' | 'stories'>('idols');

  return (
    <div 
      className="min-h-screen bg-stone-950 text-stone-100 font-sans antialiased selection:bg-amber-400 selection:text-stone-950"
      style={{
        backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(99, 102, 241, 0.12) 0%, transparent 50%), radial-gradient(circle at 90% 90%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)'
      }}
    >
      
      {/* Sleek Header bar with Glassmorphism */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-stone-950/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo with camera symbol - Frosted feel */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg backdrop-blur-md">
              <Camera className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h1 className="font-serif tracking-[0.15em] font-light text-xl text-white leading-none">
                OMNISCIENT
              </h1>
              <span className="text-[9px] uppercase tracking-[0.18em] text-stone-500 font-extrabold block mt-1 leading-none">Perspective • Wisdom</span>
            </div>
          </div>

          {/* Quick contact trigger - Frosted pill */}
          <div className="flex items-center gap-4">
            <a
              id="top-contact-link"
              href="mailto:poudelsandesh789@gmail.com"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-stone-300 hover:text-white uppercase tracking-wider bg-white/5 border border-white/10 hover:border-white/20 py-2 px-4 rounded-full transition-all backdrop-blur-md hover:bg-white/10"
            >
              <Mail className="w-3.5 h-3.5 text-amber-300" />
              Contact Us
            </a>
          </div>

        </div>
      </header>

      {/* Hero Brand Identity Section with Warm Background */}
      <section className="bg-stone-900/20 border-b border-white/10 py-16 sm:py-24 text-center relative overflow-hidden">
        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 bg-amber-400/10 border border-amber-450/20 text-amber-300 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-amber-400 fill-amber-400/20" />
            My Creative Life Stories & Photographic Milestones
          </span>
          
          <h1 className="text-4xl sm:text-6.5xl font-serif font-light text-white leading-tight tracking-tight">
            Stories of My Life <br />
            <span className="text-stone-400 italic font-light font-serif">& My Creative Journey</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-stone-300 leading-relaxed font-sans font-light">
            A specialized digital space combining professional photography curations with personal life stories, chapters of self-discovery, and my private coaching masterclasses.
          </p>

          {/* Master Section Toggle tabs - Beautiful transparent capsules */}
          <div className="pt-6 flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            <button
              id="show-idols-tab"
              onClick={() => setActiveTab('idols')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 uppercase tracking-wide border ${
                activeTab === 'idols'
                  ? 'bg-amber-400 border-amber-400 text-stone-950 shadow-lg shadow-amber-400/10 font-bold'
                  : 'bg-white/5 border-white/10 text-stone-300 hover:text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-md'
              }`}
            >
              <Compass className="w-4 h-4" />
              🌟 My Life Chapters
            </button>
            <button
              id="show-gallery-tab"
              onClick={() => setActiveTab('gallery')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 uppercase tracking-wide border ${
                activeTab === 'gallery'
                  ? 'bg-amber-400 border-amber-400 text-stone-950 shadow-lg shadow-amber-400/10 font-bold'
                  : 'bg-white/5 border-white/10 text-stone-300 hover:text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-md'
              }`}
            >
              <Camera className="w-4 h-4" />
              📸 Photography Gallery
            </button>
            <button
              id="show-blog-tab"
              onClick={() => setActiveTab('blog')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 uppercase tracking-wide border ${
                activeTab === 'blog'
                  ? 'bg-amber-400 border-amber-400 text-stone-950 shadow-lg shadow-amber-400/10 font-bold'
                  : 'bg-white/5 border-white/10 text-stone-300 hover:text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-md'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              ✍️ Inspiration Blog
            </button>
            <button
              id="show-stories-tab"
              onClick={() => setActiveTab('stories')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 uppercase tracking-wide border ${
                activeTab === 'stories'
                  ? 'bg-amber-400 border-amber-400 text-stone-950 shadow-lg shadow-amber-400/10 font-bold'
                  : 'bg-white/5 border-white/10 text-stone-300 hover:text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-md'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              📖 My Life Stories
            </button>
          </div>
        </div>
      </section>

      {/* Main active workspace panel */}
      <main className="relative min-h-[500px]">
        {activeTab === 'gallery' && <GallerySection />}
        {activeTab === 'idols' && <IdolsSection />}
        {activeTab === 'blog' && <BlogSection />}
        {activeTab === 'stories' && <StoriesSection />}
      </main>

      {/* Footer Branding line and contact */}
      <footer className="bg-stone-950 text-stone-400 py-16 border-t border-white/10 relative overflow-hidden">
        {/* Glow corner */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          
          {/* Logo description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/25 text-white flex items-center justify-center backdrop-blur-md">
                <Camera className="w-4.5 h-4.5 text-amber-300" />
              </div>
              <span className="font-serif tracking-[0.12em] font-light text-white text-md">OMNISCIENT</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Omniscient is a custom-curated photography portal exploring my lived experiences, milestones, struggles, and artistic journey in fine-art visual craft.
            </p>
          </div>

          {/* Contact and address cards */}
          <div id="footer-contact" className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-semibold">Contact & Inquiries</h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/5 backdrop-blur-sm">
                <Mail className="w-4 h-4 text-amber-300" />
                <a href="mailto:poudelsandesh789@gmail.com" className="hover:text-white transition-colors text-stone-300">
                  poudelsandesh789@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Core dedication */}
          <div className="space-y-4 text-xs">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider md:text-right text-left font-semibold">Curator Archive</h4>
            <p className="text-stone-500 leading-relaxed md:text-right text-left font-light">
              An all-encompassing archive of Sandesh Poudel's lifepaths, creative breakthroughs, and fine-art visual expressions.
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/5 text-center text-[11px] font-mono text-stone-600 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Omniscient Portfolios. All rights reserved. Crafted by Sandesh Poudel.</p>
          <div className="flex gap-6 text-[10px] uppercase tracking-wider text-stone-500">
            <span>42 Chapters Explored</span>
            <span>•</span>
            <span>Fine Art Curation</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
