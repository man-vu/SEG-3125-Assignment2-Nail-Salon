import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DialogTitle, DialogDescription, Dialog, DialogContent } from '../../components/ui/dialog';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import { galleryContent } from '@/data/content';
import './Gallery.css';
import VisuallyHidden from '../../components/ui/VisuallyHidden';

const images = Object.values(
  import.meta.glob('../../assets/nail-gallery/*.webp', {
    eager: true,
    import: 'default',
  })
) as string[];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: { opacity: 0, y: -32, transition: { duration: 0.2 } },
};

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
          <AnimatePresence>
            {images.map((src, index) => (
              <motion.div
                key={src}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={cardVariants}
              >
                <GalleryCard
                  src={src}
                  alt={`Nail design ${index + 1}`}
                  onClick={() => handleOpen(src)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={handleClose}>
<DialogContent className="gallery-dialog">
  <div>
    <DialogTitle>
      <VisuallyHidden>Gallery image preview</VisuallyHidden>
    </DialogTitle>
    <DialogDescription>
      <VisuallyHidden>
        This is an enlarged preview of the selected nail design image.
      </VisuallyHidden>
    </DialogDescription>
    <motion.div
      key={selectedImage}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.23 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <img
        src={selectedImage}
        alt="Enlarged nail design"
        style={{ maxWidth: "90vw", maxHeight: "80vh", borderRadius: "12px" }}
      />
    </motion.div>
  </div>
</DialogContent>



          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
