// src/headerContent.tsx
export const headerContent = {
  logoText: 'DREAMY NAIL & BEAUTY',
  bookNowButton: 'Book Now',
  menuItems: [
    {
      title: 'About',
      dropdown: true,
      items: [
        { name: 'About Studio', url: '#about-3' },
        { name: 'Why Dreamy Nail & Beauty?', url: '#about-9' },
        { name: 'Testimonials', url: '#reviews' },
        { name: 'Best Experience', url: '#promo-4' },
        { name: 'Our Promotions', url: '#promo-2' },
      ],
    },
    { title: 'Technicians', url: '/team', dropdown: false }, 
    { title: 'Our Services', url: '/services', dropdown: false },
    { title: 'Gallery', url: '/gallery', dropdown: false },
    { title: 'Contacts', url: '#footer-2', dropdown: false },
  ],
};

// src/data/servicesContent.tsx
export const servicesContent = {
  heading: "Our Services",
  subtext: "We offer a wide range of nail and beauty services to help you look and feel your best.",
  cta: "View All Services",
  items: [
    {
      title: "Manicure",
      image: "https://phoenixnailsandbeautyottawa.com/photos/services/manicure.jpg",
      description: "Professional nail care for your hands",
    },
    {
      title: "Pedicure",
      image: "https://phoenixnailsandbeautyottawa.com/photos/services/pedicure.jpg",
      description: "Relaxing foot care treatments",
    },
    {
      title: "Artificial Nails",
      image: "https://phoenixnailsandbeautyottawa.com/photos/services/artificial-nail.jpg",
      description: "Acrylic, gel, and dip powder options",
    },
    {
      title: "Nail Art",
      image: "https://phoenixnailsandbeautyottawa.com/photos/services/nail-art.jpg",
      description: "Creative designs for your nails",
    },
    {
      title: "Waxing",
      image: "https://phoenixnailsandbeautyottawa.com/photos/services/waxing.jpg",
      description: "Hair removal services",
    },
    {
      title: "Kids Services",
      image: "https://phoenixnailsandbeautyottawa.com/photos/services/kid.jpg",
      description: "Nail care for the little ones",
    },
  ],
};

// src/data/latestNewsContent.tsx
export const latestNewsContent = {
  heading: 'Latest News & Events',
  subheading: 'Stay updated with our latest news, tips, and special events',
  cta: 'View All Posts',
  blogPosts: [
    {
      image: 'https://picsum.photos/id/64/400/300',
      date: 'May 18, 2023',
      title: 'Summer Nail Trends You Need to Try',
      excerpt: 'Discover the hottest nail designs and colors that are trending this summer season.',
    },
    {
      image: 'https://picsum.photos/id/65/400/300',
      date: 'May 5, 2023',
      title: 'How to Make Your Manicure Last Longer',
      excerpt: 'Tips and tricks to extend the life of your manicure and keep your nails looking fresh.',
    },
    {
      image: 'https://picsum.photos/id/66/400/300',
      date: 'April 22, 2023',
      title: 'The Benefits of Regular Pedicures',
      excerpt: 'Why regular pedicures are essential for not just beauty but also for your overall foot health.',
    },
  ],
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
    image: '/src/assets/nail-salon/1.jpg',
    title: 'WELCOME TO',
    subtitle: 'DREAMY NAIL & BEAUTY STUDIO',
    buttonText: 'Online Booking',
    buttonLink: '/booking',
  },
  {
    image: '/src/assets/nail-salon/2.jpg',
    title: 'PROFESSIONAL',
    subtitle: 'NAIL CARE SERVICES',
    buttonText: 'View Services',
    buttonLink: '#services',
  },
  {
    image: '/src/assets/nail-salon/3.jpg',
    title: 'BEAUTIFUL',
    subtitle: 'NAIL DESIGNS',
    buttonText: 'View Gallery',
    buttonLink: '/gallery',
  },
  {
    image: '/src/assets/nail-salon/4.jpg',
    title: 'LUXURY',
    subtitle: 'SPA EXPERIENCE',
    buttonText: 'Explore More',
    buttonLink: '#promotions',
  },
];

// src/data/nailCareContent.tsx
export const nailCareContent = {
  title: 'Nail Care',
  description:
    'Ligula risus auctor tempus and dolor vitae undo purus semper sodales',
  buttonText: 'Find Out More',
};

