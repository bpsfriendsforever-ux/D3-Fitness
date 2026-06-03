/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Calendar, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GYM_INFO } from '../data';

interface HeaderProps {
  onNavigateToBooking: () => void;
}

export default function Header({ onNavigateToBooking }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', target: '#about' },
    { label: 'Programs', target: '#programs' },
    { label: 'Gallery', target: '#gallery' },
    { label: 'Reviews', target: '#reviews' },
    { label: 'Contact', target: '#contact' },
  ];

  const handleScrollToSection = (targetId: string) => {
    setIsOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gym-black/90 backdrop-blur-md border-b border-gym-gray py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group cursor-pointer"
            id="nav-logo"
          >
            <div className="w-10 h-10 bg-orange-brand rounded-lg flex items-center justify-center text-gym-black font-black text-2xl tracking-tighter shadow-[0_0_20px_rgba(255,107,0,0.4)] group-hover:bg-white group-hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300">
              D3
            </div>
            <span className="font-display font-black text-xl tracking-tight uppercase italic text-white">
              FITNESS
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.target}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(item.target);
                }}
                className="text-xs font-semibold uppercase tracking-widest text-[#ffffff]/70 hover:text-orange-brand transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Booking Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${GYM_INFO.phone}`}
              className="text-gray-300 hover:text-orange-brand flex items-center gap-1 text-xs bg-gym-gray/50 px-3 py-1.5 rounded-full border border-white/5 hover:border-orange-brand/30 transition-all font-mono"
            >
              <Phone className="w-4 h-4 text-orange-brand" />
              <span>{GYM_INFO.phone}</span>
            </a>
            <button
              onClick={onNavigateToBooking}
              className="px-6 py-2 bg-orange-brand text-gym-black font-bold uppercase text-xs rounded-full shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_25px_rgba(255,107,0,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Join the Tribe
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={onNavigateToBooking}
              className="bg-orange-brand hover:bg-orange-dark text-gym-black font-display font-bold text-xs uppercase px-3 py-2 rounded-md shadow-md cursor-pointer"
            >
              Book
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white hover:bg-gym-gray rounded-md cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gym-dark/95 backdrop-blur-lg border-b border-gym-gray"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.target}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(item.target);
                  }}
                  className="block px-3 py-3 rounded-md text-base font-semibold text-gray-200 hover:text-white hover:bg-orange-brand/10 hover:border-l-4 hover:border-orange-brand transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gym-gray flex flex-col gap-3 px-3">
                <a
                  href={`tel:${GYM_INFO.phone}`}
                  className="flex items-center gap-3 text-gray-300 font-mono"
                >
                  <Phone className="w-5 h-5 text-orange-brand" />
                  <span>{GYM_INFO.phone}</span>
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onNavigateToBooking();
                  }}
                  className="w-full bg-orange-brand hover:bg-orange-dark text-gym-black text-center font-display font-bold py-3 px-4 rounded-md shadow-md text-sm uppercase flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Slot Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
