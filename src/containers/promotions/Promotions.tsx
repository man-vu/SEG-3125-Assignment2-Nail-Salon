// src/containers/Promotions.tsx
import { Button } from '../../components/ui/button';
import './Promotions.css';
import { promotionsContent } from '@/data/content';

const Promotions = () => {
  const { subtitle, title, description, discountCode, buttonText, partnerLogos } = promotionsContent;

  return (
    <section className="promotions-section">
      <div className="promotions-overlay"></div>

      <div className="promotions-container">
        <div className="promotions-content">
          <h3 className="promo-subtitle">{subtitle}</h3>
          <h2 className="promo-title">{title}</h2>
          <p className="promo-description">
            {description}
            <strong>{discountCode}</strong>
          </p>
          <Button className="promo-button">{buttonText}</Button>
        </div>

        <div className="promotions-logos">
          <div className="logos-grid">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="partner-logo"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
