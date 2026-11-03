// Only add GENUINE testimonials (with the student's permission) and real team members.
// Sections that use these lists stay hidden while the lists are empty.
// Photos go in public/testimonials/ (keep a .jpg; a .webp with the same name is optional).

export const testimonials = [
  {
    name: 'Chidhvilasini',
    course: 'MBBS, 1st year',
    city: 'Andhra Pradesh',
    photo: '/testimonials/chidhvilasini.jpg',
    photoWebp: '/testimonials/chidhvilasini.webp',
    photoSize: [640, 914],
    photoPosition: 'center 22%', // which part of the photo stays visible when cropped
    quote:
      'Studying abroad means leaving familiar places and learning to become independent. I know the journey will bring challenges, but I feel better prepared to begin this new chapter of my medical education.',
  },
  {
    name: 'Puneeth',
    course: 'MBBS, 1st year',
    city: 'Vijayawada',
    photo: '/testimonials/puneeth.jpg',
    photoWebp: '/testimonials/puneeth.webp',
    photoSize: [693, 562],
    photoPosition: '45% 30%',
    quote:
      'Seeing my family believe in my dream means everything to me. Planning to study MBBS abroad was a major milestone, and having guidance throughout the admission process made the experience more manageable.',
  },
  {
    name: 'Puneeth’s Father',
    course: 'Parent',
    city: 'Andhra Pradesh',
    photo: '/testimonials/puneeth-father.jpg',
    photoWebp: '/testimonials/puneeth-father.webp',
    photoSize: [469, 496],
    photoPosition: 'center 30%',
    quote:
      'Every parent wants their child to be safe, happy and successful. We had many concerns about studying in another country. Having the opportunity to discuss our doubts and understand the process was valuable to our family. Sri Vidhya Overseas was very good throughout the whole admission process.',
  },
];

export const team = [
  {
    name: 'Vamshi Raj',
    role: 'Founder, Sri Vidhya Overseas',
    photo: '/assets/aistudio/WhatsApp_Image_2026-10-01_at_11.06.48_PM_989d1a41.jpeg',
    bio: 'Dedicated to ethical, transparent overseas education and empowering students with personalized guidance and parent peace of mind.',
  },
  {
    name: 'Pruthvi Raj Azmeera',
    role: 'Co-Founder – Sri Vidhya Overseas',
    photo: '/assets/aistudio/WhatsApp_Image_2026-11-04_at_1.17.24_AM_dfe3c6d8.jpeg',
    bio: 'Committed to helping students explore international education opportunities, make informed decisions, and turn their global ambitions into reality.',
  },
];
