import ZoomIcon from '../../components/icons/ZoomIcon';
import './GalleryCard.css';

interface GalleryCardProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const GalleryCard = ({ src, alt, onClick }: GalleryCardProps) => {
  return (
    <figure className="gallery-thumb" onClick={onClick}>
      <img src={src} alt={alt} />
      <figcaption className="gallery-overlay">
        <ZoomIcon />
      </figcaption>
    </figure>
  );
};

export default GalleryCard;
