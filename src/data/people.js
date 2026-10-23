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

// { name: 'Counsellor name', role: 'Senior Admissions Counsellor', bio: '...', photo: '/team/name.jpg' }
export const team = [];