// src/data/testimonialsContent.tsx
export const testimonialsContent = {
  heading: 'What People Are Saying',
  testimonials: [
    {
      id: 1,
      name: 'Jennifer Smith',
      role: 'Regular Client',
      image: 'https://picsum.photos/id/64/200/200',
      quote:
        "I've been coming to Dreamy Nail & Beauty for over a year now and I'm always impressed with the quality of service. The staff is professional, friendly, and incredibly talented. My nails have never looked better!",
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Johnson',
      role: 'First-time Client',
      image: 'https://picsum.photos/id/91/200/200',
      quote:
        "As someone who was new to professional nail care, I was a bit nervous. But the team at Dreamy Nail & Beauty made me feel comfortable and explained everything. The results were fantastic and I'll definitely be back!",
      rating: 5,
    },
    {
      id: 3,
      name: 'Sarah Williams',
      role: 'Monthly Client',
      image: 'https://picsum.photos/id/26/200/200',
      quote:
        'Dreamy Nail & Beauty offers the perfect combination of relaxation and beauty. Their nail art designs are creative and always receive compliments. The salon is clean, modern, and the staff is always welcoming.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Frequent Visitor',
      image: 'https://picsum.photos/id/1027/200/200',
      quote:
        'From the moment I walk in, I feel pampered. The ambiance is lovely and I always leave with beautiful nails and a big smile.',
      rating: 5,
    },
    {
      id: 5,
      name: 'David Lee',
      role: 'Gift Card Recipient',
      image: 'https://picsum.photos/id/1011/200/200',
      quote:
        "I received a gift card for Dreamy Nail & Beauty and didn't expect much, but I was blown away. The attention to detail and relaxing environment was top-tier.",
      rating: 4,
    },
    {
      id: 6,
      name: 'Rachel Green',
      role: 'Spa Enthusiast',
      image: 'https://picsum.photos/id/1025/200/200',
      quote:
        'One of the best salons in the city. I’ve been to many, but none match the quality and style of Dreamy Nail & Beauty.',
      rating: 5,
    },
    {
      id: 7,
      name: 'Olivia Brown',
      role: 'Loyal Customer',
      image: 'https://picsum.photos/id/1035/200/200',
      quote:
        'Highly recommend! Their designs are trendy and elegant. Always satisfied with the final look.',
      rating: 5,
    },
    {
      id: 8,
      name: 'Sophia Wilson',
      role: 'Walk-in Client',
      image: 'https://picsum.photos/id/1044/200/200',
      quote:
        'I walked in without an appointment and they still treated me like royalty. Great service and great people.',
      rating: 4,
    },
  ],
};


// src/data/skilledNailArtContent.tsx
export const skilledNailArtContent = {
  tag: 'Get Your Shine On',
  heading: 'Skilled Nail Art',
  description:
    'Nullam tempor sapien gravida donec and pretium ipsum porta integer justo an odio velna vitae auctor integer congue',
  panelTitle: 'Reveal Colourful You',
  panelText:
    'Nullam tempor sapien gravida donec and pretium ipsum porta integer justo odio velna a vitae auctor justo integer congue undo purus ligula a pretium',
};

// src/data/promotionsContent.tsx
export const promotionsContent = {
  subtitle: 'Grand Opening Special',
  title: 'A Touch of Dreamy Luxury',
  description: 'Celebrate our launch with an exclusive gift. Enjoy a complimentary nail art upgrade on any service booked this week! Use code: ',
  discountCode: 'DREAMUPGRADE',
  buttonText: 'Reserve Your Spot',
  partnerLogos: [
    'https://picsum.photos/id/210/120/60',
    'https://picsum.photos/id/211/120/60',
    'https://picsum.photos/id/212/120/60',
    'https://picsum.photos/id/213/120/60',
    'https://picsum.photos/id/214/120/60',
  ],
};


// src/data/pricingContent.tsx
export const pricingContent = {
  headerTitle: 'Nails For Every Budget',
  headerDescription: 'Choose from our range of nail care packages designed to meet your needs and budget',
  pricingOptions: [
    {
      title: 'Basic Manicure',
      price: '$35',
      features: [
        'Nail shaping',
        'Cuticle care',
        'Hand massage',
        'Polish application',
        '15-minute treatment',
      ],
    },
    {
      title: 'Deluxe Manicure & Pedicure',
      price: '$75',
      features: [
        'Nail shaping and buffing',
        'Cuticle treatment',
        'Exfoliating scrub',
        'Extended massage',
        'Premium polish application',
        '45-minute treatment',
      ],
      popular: true,
    },
    {
      title: 'Luxury Spa Package',
      price: '$120',
      features: [
        'Deluxe manicure & pedicure',
        'Paraffin wax treatment',
        'Callus removal',
        'Aromatherapy',
        'Nail art (simple design)',
        '90-minute treatment',
      ],
    },
  ],
  footerText: 'View our complete service menu for additional options and custom packages',
  footerLinkText: 'View Full Price List →',
};

// src/data/giftCardsContent.tsx
export const giftCardsContent = {
  followTitle: 'Follow & Share',
  followHandle: '@dreamy_nail_beauty',
  followButtonText: 'Follow Us',

  promoTitle: 'Gift Cards',
  promoText: 'Give the gift of beauty and self-care. Treat someone special to a dreamy nail and beauty experience.',
  promoButtonText: 'Purchase Now',
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
    `© ${new Date().getFullYear()} ${brand}. Crafted with care in Ottawa.`,
  brand: 'Dreamy Nail & Beauty',
};
