// ServiceCard.tsx
import { Button } from '@/components/ui/button';
import './ServiceCard.css';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  image: string;
  description?: string;
}

const ServiceCard = ({ title, image, description }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        {description && <p className="service-description">{description}</p>}
        <Link to="/services">
          <Button variant="default" className="service-button">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
