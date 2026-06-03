/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Shield, Clock, Users, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { GYM_INFO } from '../data';

export default function About() {
  const values = [
    {
      icon: Clock,
      title: 'Vast Operating Hours',
      desc: 'Open from 6:00 AM clear up to 10:00 PM (Monday-Saturday) so you never have to skip a session due to your professional schedule.'
    },
    {
      icon: Shield,
      title: 'Prone Safety & Certified Guidance',
      desc: 'Expert personal and floor coaches always on standby, instructing proper compound lifting form and posture alignment.'
    },
    {
      icon: Target,
      title: 'Focus on Actual Progression',
      desc: 'Tailored local training, custom nutrition programs, and heavy duty Olympic power towers to support strength goals.'
    },
    {
      icon: Users,
      title: 'High-Octane Community',
      desc: 'Join hundreds of friendly local lifters of Delhi who share an intense passion for muscle growth, health, and mutual respect.'
    }
  ];

  const highlights = [
    'Fully airconditioned facility with triple-filtered air exchange',
    'Custom rubberized flooring to support high impact deadlifts',
    'Premium locker cubes, changing rooms, and supplement bar',
    'Safe, welcoming workout atmosphere for women'
  ];

  return (
    <section id="about" className="py-24 bg-gym-dark relative overflow-hidden">
      {/* Decorative gradient sphere */}
      <div className="absolute top-[30%] -left-[10%] w-[40%] h-[40%] bg-orange-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual Showcase card */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=800&q=80"
                alt="Gym Interior"
                className="rounded-3xl shadow-2xl border border-white/5 w-full object-cover h-[450px] brightness-[0.7]"
              />
              
              {/* Absolut floating card */}
              <div className="absolute -bottom-6 -right-6 md:right-4 bg-[#111111] border border-white/10 p-6 rounded-3xl shadow-2xl max-w-sm box-orange-glow-sm">
                <span className="text-orange-brand font-display font-black text-4xl block leading-none">4.8 ★</span>
                <span className="text-xs uppercase text-[#ffffff]/70 font-bold tracking-widest block mt-1 italic">Google Rated Excellence</span>
                <p className="text-xs text-white/50 mt-2 leading-relaxed">
                  Consistently rated 5 stars by West Delhi residents for pristine coaching standards, clean machinery, and intense gym energy.
                </p>
              </div>
            </div>
            
            {/* Outline box frames */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-orange-brand" />
          </div>

          {/* Right Column: Detailed narrative & features */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-orange-brand">
                <span className="h-px w-8 bg-orange-brand" />
                <span className="text-xs uppercase tracking-widest font-mono font-bold">ESTABLISHED PRESTIGE</span>
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl text-white tracking-tight uppercase">
                WEST DELHI'S PRIMARY <br />
                <span className="text-orange-brand">IRON SANCTUARY</span>
              </h2>
              <p className="text-gray-400 leading-relaxed font-light">
                Located at **WZ-80A, 2nd floor Pankha Road, Gali Number 5, near Neelgagan Hotel**, D3 Fitness is a sprawling, high-performance strength facility designed for those who take their physical self-improvement seriously. Our goal is to bypass the typical commercial gym fluff and supply standard heavy machinery, elite compound setup bays, and highly scientific coaching.
              </p>
            </div>

            {/* Checklist items */}
            <div className="grid md:grid-cols-2 gap-3">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-orange-brand shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <hr className="border-gym-gray/50" />

            {/* Quick value cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.slice(0, 2).map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div key={idx} className="space-y-2 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-orange-brand/55 group-hover:bg-orange-brand/10 transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-orange-brand" />
                      </div>
                      <h4 className="font-display font-bold text-base text-white uppercase group-hover:text-orange-brand transition-colors italic">
                        {val.title}
                      </h4>
                    </div>
                    <p className="text-xs text-white/50 leading-relaxed pl-[52px]">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
