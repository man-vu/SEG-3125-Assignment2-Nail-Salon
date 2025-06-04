import img1 from '@/assets/nail-salon/1.jpg';
import img2 from '@/assets/nail-salon/2.jpg';
import img3 from '@/assets/nail-salon/3.jpg';
import img4 from '@/assets/nail-salon/4.jpg';

// src/headerContent.tsx
export const headerContent = {
  logoText: 'REAMY NAIL & BEAUTY',
  bookNowButton: 'Book Now',
  menuItems: [
    {
      title: 'Home',
      url: '/',
      dropdown: false,
      items: [
      ],
    },
    { title: 'Our Services', url: '/services', dropdown: false },
    { title: 'Technicians', url: '/team', dropdown: false }, 
    { title: 'Gallery', url: '/gallery', dropdown: false },
    { title: 'Contact Us', url: '/contactus', dropdown: false },
  ],
};

// src/data/servicesContent.tsx
export const servicesContent = {
  heading: "Our Services",
  subtext: "We offer a wide range of nail and beauty services to help you look and feel your best.",
  cta: "View All Services",
};


// src/data/aboutContent.tsx
export const aboutContent = {
  title: 'About Our Studio',
  intro: [
    'Dreamy Nail & Beauty is a premium nail salon dedicated to providing exceptional nail care services in a relaxing and luxurious environment...',
    'We offer a wide range of services including manicures, pedicures...',
  ],
  image: {
    src: 'https://dsathemes.com/html/la_notte_1.1/files/images/800x700_3.jpg',
    alt: 'About Dreamy Nail & Beauty Studio',
  },
  features: [
    {
      title: 'Top-Tier Products',
      description: 'We exclusively use premium, non-toxic products that promote nail health and beauty.',
    },
    {
      title: 'Certified Nail Artists',
      description: 'Our team consists of certified professionals with years of industry experience.',
    },
    {
      title: 'Spotless Cleanliness',
      description: 'We follow strict hygiene protocols to ensure a safe and sterile environment.',
    },
    {
      title: 'Tailored Experiences',
      description: 'Every treatment is customized to meet your unique style and preferences.',
    },
    {
      title: 'Relaxing Ambience',
      description: 'Enjoy your treatments in a tranquil, spa-like setting designed for comfort and calm.',
    },
    {
      title: 'Latest Trends & Techniques',
      description: 'We stay up-to-date with modern styles and technologies to bring you the best in nail fashion.',
    },
  ],
  cta: 'Learn More About Us',
};

// src/data/galleryContent.tsx
export const galleryContent = {
  heading: 'Our Nail Art Gallery',
  description:
    'Browse through our collection of stunning nail designs created by our talented artists',
};

// src/data/heroSlides.tsx
export const heroSlides = [
  {
    image: img1,
    title: 'WELCOME TO',
    subtitle: 'DREAMY NAIL & BEAUTY STUDIO',
    buttonText: 'Online Booking',
    buttonLink: '/booking',
  },
  {
    image: img2,
    title: 'PROFESSIONAL',
    subtitle: 'NAIL CARE SERVICES',
    buttonText: 'View Services',
    buttonLink: '/services',
  },
  {
    image: img3,
    title: 'BEAUTIFUL',
    subtitle: 'NAIL DESIGNS',
    buttonText: 'View Gallery',
    buttonLink: '/gallery',
  },
  {
    image: img4,
    title: 'LUXURY',
    subtitle: 'SPA EXPERIENCE',
    buttonText: 'Explore More',
    buttonLink: '/gallery',
  },
];


// src/data/testimonialsContent.tsx
export const testimonialsContent = {
  heading: 'What People Are Saying',
};



// src/data/giftCardsContent.tsx
export const giftCardsContent = {
  followTitle: "Follow Us",
  followHandle: "@dreamynailbeauty",
  followButtonText: "Follow on Instagram",
  followLink: "https://instagram.com/dreamynailbeauty",
  promoTitle: "Gift Cards",
  promoText: "Perfect gift for any occasion. Available instantly.",
  promoButtonText: "Get Gift Card",
  promoLink: "/gift-cards",
};


// src/data/footerContent.tsx
export const footerContent = {
  newsletter: {
    title: 'Stay Dreamy',
    text: 'Join our mailing list for exclusive offers, seasonal promotions, and self-care tips.',
    placeholder: 'Enter your email',
    buttonText: 'Join Now',
  },
  contact: {
    title: 'Visit Us',
    address: '88 Blossom Avenue, Unit 5\nOttawa, ON K2G 3V9, Canada',
    phone: '(613) 555-8828',
    email: 'hello@dreamynailbeauty.ca',
  },
  hours: {
    title: 'Salon Hours',
    schedule: [
      { day: 'Monday – Friday', time: '10:00 AM – 7:00 PM' },
      { day: 'Saturday', time: '10:00 AM – 6:00 PM' },
      { day: 'Sunday', time: 'Closed' },
    ],
  },
  socialLinks: {
    facebook: 'https://facebook.com/dreamynailbeauty',
    instagram: 'https://instagram.com/dreamynailbeauty',
    tiktok: 'https://tiktok.com/@dreamynailbeauty',
    twitter: 'https://twitter.com/@dreamynailbeauty',
  },
  copyright: (brand: string) =>
    `© ${new Date().getFullYear()} ${brand}. Designed by Man Vu.`,
  brand: 'Dreamy Nail & Beauty',
};
