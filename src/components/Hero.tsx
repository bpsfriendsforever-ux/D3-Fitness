/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronRight, Flame, Sparkles, MapPin, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { GYM_INFO } from '../data';

interface HeroProps {
  onNavigateToBooking: () => void;
  onNavigateToGallery: () => void;
}

export default function Hero({ onNavigateToBooking, onNavigateToGallery }: HeroProps) {
  const stats = [
    { value: '4.8★', label: 'Starred Google Rating', icon: Award },
    { value: '280+', label: 'Verified Local Reviews', icon: Sparkles },
    { value: '50KG', label: 'Maximum Solid Iron Weights', icon: Flame },
    { value: 'Pankha Rd', label: 'New Delhi 110046', icon: MapPin },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gym-black overflow-hidden pt-16">
      {/* Background Graphic overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,102,0,0.12),transparent_55%)] z-10 pointers-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,20,20,0.85),rgba(12,12,12,0.95))] z-10 pointer-events-none" />

      {/* Extreme resolution athletic header image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 filter brightness-[0.4]"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80')` 
        }} 
      />

      {/* Decorative vertical lines representing orange stripes/industrial feel */}
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gym-gray/20 hidden lg:block" />
      <div className="absolute right-[8%] top-0 bottom-0 w-px bg-gym-gray/20 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 z-20 w-full text-center lg:text-left">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 flex flex-col justify-center space-y-8">
            {/* Tagline pill */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-center lg:self-start items-center gap-2 bg-orange-brand/10 border border-orange-brand/40 px-4 py-1.5 rounded-full text-xs font-semibold text-orange-brand uppercase tracking-widest"
            >
              <Flame className="w-4 h-4 animate-pulse" />
              West Delhi's Premier Strength Arena
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tighter leading-[0.85] uppercase italic"
              >
                UNLEASH <br />
                <span className="text-orange-brand">
                  THE BEAST
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white/50 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
              >
                Janakpuri's premium strength & conditioning arena. Experience elite bodybuilding setups, robust powerlifting equipment, and result-oriented training here.
              </motion.p>
            </div>

            {/* Quick Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onNavigateToBooking}
                className="w-full sm:w-auto px-8 py-4 bg-orange-brand text-gym-black font-black uppercase text-sm rounded-full shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_25px_rgba(255,107,0,0.5)] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
              >
                Book Free Sessions
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
              
              <button
                onClick={onNavigateToGallery}
                className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white border-2 border-white/10 hover:border-orange-brand font-bold uppercase text-sm rounded-full transition-all cursor-pointer"
              >
                Take a Virtual Tour
              </button>
            </motion.div>

            {/* Stat Counters Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gym-gray/50 max-w-3xl"
            >
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                    <div className="flex items-center gap-1.5 mb-1 text-orange-brand">
                      <Icon className="w-4 h-4 text-orange-brand/70 group-hover:text-orange-brand transition-colors duration-200" />
                      <span className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 font-medium tracking-wide uppercase leading-tight">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex justify-center select-none relative">
            {/* Visual badge of iron and power with a custom neon border */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-80 h-[420px] bg-gym-dark rounded-3xl border border-white/10 shadow-2xl p-6 overflow-hidden flex flex-col justify-end box-orange-glow group hover:border-orange-brand/40 transition-all duration-300"
            >
              {/* Blur spot */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-brand/5 blur-[60px] rounded-full" />

              {/* Image background in secondary showcase panel */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60 filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80')` 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-gym-black/25 to-transparent z-10" />
              
              <div className="relative z-20 space-y-2">
                <span className="text-orange-brand font-black text-xs uppercase tracking-widest font-mono">
                  #D3FITNESSDELHI
                </span>
                <h4 className="font-display font-black text-2xl leading-none text-white uppercase italic">
                  HEAVY dumbbells up to 50KG
                </h4>
                <p className="text-xs text-white/50 leading-snug">
                  Designed for heavy lifters, powerlifters, and casual body recomposition athletes. Fully loaded platforms await you.
                </p>
              </div>
            </motion.div>
            
            {/* Abstract absolute graphics */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-orange-brand/35 rounded-tr-lg" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-orange-brand/35 rounded-bl-lg" />
          </div>

        </div>
      </div>
    </div>
  );
}
