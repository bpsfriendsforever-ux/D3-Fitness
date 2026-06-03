/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Calendar, User, Clock, CheckCircle2, Ticket, Search, Trash2, ShieldAlert, Sparkles, Footprints, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAMS, TRAINERS } from '../data';
import { Booking } from '../types';

interface BookingPortalProps {
  selectedProgramId: string;
  onResetSelectedProgram: () => void;
}

export default function BookingPortal({ selectedProgramId, onResetSelectedProgram }: BookingPortalProps) {
  // Booking Form States
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [programId, setProgramId] = useState(PROGRAMS[0].id);
  const [trainerId, setTrainerId] = useState(TRAINERS[0].id);
  const [selectedDate, setSelectedDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('06:30 AM');
  const [notes, setNotes] = useState('');

  // Portal Management States
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [lastBookingId, setLastBookingId] = useState<string | null>(null);
  const [activeTab, setActiveTab ] = useState<'new' | 'manage'>('new');
  const [searchPhone, setSearchPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Auto-populate requested programs on outer click
  useEffect(() => {
    if (selectedProgramId) {
      setProgramId(selectedProgramId);
      setActiveTab('new');
      onResetSelectedProgram();
    }
  }, [selectedProgramId]);

  // Load bookings from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('d3_fitness_bookings');
    if (stored) {
      try {
        setBookings(JSON.parse(stored));
      } catch (err) {
        console.error('Error fetching cached bookings', err);
      }
    }
  }, []);

  // Set default dates timeline (Next 7 days)
  const availableDates: { value: string; label: string; day: string }[] = [];
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    // Skip Sundays except if we are on Sunday, but let's offer them since D3 gym has Sunday hours
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    if (i === 0 && !selectedDate) {
      setSelectedDate(formattedDate);
    }

    availableDates.push({
      value: formattedDate,
      label: `${d.getDate()} ${months[d.getMonth()]}`,
      day: daysOfWeek[d.getDay()]
    });
  }

  const timeSlots = [
    '06:30 AM', '08:00 AM', '09:30 AM', '11:00 AM', 
    '04:30 PM', '06:00 PM', '07:30 PM', '09:00 PM'
  ];

  // Form Submit Handler
  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !selectedDate || !timeSlot) {
      alert('Please fill out all mandatory fields.');
      return;
    }

    const newBooking: Booking = {
      id: `D3-RESERV-${Math.floor(1000 + Math.random() * 9000)}`,
      fullName,
      email,
      phone,
      programId,
      trainerId,
      date: selectedDate,
      timeSlot,
      intensity: PROGRAMS.find(p => p.id === programId)?.intensity || 'All Levels',
      status: 'Confirmed',
      notes,
      createdAt: new Date().toISOString()
    };

    const updated = [newBooking, ...bookings];
    setBookings(updated);
    localStorage.setItem('d3_fitness_bookings', JSON.stringify(updated));
    setLastBookingId(newBooking.id);
    setIsSuccess(true);

    // Reset simple values, keep profile details convenient for quick double booking
    setNotes('');
  };

  const handleCancelBooking = (bookingId: string) => {
    if (confirm('Cancel this training session? This will release your booking slot.')) {
      const updated = bookings.filter(b => b.id !== bookingId);
      setBookings(updated);
      localStorage.setItem('d3_fitness_bookings', JSON.stringify(updated));
    }
  };

  const getProgramName = (id: string) => {
    return PROGRAMS.find(p => p.id === id)?.title || 'Custom Session';
  };

  const getTrainerName = (id: string) => {
    return TRAINERS.find(t => t.id === id)?.name || 'Floor Specialist';
  };

  const handleCreateNewForm = () => {
    setIsSuccess(false);
    setLastBookingId(null);
  };

  // Filtered list of user's personal bookings matching phone target
  const queriedBookings = searchPhone.trim()
    ? bookings.filter(b => b.phone.includes(searchPhone.trim()))
    : bookings;

  const currentSuccessBooking = bookings.find(b => b.id === lastBookingId);

  return (
    <section id="booking-portal" className="py-24 bg-gym-black relative overflow-hidden">
      {/* Dynamic graphic orange shapes */}
      <div className="absolute top-[10%] left-[2%] w-[35%] h-[35%] bg-orange-brand/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-[5%] bottom-[5%] w-px bg-gym-gray/20 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Title Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gym-gray border border-gray-800 px-3 py-1 rounded-md text-xs font-semibold text-orange-brand uppercase tracking-widest">
            <Calendar className="w-4 h-4 text-orange-brand" />
            LIVE SCHEDULER
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
            BOOKING <span className="text-orange-brand">PORTAL</span>
          </h2>
          <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
            Reserve your training slots, choose your designated personal transformation coach, and get instant access passes to D3 Fitness. No upfront card required.
          </p>

          {/* Tab selectors */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <button
              onClick={() => { setActiveTab('new'); handleCreateNewForm(); }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all cursor-pointer ${
                activeTab === 'new'
                  ? 'bg-orange-brand text-gym-black border-orange-brand shadow-[0_0_15px_rgba(255,107,0,0.3)] font-black'
                  : 'bg-white/5 text-[#ffffff]/70 border-white/10 hover:text-white'
              }`}
            >
              Reserve A Slot
            </button>
            <button
              onClick={() => setActiveTab('manage')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest border relative transition-all cursor-pointer ${
                activeTab === 'manage'
                  ? 'bg-orange-brand text-gym-black border-orange-brand shadow-[0_0_15px_rgba(255,107,0,0.3)] font-black'
                  : 'bg-white/5 text-[#ffffff]/70 border-white/10 hover:text-white'
              }`}
            >
              Manage Bookings
              {bookings.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 bg-red-600 border border-gym-black rounded-full flex items-center justify-center text-[10px] font-bold text-white px-1">
                  {bookings.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Portal Body cards */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'new' ? (
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="booking-form-pane"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-[#111111] rounded-3xl border border-white/5 p-6 md:p-8 shadow-2xl relative overflow-hidden"
                >
                  {/* Decorative background glow blob */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-brand/5 blur-[60px] rounded-full pointer-events-none" />

                  <form onSubmit={handleCreateBooking} className="space-y-8 relative z-10">
                    {/* Step 1: Program and Trainer */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase text-white/30 font-bold mb-1 block">
                          1. Choose Target Focus Workout *
                        </label>
                        <select
                          value={programId}
                          onChange={(e) => setProgramId(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-orange-brand transition-colors cursor-pointer"
                          required
                        >
                          {PROGRAMS.map((prog) => (
                            <option key={prog.id} value={prog.id} className="bg-gym-dark">
                              {prog.title} ({prog.duration})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase text-white/30 font-bold mb-1 block">
                          2. Associate Personal Trainer *
                        </label>
                        <select
                          value={trainerId}
                          onChange={(e) => setTrainerId(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-orange-brand transition-colors cursor-pointer"
                          required
                        >
                          {TRAINERS.map((trainer) => (
                            <option key={trainer.id} value={trainer.id} className="bg-gym-dark">
                              {trainer.name} — {trainer.role.split('&')[0]}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Step 2: Date Selector (Horizontal timelines) */}
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase text-white/30 font-bold mb-1 block">
                        3. Select Training Date *
                      </label>
                      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                        {availableDates.map((dateObj) => (
                          <button
                            type="button"
                            key={dateObj.value}
                            onClick={() => setSelectedDate(dateObj.value)}
                            className={`p-3 rounded-xl flex flex-col items-center justify-center border transition-all cursor-pointer ${
                              selectedDate === dateObj.value
                                ? 'bg-orange-brand border-orange-brand text-gym-black font-black shadow-[0_0_15px_rgba(255,107,0,0.3)]'
                                : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/20'
                            }`}
                          >
                            <span className="text-[10px] uppercase font-mono block tracking-tight leading-none mb-1">
                              {dateObj.day}
                            </span>
                            <span className="text-xs sm:text-sm font-display block leading-none font-bold">
                              {dateObj.label.split(' ')[0]}
                            </span>
                            <span className="text-[9px] block leading-none font-medium mt-0.5 opacity-80">
                              {dateObj.label.split(' ')[1]}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 3: Time Slot Selector */}
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase text-white/30 font-bold mb-1 block">
                        4. Pick Preferred Time Slot *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setTimeSlot(slot)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold tracking-wide border transition-all cursor-pointer ${
                              timeSlot === slot
                                ? 'bg-orange-brand border-orange-brand text-gym-black shadow-[0_0_15px_rgba(255,107,0,0.3)]'
                                : 'bg-white/5 border-white/10 text-white/80 hover:text-white hover:border-white/20'
                            }`}
                          >
                            <Clock className="w-3 h-3 text-current inline mr-1" />
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 4: Contact details */}
                    <div className="space-y-4 pt-4 border-t border-white/5">
                      <h4 className="text-xs uppercase text-orange-brand font-bold tracking-widest flex items-center gap-1.5 mb-2 italic">
                        <User className="w-4 h-4 text-orange-brand" />
                        5. Athlete Contact Details
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase text-white/30 font-bold block">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="e.g. Rahul Sharma"
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-3 text-white text-sm focus:outline-none focus:border-orange-brand transition-colors"
                            required
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase text-white/30 font-bold block">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="rahul@gmail.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-3 text-white text-sm focus:outline-none focus:border-orange-brand transition-colors"
                            required
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase text-white/30 font-bold block">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="98xxxxxx01"
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-3 text-white text-sm focus:outline-none focus:border-orange-brand transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase text-white/30 font-bold block">
                          Workout Goals or Injuries / Joint Restrictions
                        </label>
                        <textarea
                          rows={2}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="e.g. Shoulder injury history, aiming for pure functional powerlifting progressions..."
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-3 text-white text-sm focus:outline-none focus:border-orange-brand transition-colors"
                        />
                      </div>
                    </div>

                    {/* Submit Section button */}
                    <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                      <div className="text-xs text-white/30 font-bold uppercase tracking-tighter text-center sm:text-left flex items-center gap-1.5 italic">
                        <Ticket className="w-4 h-4 text-orange-brand" />
                        <span>Instant secure QR ticket pass will be generated</span>
                      </div>
                      <button
                        type="submit"
                        className="w-full sm:w-auto py-4 px-8 bg-white text-gym-black font-black uppercase text-sm rounded-xl hover:bg-orange-brand transition-colors shadow-lg cursor-pointer text-center"
                      >
                        Confirm Session
                      </button>
                    </div>

                  </form>
                </motion.div>
              ) : (
                /* Ticket success view! */
                <motion.div
                  key="booking-success-pane"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="bg-gym-dark rounded-xl border border-orange-brand/30 p-6 md:p-8 text-center space-y-6 box-orange-glow relative"
                >
                  <div className="w-16 h-16 bg-orange-brand/10 rounded-full flex items-center justify-center mx-auto text-orange-brand border border-orange-brand/40">
                    <CheckCircle2 className="w-10 h-10 line" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-tight">
                      SESSION RESERVED SUCCESSFULLY!
                    </h3>
                    <p className="text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
                      Your workout slot is secured in our system list under <strong className="font-bold text-white">D3 Fitness</strong>. Please display this entry ticket below at the reception desk to begin.
                    </p>
                  </div>

                  {/* High Quality Styled Entry Ticket */}
                  {currentSuccessBooking && (
                    <div className="max-w-md mx-auto bg-gym-black rounded-lg border border-gray-800 overflow-hidden shadow-xl text-left font-mono text-xs relative">
                      {/* Ticket top header */}
                      <div className="bg-orange-brand text-gym-black p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-display font-black text-sm uppercase tracking-wide">D3 FITNESS PASS</h4>
                          <span className="text-[10px] opacity-80 uppercase">Pankha Road, Delhi</span>
                        </div>
                        <span className="font-extrabold text-sm bg-gym-black text-white px-2.5 py-1 rounded inline-block">
                          {currentSuccessBooking.id}
                        </span>
                      </div>

                      {/* Ticket content */}
                      <div className="p-4 space-y-3.5 divide-y divide-gray-800">
                        {/* Primary info details */}
                        <div className="grid grid-cols-2 gap-y-3 gap-x-2 pb-1 text-gray-300">
                          <div>
                            <span className="text-[9px] text-gray-500 uppercase block">ATHLETE NAME</span>
                            <span className="text-white font-bold">{currentSuccessBooking.fullName}</span>
                          </div>
                          <div>
                            <span className="text-[9px] text-gray-500 uppercase block">PHONE NUMBER</span>
                            <span className="text-white font-semibold">{currentSuccessBooking.phone}</span>
                          </div>
                        </div>

                        {/* Schedule details */}
                        <div className="grid grid-cols-2 gap-y-3 gap-x-2 pt-3 text-gray-300">
                          <div>
                            <span className="text-[9px] text-gray-500 uppercase block">FOCUS WORKOUT</span>
                            <span className="text-orange-brand font-bold">{getProgramName(currentSuccessBooking.programId)}</span>
                          </div>
                          <div>
                            <span className="text-[9px] text-gray-500 uppercase block">PERSONAL COACH</span>
                            <span className="text-white font-semibold">{getTrainerName(currentSuccessBooking.trainerId)}</span>
                          </div>
                        </div>

                        {/* Date slot */}
                        <div className="grid grid-cols-2 gap-y-3 gap-x-2 pt-3 text-gray-300">
                          <div>
                            <span className="text-[9px] text-gray-500 uppercase block">DATE</span>
                            <span className="text-white font-bold">{currentSuccessBooking.date}</span>
                          </div>
                          <div>
                            <span className="text-[9px] text-gray-500 uppercase block">SESSION TIME</span>
                            <span className="text-white font-bold uppercase">{currentSuccessBooking.timeSlot}</span>
                          </div>
                        </div>

                        {/* Fake barcode layout */}
                        <div className="pt-4 flex flex-col items-center justify-center space-y-1">
                          <div className="flex gap-0.5 justify-center h-10 w-full select-none opacity-80 max-w-[280px]">
                            {[...Array(24)].map((_, idx) => (
                              <div
                                key={idx}
                                className="bg-white h-full"
                                style={{ width: `${(idx % 3 === 0 ? 3 : idx % 2 === 0 ? 1 : 2) * 1.5}px` }}
                              />
                            ))}
                          </div>
                          <span className="text-[9px] text-gray-500 uppercase block text-center tracking-widest font-mono">
                            * {currentSuccessBooking.id} *
                          </span>
                        </div>
                      </div>

                      {/* Side circle punches typical of paper tickets */}
                      <div className="absolute top-[52px] -left-2 w-4 h-4 bg-gym-dark rounded-full border-r border-gray-800" />
                      <div className="absolute top-[52px] -right-2 w-4 h-4 bg-gym-dark rounded-full border-l border-gray-800" />
                    </div>
                  )}

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={handleCreateNewForm}
                      className="w-full sm:w-auto bg-orange-brand hover:bg-orange-dark text-gym-black font-display font-bold text-sm uppercase px-6 py-2.5 rounded-md cursor-pointer"
                    >
                      Book Another Slot
                    </button>
                    <button
                      onClick={() => setActiveTab('manage')}
                      className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-gray-300 border border-gray-700 font-display font-bold text-sm uppercase px-6 py-2.5 rounded-md cursor-pointer"
                    >
                      View All Reservations
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            /* Manage Bookings tab */
            <motion.div
              layout
              key="bookings-management"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gym-dark rounded-xl border border-gray-800 p-6 md:p-8 space-y-6 shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pb-4 border-b border-gym-gray/60">
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider flex items-center gap-2">
                  <Ticket className="w-5 h-5 text-orange-brand" />
                  Your Bookings Record
                </h3>
                
                {/* Search box filters */}
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    value={searchPhone}
                    onChange={(e) => setSearchPhone(e.target.value)}
                    placeholder="Search by phone..."
                    className="w-full bg-gym-gray border border-gray-800 rounded-md pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-brand"
                  />
                </div>
              </div>

              {queriedBookings.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <ShieldAlert className="w-12 h-12 text-gray-500 mx-auto" />
                  <h4 className="font-display font-bold text-base text-gray-400 uppercase">NO BOOKINGS FOUND</h4>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                    We could not locate any active slot reserves in local registry. Enter a booked phone number above or create a new slot schedule.
                  </p>
                  <button
                    onClick={() => setActiveTab('new')}
                    className="mt-2 bg-orange-brand/10 hover:bg-orange-brand text-orange-brand hover:text-gym-black border border-orange-brand/35 text-xs font-bold uppercase py-2 px-4 rounded transition-all cursor-pointer"
                  >
                    Reschedule Now
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {queriedBookings.map((bk) => (
                    <div
                      key={bk.id}
                      className="bg-gym-black rounded-lg p-5 border border-gray-800 hover:border-gray-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xs font-extrabold bg-gym-gray border border-orange-brand/20 px-2.5 py-0.5 rounded text-orange-brand">
                            {bk.id}
                          </span>
                          <span className="text-xs font-mono font-bold text-white uppercase">{bk.fullName}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          <span className="text-[10px] text-green-500 font-bold uppercase tracking-wide">CONFIRMED</span>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1 text-[11px] text-gray-400 font-mono">
                          <div>
                            <strong className="text-gray-300">Workout:</strong> {getProgramName(bk.programId)}
                          </div>
                          <div>
                            <strong className="text-gray-300">Coach:</strong> {getTrainerName(bk.trainerId)}
                          </div>
                          <div className="col-span-2 md:col-span-1">
                            <strong className="text-gray-300">Schedule:</strong> {bk.date} @ {bk.timeSlot}
                          </div>
                        </div>

                        {bk.notes && (
                          <p className="text-[10px] text-gray-500 max-w-xl italic leading-tight">
                            Note details: "{bk.notes}"
                          </p>
                        )}
                      </div>

                      <button
                        onClick={() => handleCancelBooking(bk.id)}
                        className="self-start sm:self-center bg-transparent text-gray-500 hover:text-red-500 border border-gray-800 hover:border-red-500/30 p-2.5 rounded transition-all cursor-pointer"
                        aria-label="Delete this session reserve"
                      >
                        <Trash2 className="w-4 h-4 block" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
