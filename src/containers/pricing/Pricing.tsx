// src/containers/Pricing.tsx
import PriceCard from '../../components/PriceCard/PriceCard';
import './Pricing.css';
import { pricingContent } from '@/data/content';

const Pricing = () => {
  const { headerTitle, headerDescription, pricingOptions, footerText, footerLinkText } = pricingContent;

  return (
    <section id='pricing' className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2>{headerTitle}</h2>
          <div className="divider"></div>
          <p>{headerDescription}</p>
        </div>

        <div className="pricing-grid">
          {pricingOptions.map((option, index) => (
            <PriceCard
              key={index}
              title={option.title}
              price={option.price}
              features={option.features}
              popular={option.popular}
            />
          ))}
        </div>

        <div className="pricing-cta">
          <p>{footerText}</p>
          <button className="pricing-link">{footerLinkText}</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
