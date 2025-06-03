import React from 'react';
import './OurServiceCard.css';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface OurServiceCardProps {
  title: string;
  category?: string; // parent category, for service cards
  image?: string;
  description?: string;
  cost: number;
  currency: string;
  estimatedTimeMinutesRange: [number, number];
  shortDescription?: string;
}

function formatMinutes(range: [number, number]) {
  const [min, max] = range;
  return min === max ? `${min} min` : `${min}–${max} min`;
}
function formatPrice(cost: number, currency: string) {
  return `${currency} $${cost}`;
}

const OurServiceCard: React.FC<OurServiceCardProps> = ({
  title,
  category,
  image,
  cost,
  currency,
  estimatedTimeMinutesRange,
  shortDescription
}) => {
  const navigate = useNavigate();

  const handleBook = () => {
    if (category) {
      // Book specific service in a category
      navigate('/booking', { state: { category, service: title } });
    } 
  };

  return (
    <div className="our-card">
      {image && (
        <div className="our-card-img">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}
      <div className="our-card-content">
        <div className="our-card-title">{title}</div>
        <div className="our-card-row">
          <span>{formatMinutes(estimatedTimeMinutesRange)}</span>
          <span className="our-card-cost">{formatPrice(cost, currency)}</span>
        </div>
        {shortDescription && (
          <div className="our-card-shortdesc">{shortDescription}</div>
        )}
        <Button className="our-card-btn" onClick={handleBook}>BOOK IT</Button>
      </div>
    </div>
  );
};

export default OurServiceCard;
