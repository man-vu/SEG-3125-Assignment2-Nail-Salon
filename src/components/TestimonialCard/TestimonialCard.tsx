// components/TestimonialCard.tsx
import { Star } from 'lucide-react';
import './TestimonialCard.css';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialCard = ({ name, role, image, quote, rating }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <div className="avatar">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="stars">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={18} className="star-icon" />
        ))}
      </div>
      <blockquote>"{quote}"</blockquote>
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  );
};

export default TestimonialCard;
