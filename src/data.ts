/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Trainer, Program, FacilityImage, Review } from './types';

export const GYM_INFO = {
  name: 'D3 Fitness',
  tagline: 'SCULPT YOUR ULTIMATE SELF',
  address: 'WZ-80A, 2nd floor Pankha Road, Gali Number 5, near Neelgagan Hotel, New Delhi, Delhi 110046',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1560945958567!2d77.1042327!3d28.6066239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05edda4c9017%3A0xc7b13a8c9ac5cef9!2sD3%20Fitness!5e0!3m2!1sen!2sin!4v1717387200000!5m2!1sen!2sin',
  googleMapsLink: 'https://www.google.com/maps/place/D3+Fitness/@28.6066239,77.1064214,17z/data=!3m1!4b1!4m6!3m5!1s0x390d05edda4c9017:0xc7b13a8c9ac5cef9!8m2!3d28.6066239!4d77.1064214!16s%2Fg%2F11fm_m9z_n?entry=ttu',
  phone: '8368107094',
  email: 'info@d3fitness.in',
  rating: 4.8,
  reviewCount: 284,
  hours: {
    weekdays: '06:00 AM - 10:00 PM',
    saturday: '06:00 AM - 10:00 PM',
    sunday: 'Closed'
  },
  socials: {
    instagram: 'https://www.instagram.com/d3_fitness_/',
    facebook: 'https://facebook.com/d3fitnessdelhi',
    youtube: 'https://youtube.com'
  }
};

export const TRAINERS: Trainer[] = [
  {
    id: 't1',
    name: 'Raghav Sharma',
    role: 'Head Strength Coach & Powerlifting Specialist',
    specialties: ['Powerlifting', 'Strength & Hypertrophy', 'Contest Prep', 'Injury Rehab'],
    bio: 'With over 12 years of coaching, Coach Raghav has trained 50+ state-level powerlifters and helped hundreds in West Delhi hit lifetime PRs safely.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80',
    stars: 5
  },
  {
    id: 't2',
    name: 'Amit Verma',
    role: 'Senior Transformation Coach',
    specialties: ['Body Recomposition', 'Nutritional Planning', 'Fat Loss Mastery'],
    bio: 'Coach Amit focuses on metabolic conditioning and evidence-based nutritional protocols to deliver long-term body transformations with custom lifting routines.',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
    stars: 4.9
  },
  {
    id: 't3',
    name: 'Sarah Khan',
    role: 'HIIT & Calisthenics Master',
    specialties: ['High-Intensity Interval Training', 'Bodyweight Agility', 'Flexibility'],
    bio: 'Sarah is an expert in calorie-crushing HIIT circuits and bodyweight training, helping clients build stellar stamina, core strength, and mobility.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    stars: 4.9
  },
  {
    id: 't4',
    name: 'Vikram Singh',
    role: 'Certified Functional Trainer',
    specialties: ['Functional Movement', 'Cardio Endurance', 'Athletic Conditioning'],
    bio: 'Vikram bridges the gap between active functional training and athletic performance, ensuring your joints are bulletproof and your engine is limitless.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    stars: 4.8
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'p1',
    title: 'Hypertrophy & Powerlifting',
    description: 'Master key compound movements (Squat, Bench Press, Deadlift), push heavy iron, and pack on dense lean muscle mass with personalized progressions.',
    duration: '60 mins',
    intensity: 'Advanced',
    category: 'Strength',
    caloriesBurn: '450 - 650 kcal',
    icon: 'Dumbbell'
  },
  {
    id: 'p2',
    title: 'HIIT Athletic Conditioning',
    description: 'Rapid-fire functional circuit combining kettlebells, plyometrics, slam balls, and sprint intervals to raise your metabolic ceiling and shred fat fast.',
    duration: '45 mins',
    intensity: 'Intermediate',
    category: 'HIIT',
    caloriesBurn: '500 - 750 kcal',
    icon: 'Flame'
  },
  {
    id: 'p3',
    title: 'Elite Cardio Circuit',
    description: 'High-energy cardiovascular session integrating state-of-the-art assault treadmills, spin intervals, and rowing drills to boost your aerobic engine.',
    duration: '50 mins',
    intensity: 'Beginner',
    category: 'Cardio',
    caloriesBurn: '400 - 550 kcal',
    icon: 'Activity'
  },
  {
    id: 'p4',
    title: '1-on-1 Personal Transformation',
    description: 'Private premium fitness coaching incorporating form corrections, daily food log audits, tailored training, and personal accountability trackers.',
    duration: '60 mins',
    intensity: 'All Levels',
    category: 'Coaching',
    caloriesBurn: 'Varies by Goal',
    icon: 'UserCheck'
  },
  {
    id: 'p5',
    title: 'Mobility & Core Recovery',
    description: 'Prevent injuries, release deep tissue tight spots, correct posture imbalances, and solidify your abdominal core wall with active target stretching.',
    duration: '45 mins',
    intensity: 'All Levels',
    category: 'Yoga',
    caloriesBurn: '200 - 300 kcal',
    icon: 'Sparkles'
  },
  {
    id: 'p6',
    title: 'Heavy Duty Power Progressions',
    description: 'A focused strength pathway targeting absolute mechanics for squat, bench, and deadlifts. Perfect your heavy lifting technique under skilled coaches.',
    duration: '60 mins',
    intensity: 'Advanced',
    category: 'Strength',
    caloriesBurn: '500 - 650 kcal',
    icon: 'Dumbbell'
  }
];

