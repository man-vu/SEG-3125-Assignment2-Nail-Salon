import { motion } from 'framer-motion';
import ZoomIcon from '../../components/icons/ZoomIcon';
import './GalleryCard.css';

interface GalleryCardProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const overlayVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1, scale: 1.06, transition: { duration: 0.18 } },
};

const GalleryCard = ({ src, alt, onClick }: GalleryCardProps) => {
  return (
    <motion.figure
      className="gallery-thumb"
      onClick={onClick}
      whileHover="hover"
      initial="initial"
      animate="initial"
      style={{ cursor: "pointer", overflow: "hidden", position: "relative" }}
    >
      <img src={src} alt={alt} loading="lazy" style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }} />
      <motion.figcaption
        className="gallery-overlay"
        variants={overlayVariants}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.32)",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0,
          borderRadius: "8px",
        }}
      >
        <ZoomIcon />
      </motion.figcaption>
    </motion.figure>
  );
};

export default GalleryCard;
