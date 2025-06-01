// src/sections/Gallery/Gallery.tsx
import { useState } from 'react';
import { Dialog, DialogContent } from '../../components/ui/dialog';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import { galleryContent } from '@/data/content';
import './Gallery.css';

const images = Object.values(
  import.meta.glob('../../assets/nail-gallery/*.webp', {
    eager: true,
    import: 'default',
  })
) as string[];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleOpen = (image: string) => setSelectedImage(image);
  const handleClose = () => setSelectedImage(null);

  return (
    <section id='gallery' className="gallery-section">
      <div className="gallery-container">
        <header className="gallery-header">
          <h2>{galleryContent.heading}</h2>
          <div className="divider"></div>
          <p>{galleryContent.description}</p>
        </header>

        <div className="gallery-grid">
          {images.map((src, index) => (
            <GalleryCard
              key={index}
              src={src}
              alt={`Nail design ${index + 1}`}
              onClick={() => handleOpen(src)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={handleClose}>
        <DialogContent className="gallery-dialog">
          {selectedImage && <img src={selectedImage} alt="Enlarged nail design" />}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
