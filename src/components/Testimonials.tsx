/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote, Star, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { REVIEWS, GYM_INFO } from '../data';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-gym-dark relative overflow-hidden">
      {/* Dynamic sphere */}
      <div className="absolute top-[30%] -left-[10%] w-[35%] h-[35%] bg-orange-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Side stats card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-orange-brand">
                <span className="h-px w-8 bg-orange-brand" />
                <span className="text-xs uppercase tracking-widest font-mono font-bold">CLIENT LOGS</span>
              </div>
              <h2 className="font-display font-black text-4xl text-white tracking-tight uppercase leading-none">
                WHAT ATHLETES <br />
                <span className="text-orange-brand">SAY LOGGED</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Our trainers and state-of-the-art power setups keep drawing fitness lovers from Uttam Nagar, Dwarka, and Janakpuri. Read our verified Google feedback reviews below.
              </p>
            </div>

            {/* Google Rating aggregate metrics */}
            <div className="bg-gym-black/85 rounded-xl border border-gray-800 p-6 space-y-4 shadow-xl box-orange-glow-sm">
              <div className="flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-widest text-[#4285F4]">
                <ShieldCheck className="w-4 h-4 text-[#34A853]" />
                Google Places API Verified
              </div>
              
              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-5xl text-white leading-none">
                  {GYM_INFO.rating}
                </span>
                <span className="text-xs text-gray-500 font-mono"> / 5.0 STARS</span>
              </div>

              {/* Rendering 5 solid stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-brand text-orange-brand" />
                ))}
              </div>

              <div className="text-xs text-gray-400 font-medium">
                Based on <strong className="text-white">{GYM_INFO.reviewCount}</strong> verified local user reviews logged on our Google Business listing.
              </div>
            </div>
          </div>

          {/* Testimonial bubbles column */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {REVIEWS.map((rev) => (
              <motion.div
                layout
                key={rev.id}
                className="bg-gym-black rounded-lg border border-gray-800 p-6 flex flex-col justify-between hover:border-gray-700 transition-all shadow-md relative"
              >
                <div className="space-y-4">
                  {/* Reviews header */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-orange-brand text-orange-brand" />
                      ))}
                      {rev.rating < 5 && <Star className="w-3.5 h-3.5 text-gray-700" />}
                    </div>

                    <Quote className="w-8 h-8 text-orange-brand/10 absolute top-4 right-4" />
                  </div>

                  {/* Body text feedback */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    "{rev.text}"
                  </p>
                </div>

                {/* Reviewer details */}
                <div className="mt-6 pt-4 border-t border-gym-gray/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-9 h-9 rounded-full object-cover border border-gray-800"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase">{rev.author}</h4>
                      <span className="text-[10px] text-gray-500 font-mono">{rev.date}</span>
                    </div>
                  </div>

                  {rev.isGoogleVerified && (
                    <span className="text-[10px] text-green-500 bg-green-500/10 border border-green-500/20 rounded px-2 py-0.5 font-mono font-bold flex items-center gap-1 uppercase">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      Verified
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
