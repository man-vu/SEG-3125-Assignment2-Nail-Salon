// src/data/designers.ts

export interface Designer {
  name: string;
  avatar: string;
  bio: string;
}

export const designers: Designer[] = [
  {
    name: 'Anna',
    avatar: 'https://example.com/images/anna.jpg',
    bio: 'Specializes in French tips and natural nail care.',
  },
  {
    name: 'Bella',
    avatar: 'https://example.com/images/bella.jpg',
    bio: 'Creative nail artist with bold design experience.',
  },
  {
    name: 'Chloe',
    avatar: 'https://example.com/images/chloe.jpg',
    bio: 'Loves minimalist designs and hand-painted art.',
  },
  {
    name: 'Diana',
    avatar: 'https://example.com/images/diana.jpg',
    bio: 'Master technician for acrylic overlays and extensions.',
  },
  {
    name: 'Elaine',
    avatar: 'https://example.com/images/elaine.jpg',
    bio: 'Spa specialist with a passion for relaxation treatments.',
  },
  {
    name: 'Fiona',
    avatar: 'https://example.com/images/fiona.jpg',
    bio: 'Kids-friendly and patient with detailed care.',
  },
];
