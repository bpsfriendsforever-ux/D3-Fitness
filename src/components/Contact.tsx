/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Phone, Mail, Clock, Map, MessageSquareShare } from 'lucide-react';
import { GYM_INFO } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gym-black relative overflow-hidden text-white">
      {/* Background visual graphics */}
      <div className="absolute top-[20%] right-[3%] w-[40%] h-[40%] bg-orange-brand/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gym-gray/20 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gym-gray border border-gray-800 px-3 py-1 rounded-md text-xs font-semibold text-orange-brand uppercase tracking-widest">
            <MapPin className="w-4 h-4 text-orange-brand" />
            VISIT OR CONNECT
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
            FIND OUR <span className="text-orange-brand">LOCATION</span>
          </h2>
          <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
            Easily accessible from Janakpuri and Gali Number 5 Pankha Road. Located near Neelgagan Hotel.
          </p>
        </div>

        {/* Dashboard grid panel */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Column (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Hour details panel */}
            <div className="bg-[#111111] rounded-3xl border border-white/5 p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-center">
              <h3 className="font-display font-black text-xl uppercase tracking-wider text-orange-brand flex items-center gap-2 italic">
                <Clock className="w-5 h-5 text-orange-brand" />
                OPERATING HOURS
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm font-mono">
                <div className="flex justify-between items-center pb-3.5 border-b border-white/5">
                  <span className="text-[#ffffff]/40 uppercase font-medium">Monday - Friday</span>
                  <span className="text-white font-bold">{GYM_INFO.hours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center pb-3.5 border-b border-white/5">
                  <span className="text-[#ffffff]/40 uppercase font-medium">Saturday</span>
                  <span className="text-white font-bold">{GYM_INFO.hours.saturday}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-brand uppercase font-bold">Sunday Session</span>
                  <span className="text-orange-brand font-bold">{GYM_INFO.hours.sunday}</span>
                </div>
              </div>
            </div>

            {/* Direct coordinate addresses info */}
            <div className="bg-[#111111] rounded-3xl border border-white/5 p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-center">
              <h3 className="font-display font-black text-xl uppercase tracking-wider text-white italic">
                HEAD OFFICE CORNERS
              </h3>

              <div className="space-y-5 text-sm">
                {/* Address details */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0 mt-0.5 animate-pulse">
                    <MapPin className="w-4 h-4 text-orange-brand" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-white/30 font-bold block">physical location</span>
                    <p className="text-white/70 font-sans text-xs sm:text-sm leading-snug">
                      {GYM_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone details */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-orange-brand" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-white/30 font-bold block">Direct Hotline</span>
                    <a
                      href={`tel:${GYM_INFO.phone}`}
                      className="text-white hover:text-orange-brand font-mono font-bold text-sm"
                    >
                      {GYM_INFO.phone}
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Map Column (Col span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6 min-h-[400px]">
            <div className="bg-[#111111] rounded-3xl border border-white/5 p-4 flex-1 flex flex-col justify-between overflow-hidden relative shadow-2xl group">
              <iframe
                title="Google Maps Location for D3 Fitness"
                src={GYM_INFO.mapEmbedUrl}
                className="w-full h-[320px] rounded-2xl border border-white/5 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 shrink-0 bg-gym-gray"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <span className="text-xs text-white/40 leading-snug font-sans font-medium max-w-sm">
                  Click the action button to load optimized navigation directions directly on your native Google Maps mobile client.
                </span>
                
                <a
                  href={GYM_INFO.googleMapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-white hover:bg-orange-brand text-gym-black flex items-center justify-center gap-1.5 font-display font-black text-xs uppercase px-5 py-3 rounded-xl transition-all shrink-0 cursor-pointer shadow-md font-sans"
                >
                  <Map className="w-4 h-4 stroke-[2.5]" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
