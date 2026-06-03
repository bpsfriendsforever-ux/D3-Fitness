/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  image: string;
  stars: number;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  category: 'Strength' | 'Cardio' | 'HIIT' | 'Coaching' | 'Yoga';
  caloriesBurn: string;
  icon: string;
}

export interface FacilityImage {
  id: string;
  title: string;
  category: 'Cardio ' | 'Heavy Lifting' | 'Group Workouts' | 'Amenities';
  url: string;
  description: string;
}

export interface Booking {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  programId: string;
  trainerId: string;
  date: string; // YYYY-MM-DD
  timeSlot: string; // HH:MM
  intensity: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
  notes?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
  isGoogleVerified: boolean;
}
