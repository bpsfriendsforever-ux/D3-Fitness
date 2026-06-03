/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import BookingPortal from './components/BookingPortal';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedProgramId, setSelectedProgramId] = useState('');

  const scrollWithOffset = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigateToBooking = (programId?: string) => {
    if (programId) {
      setSelectedProgramId(programId);
    }
    // Small timeout to allow state rendering if needed
    setTimeout(() => {
      scrollWithOffset('#booking-portal');
    }, 50);
  };

  const handleNavigateToGallery = () => {
    scrollWithOffset('#gallery');
  };

  return (
    <div className="bg-gym-black min-h-screen font-sans selection:bg-orange-brand selection:text-gym-black">
      {/* Fixed top level header */}
      <Header onNavigateToBooking={() => handleNavigateToBooking()} />

      {/* Main content sections */}
      <main>
        {/* Cinematic landing hero card */}
        <Hero 
          onNavigateToBooking={() => handleNavigateToBooking()} 
          onNavigateToGallery={handleNavigateToGallery} 
        />

        {/* Structured gym narrative content */}
        <About />

        {/* Dynamic workout programs list */}
        <Programs onSelectProgram={(id) => handleNavigateToBooking(id)} />

        {/* Facility media gallery */}
        <Gallery />

        {/* Dynamic slots calendar scheduler */}
        <BookingPortal 
          selectedProgramId={selectedProgramId} 
          onResetSelectedProgram={() => setSelectedProgramId('')} 
        />

        {/* Verified user feedbacks */}
        <Testimonials />

        {/* Address & Maps interactions */}
        <Contact />
      </main>

      {/* Clean informational footer footer */}
      <Footer />
    </div>
  );
}
