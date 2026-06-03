/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Dumbbell, ArrowUpCircle } from 'lucide-react';
import { GYM_INFO } from '../data';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gym-black border-t border-gym-gray py-12 text-gray-500 text-xs font-mono relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[20%] h-[20%] bg-orange-brand/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo with tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-orange-brand flex items-center justify-center text-gym-black font-black text-lg tracking-tighter shadow-[0_0_15px_rgba(255,107,0,0.3)]">
                D3
              </div>
              <span className="font-display font-black text-lg text-white uppercase tracking-tight italic">
                FITNESS
              </span>
            </div>
            <p className="text-[10px] text-white/30 font-bold uppercase tracking-tight max-w-xs leading-relaxed font-sans">
              WZ-80A, 2nd floor Pankha Road, Gali Number 5, New Delhi 110046.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            <a 
              href={GYM_INFO.socials.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-orange-brand transition-colors text-[10px] uppercase font-bold tracking-wider"
            >
              Instagram
            </a>
          </div>

          {/* Copyright scroll top */}
          <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
            <button
              onClick={handleScrollTop}
              className="group flex items-center gap-1.5 text-gray-400 hover:text-orange-brand font-bold uppercase tracking-wider text-[10px] transition-colors cursor-pointer"
              aria-label="Scroll back to top header"
            >
              Back To Top
              <ArrowUpCircle className="w-4 h-4 text-orange-brand transition-transform group-hover:-translate-y-0.5" />
            </button>
            <span>
              &copy; {new Date().getFullYear()} D3 Fitness Delhi. All Rights Reserved.
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
