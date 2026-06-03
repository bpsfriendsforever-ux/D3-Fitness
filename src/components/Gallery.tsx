/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY } from '../data';
import { FacilityImage } from '../types';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Heavy Lifting' | 'Cardio ' | 'Group Workouts' | 'Amenities'>('All');
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  const filteredPhotos = selectedCategory === 'All'
    ? GALLERY
    : GALLERY.filter(img => img.category === selectedCategory);

  const handleNextPhoto = () => {
    if (activePhotoIdx === null) return;
    setActivePhotoIdx((activePhotoIdx + 1) % filteredPhotos.length);
  };

  const handlePrevPhoto = () => {
    if (activePhotoIdx === null) return;
    setActivePhotoIdx((activePhotoIdx - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section id="gallery" className="py-24 bg-gym-dark relative overflow-hidden text-white">
      {/* Background visual details */}
      <div className="absolute top-[10%] -right-[15%] w-[45%] h-[45%] bg-orange-brand/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-[3%] top-0 bottom-0 w-px bg-gym-gray/20 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-gym-gray border border-gray-800 px-3 py-1 rounded-md text-xs font-semibold text-orange-brand uppercase tracking-widest">
              <LayoutGrid className="w-4 h-4 text-orange-brand" />
              Facility Showcase
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
              GALLERY <span className="text-orange-brand">FACILITIES</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
              Take a walk through our high-contrast, heavily equipped training floors at Pankha Road, featuring commercial grade rigs, dumbbell racks, and functional cardio layouts.
            </p>
          </div>

          {/* Inline filters */}
          <div className="flex flex-wrap gap-2 text-xs font-bold leading-none">
            {(['All', 'Heavy Lifting', 'Cardio ', 'Group Workouts', 'Amenities'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-full uppercase tracking-wider border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-orange-brand text-gym-black border-orange-brand shadow-[0_0_15px_rgba(255,107,0,0.3)] font-black'
                    : 'bg-white/5 text-[#ffffff]/60 border-white/10 hover:text-white'
                }`}
              >
                {cat === 'Cardio ' ? 'Cardio Zone' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              layout
              key={photo.id}
              onClick={() => setActivePhotoIdx(index)}
              className="group relative h-72 rounded-3xl overflow-hidden border border-white/5 hover:border-orange-brand/40 hover:shadow-[0_0_20px_rgba(255,107,0,0.15)] transition-all duration-300 cursor-pointer shadow-lg bg-[#111111]"
            >
              {/* Actual Image utilizing Immersive grayscale transitions */}
              <img
                src={photo.url}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />

              {/* Shading gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gym-black/95 via-gym-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Overlay layout metadata */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-[10px] font-mono font-bold text-orange-brand uppercase tracking-widest bg-orange-brand/10 border border-orange-brand/20 px-2.5 py-1 rounded-full w-max mb-2">
                  {photo.category}
                </span>
                <h3 className="font-display font-black text-lg text-white leading-tight uppercase italic">
                  {photo.title}
                </h3>
                <p className="text-xs text-white/50 mt-1 line-clamp-2">
                  {photo.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-orange-brand font-bold mt-4 font-mono uppercase tracking-wider">
                  <Maximize2 className="w-3.5 h-3.5 text-orange-brand" />
                  View Lightbox
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Lightbox Portal Modal */}
        <AnimatePresence>
          {activePhotoIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-gym-black/98 w-screen h-screen flex flex-col items-center justify-center p-4 overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={() => setActivePhotoIdx(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gym-gray border border-gray-800 text-gray-400 hover:text-white hover:border-orange-brand cursor-pointer"
                aria-label="Close lightbox modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative max-w-5xl w-full flex items-center justify-center">
                {/* Navigation Controls */}
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-2 md:-left-16 p-3 rounded-full bg-gym-gray/70 border border-gray-800 hover:bg-orange-brand hover:text-gym-black hover:border-orange-brand text-white transition-all cursor-pointer z-10"
                  aria-label="Prior image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Main Lightbox Frame */}
                <div className="space-y-4 w-full flex flex-col items-center">
                  <img
                    src={filteredPhotos[activePhotoIdx].url}
                    alt={filteredPhotos[activePhotoIdx].title}
                    className="max-h-[65vh] max-w-full md:max-w-2xl lg:max-w-4xl object-contain rounded-lg border border-gray-800 shadow-2xl"
                  />

                  {/* Lightbox Meta Texts */}
                  <div className="text-center space-y-2 max-w-2xl px-4">
                    <span className="text-xs font-mono font-bold text-orange-brand uppercase tracking-widest">
                      {filteredPhotos[activePhotoIdx].category}
                    </span>
                    <h3 className="font-display font-black text-2xl md:text-3xl text-white uppercase leading-none">
                      {filteredPhotos[activePhotoIdx].title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {filteredPhotos[activePhotoIdx].description}
                    </p>
                    <div className="pt-3">
                      <button
                        onClick={() => setActivePhotoIdx(null)}
                        className="px-6 py-2 bg-white text-gym-black hover:bg-orange-brand hover:text-gym-black font-black uppercase text-xs rounded-full shadow-[0_0_15px_rgba(255,107,0,0.3)] transition-all cursor-pointer inline-flex items-center gap-1.5"
                      >
                        <X className="w-4 h-4 stroke-[2.5]" />
                        Close Preview
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleNextPhoto}
                  className="absolute right-2 md:-right-16 p-3 rounded-full bg-gym-gray/70 border border-gray-800 hover:bg-orange-brand hover:text-gym-black hover:border-orange-brand text-white transition-all cursor-pointer z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Progress Counters */}
              <div className="text-xs text-gray-500 font-mono mt-8">
                IMAGE {activePhotoIdx + 1} OF {filteredPhotos.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