export const GALLERY: FacilityImage[] = [
  {
    id: 'g1',
    title: 'Olympic Heavy Lifting Platforms',
    category: 'Heavy Lifting',
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    description: 'Equipped with custom deadlift decks, solid bumper plates, and high-grade barbells for serious strength trainees.'
  },
  {
    id: 'g2',
    title: 'High-Contrast Squat Station Area',
    category: 'Heavy Lifting',
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80',
    description: 'Multiple full power cages and squat half racks to train compound movements with zero waiting times.'
  },
  {
    id: 'g3',
    title: 'Premium Cardio Deck',
    category: 'Cardio ',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    description: 'Smart commercial-grade treadmills, stairmasters, elliptical machines, and stationary air-bikes.'
  },
  {
    id: 'g4',
    title: 'Heavy Cable & Lat Station',
    category: 'Heavy Lifting',
    url: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1000&q=80',
    description: 'Premium dual pulley systems and adjustable weight trees engineered to refine micro-muscle contraction and target upper back structures.'
  },
  {
    id: 'g5',
    title: 'Functional Training Zone',
    category: 'Group Workouts',
    url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1000&q=80',
    description: 'Slam ball walls, medicine targets, custom turf lanes for sled pulls, battle ropes, and pull-up arrays.'
  },
  {
    id: 'g6',
    title: 'Elite Coaching and Assays',
    category: 'Amenities',
    url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1000&q=80',
    description: 'Clean modern locker facilities, premium body index analyzer rooms, and refreshing shower stations.'
  },
  {
    id: 'g7',
    title: 'Spacious Off-Peak General Floor',
    category: 'Amenities',
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80',
    description: 'Enjoy empty benches and open training bays during off-peak hours for fully focused, distraction-free strength sessions.'
  },
  {
    id: 'g8',
    title: 'Heavy Bag & Striking Zone',
    category: 'Group Workouts',
    url: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1000&q=80',
    description: 'Heavy bags, boxing gloves, and padded resistance stations supporting powerful high-intensity cardiovascular conditioning.'
  },
  {
    id: 'g9',
    title: 'Biomechanical Check-in Area',
    category: 'Amenities',
    url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80',
    description: 'A designated personal check-in zone where coaches perform detailed posture, flexibility, and compound movement alignment reviews.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Deepak Malhotra',
    rating: 5,
    date: '1 week ago',
    text: 'Easily the best gym in West Delhi. It is incredibly clean and has high-quality equipment. The squat cages and deadlift platforms are perfect for heavy lifting. Head coach Raghav is highly supportive and corrects your form instantly.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    isGoogleVerified: true
  },
  {
    id: 'r2',
    author: 'Sneha Chawla',
    rating: 5,
    date: '3 weeks ago',
    text: 'Great environment for girls! Very safe, professionally managed, and clean. Coach Amit made my personalized transformation chart, and I have lost 6 kg in 1.5 months while building muscle strength. The high-contrast orange theme gives a massive adrenaline rush!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    isGoogleVerified: true
  },
  {
    id: 'r3',
    author: 'Rajat Aggarwal',
    rating: 5,
    date: '1 month ago',
    text: 'Dumbbells go up to 50kg and the music system is mind-blowing. The gym is situated near Neelgagan Hotel on Pankha Road, extremely easy to commute to from Janakpuri or Dwarka. High density of weights means you never have to wait.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    isGoogleVerified: true
  },
  {
    id: 'r4',
    author: 'Priyanka Sen',
    rating: 4,
    date: '2 months ago',
    text: 'Excellent cardio zones and HIIT programs! Team training with Coach Sarah is extremely energetic and fun. The interactive scheduling app always ensures I never miss my slot. 5 stars completely.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
    isGoogleVerified: true
  }
];
