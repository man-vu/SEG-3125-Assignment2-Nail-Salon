// Services.tsx
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { Button } from '@/components/ui/button';
import './Services.css';
import { servicesContent } from '@/data/content';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-heading">
          <h2>{servicesContent.heading}</h2>
          <p>{servicesContent.subtext}</p>
        </div>

        <div className="services-grid">
          {servicesContent.items.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
