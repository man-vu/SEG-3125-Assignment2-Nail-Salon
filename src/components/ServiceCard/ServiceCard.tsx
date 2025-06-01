// ServiceCard.tsx
import { Button } from '@/components/ui/button';
import './ServiceCard.css';

interface ServiceCardProps {
  title: string;
  image: string;
  description?: string;
}

const ServiceCard = ({ title, image, description }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={image} alt={title} />
      </div>

      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        {description && <p className="service-description">{description}</p>}
        <Button variant="default" className="service-button">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
