import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, MapPin, Eye, Sliders, X, Play, Film } from 'lucide-react';
import { Photo } from '../types';

export const INITIAL_PHOTOS: Photo[] = [
  {
    id: 'p1',
    title: 'Warm Sunset Over Kathmandu Hills',
    description: 'A stunning sunset showcasing high-contrast tree silhouettes cast against an ambient orange and purple sky over the Kathmandu valley.',
    url: '/src/assets/images/sunset_trees_1781446198816.jpg',
    category: 'Nature',
    location: 'Kathmandu, Nepal',
    settings: {
      camera: 'Sony Alpha 7R V',
      lens: 'FE 50mm F1.2 GM',
      shutter: '1/250s',
      aperture: 'f/2.0',
      iso: '100'
    }
  },
  {
    id: 'p2',
    title: 'The Silent Mist over Pine Ridges',
    description: 'Ethereal mountain fog wrapping around deep green conifers, creating a serene and quiet atmosphere where nature reveals its design.',
    url: '/src/assets/images/green_hills_mist_1781446213200.jpg',
    category: 'Nature',
    location: 'Sapa Mountains',
    settings: {
      camera: 'Fujifilm GFX 100S',
      lens: 'GF 32-64mm F4 R LM WR',
      shutter: '1/60s',
      aperture: 'f/8.0',
      iso: '160'
    }
  },
  {
    id: 'p3',
    title: 'Trisuli Gorge Storm and Shadows',
    description: 'A panoramic scene displaying a powerful winding river carving through rich mountain gorges under dark, moody storm clouds.',
    url: '/src/assets/images/scenic_valley_river_1781446238761.jpg',
    category: 'Nature',
    location: 'Trisuli Valley, Nepal',
    settings: {
      camera: 'Leica M11',
      lens: 'Summilux-M 35mm F1.4 ASPH',
      shutter: '1/500s',
      aperture: 'f/4.0',
      iso: '64'
    }
  },
  {
    id: 'p4',
    title: 'Cinematic Mountain Wind Loop',
    description: 'A breathtaking 4K slow-motion loop capturing pine trees swaying in the high mountain wind as mist swirls dynamically across the ridges.',
    url: '/src/assets/images/green_hills_mist_1781446213200.jpg',
    category: 'Nature',
    location: 'Annapurna Range, Nepal',
    isVideo: true,
    settings: {
      camera: 'RED V-Raptor 8K',
      lens: 'Zeiss Otus 55mm F1.4',
      shutter: '1/120s (120fps)',
      aperture: 'f/2.8',
      iso: '320'
    }
  },
  {
    id: 'p5',
    title: 'Traditional Temple Pigeon Flocks',
    description: 'A striking sunrise photograph capturing flocks of pigeons taking flight over the ancient stone steps of a traditional Nepali temple complex.',
    url: '/src/assets/images/nepali_temple_1781446165729.jpg',
    category: 'Others',
    location: 'Pashupatinath Area, Nepal',
    settings: {
      camera: 'Sony Alpha 7R V',
      lens: 'FE 24-70mm F2.8 GM II',
      shutter: '1/400s',
      aperture: 'f/5.6',
      iso: '200'
    }
  },
  {
    id: 'p6',
    title: 'Durga\'s Luminous Glow',
    description: 'A mesmerizing close-up of a bronze Durga goddess statue, captured in an illuminated glass showcase with a dramatic, glowing sunburst flare.',
    url: '/src/assets/images/durga_statue_1781446185273.jpg',
    category: 'Others',
    location: 'Patan Museum, Nepal',
    settings: {
      camera: 'Canon EOS R5',
      lens: 'RF 50mm F1.2 L USM',
      shutter: '1/160s',
      aperture: 'f/1.2',
      iso: '160'
    }
  },
  {
    id: 'p7',
    title: 'Majestic Boudhanath Stupa',
    description: 'A luminous shot of the Boudhanath dome under a clear blue sky, featuring flurries of pigeons flying high amidst fluttering multi-colored prayer flags.',
    url: '/src/assets/images/boudhanath_pigeons_1781446255056.jpg',
    category: 'Others',
    location: 'Kathmandu, Nepal',
    settings: {
      camera: 'Sony Alpha 7S III',
      lens: 'FE 16-35mm F2.8 GM',
      shutter: '1/1000s',
      aperture: 'f/4.0',
      iso: '400'
    }
  },
  {
    id: 'p8',
    title: 'Krishna Mandir in Monochrome',
    description: 'A timeless black and white fine-art capture of Krishna Mandir, bringing out the intricate carvings and sharp shadow lines in the temple arches.',
    url: '/src/assets/images/bw_krishna_mandir_1781446269702.jpg',
    category: 'Others',
    location: 'Patan Durbar Square, Nepal',
    settings: {
      camera: 'Leica M11 Mono',
      lens: 'Apo-Summicron-M 50mm F2 ASPH',
      shutter: '1/125s',
      aperture: 'f/5.6',
      iso: '100'
    }
  }
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

  const categories = ['All', 'Nature', 'Others'];

  const filteredPhotos = selectedCategory === 'All'
    ? INITIAL_PHOTOS
    : INITIAL_PHOTOS.filter(p => p.category === selectedCategory);

  return (
    <section id="gallery-section" className="py-20 bg-stone-950/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h2 id="gallery-title" className="text-3xl font-serif font-light tracking-widest text-white sm:text-4xl uppercase">
            Omniscient Fine-Art Gallery
          </h2>
          <p id="gallery-subtitle" className="mt-4 max-w-2xl mx-auto text-sm text-stone-400 font-light leading-relaxed">
            A curation of snapshots designed to evoke feeling, reveal hidden symmetries, and capture the raw elegance of fleeting life stories.
          </p>
        </div>

        {/* Category Filters */}
        <div id="gallery-filters" className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              id={`filter-${category}`}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border backdrop-blur-md ${
                selectedCategory === category
                  ? 'bg-amber-400 border-amber-400 text-stone-950 shadow-md shadow-amber-400/10'
                  : 'bg-white/5 text-stone-350 hover:text-white hover:bg-white/10 border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Curation grid */}
        <div id="gallery-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:border-white/20 transition-all duration-300 group"
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 overflow-hidden bg-stone-950">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-103 transition-all duration-700 ease-out"
                  />
                  {photo.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-stone-950/80 border border-white/20 flex items-center justify-center text-amber-300 shadow-xl backdrop-blur-md">
                        <Play className="w-5 h-5 ml-0.5 fill-amber-300" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button
                      id={`view-${photo.id}`}
                      onClick={() => setActivePhoto(photo)}
                      className="flex items-center gap-1.5 bg-amber-400 text-stone-950 text-xs font-bold px-4 py-2 rounded-xl shadow-md hover:bg-amber-350 transition-all cursor-pointer"
                    >
                      {photo.isVideo ? (
                        <>
                          <Play className="w-3.5 h-3.5 fill-stone-950" />
                          Play Cinematic Loop
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          Inspect Composition
                        </>
                      )}
                    </button>
                  </div>
                  <span className="absolute top-3 left-3 bg-stone-950/80 border border-white/10 backdrop-blur-md text-amber-300 text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full flex items-center gap-1">
                    {photo.isVideo && <Film className="w-3 h-3 text-amber-400" />}
                    {photo.category} {photo.isVideo && '• Video'}
                  </span>
                </div>

                {/* Info and Camera Meta */}
                <div className="p-5">
                  <div className="flex items-start justify-between min-h-[50px] mb-2">
                    <div>
                      <h3 className="text-lg font-serif font-light text-white leading-tight">{photo.title}</h3>
                      <p className="flex items-center text-xs text-stone-400 mt-1 font-light">
                        <MapPin className="w-3 h-3 mr-1 text-amber-300" />
                        {photo.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-stone-300 line-clamp-2 min-h-[32px] mb-4 font-light leading-relaxed">
                    {photo.description}
                  </p>
                  
                  {/* Technical strip */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-stone-400">
                    <div className="flex items-center gap-1">
                      <Camera className="w-3.5 h-3.5 text-stone-500" />
                      <span className="max-w-[120px] truncate">{photo.settings.camera}</span>
                    </div>
                    <div className="flex items-center gap-2 font-light text-stone-500">
                      <span>{photo.settings.shutter}</span>
                      <span>•</span>
                      <span>{photo.settings.aperture}</span>
                      <span>•</span>
                      <span className="text-amber-200/80">ISO {photo.settings.iso}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox / Detail view Modal */}
        <AnimatePresence>
          {activePhoto && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActivePhoto(null)}
                className="absolute inset-0 bg-stone-950/90 backdrop-blur-md"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-stone-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh]"
              >
                {/* Image Section */}
                <div className="md:col-span-7 bg-black flex items-center justify-center relative min-h-[300px] overflow-hidden">
                  {activePhoto.isVideo ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.06)_0%,transparent_70%)]">
                      <div className="relative w-full h-full max-h-[380px] rounded-xl overflow-hidden border border-white/15 bg-stone-950 shadow-2xl flex flex-col justify-between">
                        <div className="p-3 bg-stone-900/90 border-b border-white/5 flex justify-between items-center text-[10px] font-mono text-stone-400 leading-none">
                          <span className="flex items-center gap-1.5 text-rose-500 font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse inline-block" />
                            Live Loop Playback
                          </span>
                          <span>HDR • 120 FPS</span>
                        </div>
                        
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <img
                            src={activePhoto.url}
                            alt="Video Frame"
                            className="w-full h-full object-cover opacity-20"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        
                        <div className="flex flex-col items-center justify-center relative z-10 flex-grow py-12">
                          <div className="w-14 h-14 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shadow-lg backdrop-blur-md animate-pulse">
                            <Play className="w-5 h-5 text-amber-300 fill-amber-300 ml-0.5" />
                          </div>
                          <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 mt-4">Simulated High-Fi Video</span>
                          <span className="text-xs text-stone-300 mt-1 max-w-xs text-center font-serif italic font-light">"Swaying alpine mist sweeps Kathmandu valley ridges."</span>
                        </div>

                        <div className="p-3 bg-stone-900/90 border-t border-white/5 flex items-center gap-4 text-[10px] font-mono text-stone-400 relative z-10">
                          <span className="text-amber-400 font-bold uppercase">Progress:</span>
                          <div className="flex-grow h-1.5 rounded-full bg-white/10 overflow-hidden relative">
                            <div className="absolute left-0 top-0 bottom-0 bg-amber-400 rounded-full w-[60%]" />
                          </div>
                          <span>00:06 / 00:10</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={activePhoto.url}
                      alt={activePhoto.title}
                      referrerPolicy="no-referrer"
                      className="max-h-[500px] md:max-h-full max-w-full object-contain opacity-90"
                    />
                  )}
                  <span className="absolute top-4 left-4 bg-stone-950/95 border border-white/10 text-amber-300 text-[10px] font-semibold uppercase px-3 py-1.5 rounded-full flex items-center gap-1">
                    {activePhoto.isVideo && <Film className="w-3.5 h-3.5 text-amber-400" />}
                    {activePhoto.category}
                  </span>
                </div>

                {/* Details Section */}
                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[500px] md:max-h-[600px] bg-stone-950/40 text-stone-300">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-serif font-light text-white tracking-wide">{activePhoto.title}</h3>
                        <p className="flex items-center text-xs font-light text-amber-300 mt-1">
                          <MapPin className="w-3.5 h-3.5 mr-1" />
                          {activePhoto.location}
                        </p>
                      </div>
                      <button
                        id="close-lightbox"
                        onClick={() => setActivePhoto(null)}
                        className="p-1.5 rounded-xl text-stone-400 hover:text-white hover:bg-white/15 transition-all"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="text-sm text-stone-300 leading-relaxed mb-6 font-light">
                      {activePhoto.description}
                    </p>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider mb-3">
                        <Sliders className="w-3.5 h-3.5 text-amber-300" />
                        Technique Spec
                      </div>
                      <dl className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs font-light">
                        <div>
                          <dt className="text-stone-500">Camera Body</dt>
                          <dd className="font-semibold text-stone-100 truncate mt-0.5">{activePhoto.settings.camera}</dd>
                        </div>
                        <div>
                          <dt className="text-stone-500">Optic Lens</dt>
                          <dd className="font-semibold text-stone-100 truncate mt-0.5">{activePhoto.settings.lens}</dd>
                        </div>
                        <div>
                          <dt className="text-stone-500">Shutter Speed</dt>
                          <dd className="font-semibold text-amber-300 mt-0.5">{activePhoto.settings.shutter}</dd>
                        </div>
                        <div>
                          <dt className="text-stone-500">Aperture</dt>
                          <dd className="font-semibold text-amber-300 mt-0.5">{activePhoto.settings.aperture}</dd>
                        </div>
                        <div className="col-span-2">
                          <dt className="text-stone-500">ISO Speed</dt>
                          <dd className="font-semibold text-stone-100 mt-0.5">{activePhoto.settings.iso}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <p className="text-[10px] text-stone-500 uppercase tracking-widest font-mono text-center">
                      Part of Omniscient Creative Curation
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
