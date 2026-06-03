/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Dumbbell, Flame, Activity, UserCheck, Sparkles, Clock, Award, Filter } from 'lucide-react';
import { motion } from 'motion/react';
import { PROGRAMS } from '../data';
import { Program } from '../types';

interface ProgramsProps {
  onSelectProgram: (programId: string) => void;
}

const CATEGORIES = ['All', 'Strength', 'HIIT', 'Cardio', 'Coaching', 'Yoga'];

export default function Programs({ onSelectProgram }: ProgramsProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPrograms = selectedCategory === 'All'
    ? PROGRAMS
    : PROGRAMS.filter(p => p.category === selectedCategory);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-orange-brand" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-orange-brand" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-orange-brand" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-orange-brand" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-orange-brand" />;
      default:
        return <Dumbbell className="w-5 h-5 text-orange-brand" />;
    }
  };

  const getIntensityBadgeColor = (intensity: string) => {
    switch (intensity) {
      case 'Advanced':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'Intermediate':
        return 'bg-orange-brand/10 text-orange-brand border-orange-brand/20';
      case 'Beginner':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      default:
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    }
  };

  return (
    <section id="programs" className="py-24 bg-gym-black relative overflow-hidden">
      {/* Background glowing rings */}
      <div className="absolute bottom-[10%] -right-[15%] w-[50%] h-[50%] bg-orange-brand/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Title with premium badge */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gym-gray border border-gray-800 px-3 py-1 rounded-md text-xs font-semibold text-orange-brand uppercase tracking-widest">
            <Award className="w-4 h-4 text-orange-brand" />
            VIGOROUS SECTORS
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
            TRAINING <span className="text-orange-brand">PROGRAMS</span>
          </h2>
          <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
            Whether you want to build maximum absolute strength, high cardiovascular endurance, or shred fat via rapid plyometrics, we have a custom-built environment.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            <Filter className="w-4 h-4 text-white/30 mr-1 hidden sm:block" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 text-xs uppercase font-bold rounded-full tracking-wider border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-orange-brand text-gym-black border-orange-brand shadow-[0_0_15px_rgba(255,107,0,0.3)] font-black'
                    : 'bg-white/5 text-[#ffffff]/70 border-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <motion.div
              layout
              key={program.id}
              className="bg-[#111111] rounded-3xl border border-white/5 p-6 flex flex-col justify-between hover:border-orange-brand/40 hover:shadow-[0_0_20px_rgba(255,107,0,0.15)] transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header of Card */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-orange-brand/30 group-hover:bg-orange-brand/10 transition-colors">
                    {renderIcon(program.icon)}
                  </div>
                  <span className={`text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full border ${getIntensityBadgeColor(program.intensity)}`}>
                    {program.intensity}
                  </span>
                </div>

                {/* Info titles */}
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-orange-brand uppercase tracking-wider block">
                    {program.category}
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-white group-hover:text-orange-brand transition-colors uppercase italic">
                    {program.title}
                  </h3>
                </div>

                <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
                  {program.description}
                </p>
              </div>

              {/* Specifications and CTA */}
              <div className="mt-6 pt-6 border-t border-white/5 flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono text-white/40">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-orange-brand" />
                    <span>Duration: <strong className="text-white">{program.duration}</strong></span>
                  </div>
                  <span>⚡ <strong className="text-white">{program.caloriesBurn}</strong></span>
                </div>

                <button
                  onClick={() => onSelectProgram(program.id)}
                  className="w-full bg-white/5 group-hover:bg-white text-white group-hover:text-gym-black font-display font-black text-xs uppercase py-3 rounded-xl border border-white/10 group-hover:border-white transition-all duration-300 cursor-pointer shadow-md"
                >
                  Schedule Session
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
