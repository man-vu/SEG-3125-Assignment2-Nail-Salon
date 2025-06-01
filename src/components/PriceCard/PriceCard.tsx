// PriceCard.tsx
import { Check } from 'lucide-react';
import '../../containers/pricing/Pricing.css'; // Adjust the path as necessary

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const PriceCard = ({ title, price, features, popular = false }: PriceCardProps) => {
  const cardClasses = `price-card${popular ? ' popular' : ''}`;
  const buttonClasses = `card-button ${popular ? 'primary' : 'secondary'}`;

  return (
    <div className={cardClasses}>
      {popular && <div className="ribbon">Most Popular</div>}

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-price">{price}</div>

        <ul className="card-features">
          {features.map((feature, index) => (
            <li key={index}>
              <Check size={18} className="check-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className={buttonClasses}>Book Now</button>
      </div>
    </div>
  );
};

export default PriceCard;
