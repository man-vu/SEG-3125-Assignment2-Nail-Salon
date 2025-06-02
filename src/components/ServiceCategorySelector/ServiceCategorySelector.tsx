import { categoryServices } from '@/data/pricing';
import ClockIcon from "../icons/ClockIcon";
// import './ServiceCategorySelector.css';

interface Props {
  value: string;
  onChange: (category: string) => void;
}

const ServiceCategorySelector = ({ value, onChange }: Props) => {
  const handleSelect = (title: string) => {
    onChange(title); // Only pass the string title!
  };

  const getPricingInfo = (title: string) =>
    categoryServices.find((s) => s.title === title);

  return (
    <div className="service-selector">
      <h3 className="service-selector-heading">Select a category service</h3>

      <div className="service-selector-grid">
        {categoryServices.map((service) => {
          const pricing = getPricingInfo(service.title);

          return (
            <div
              key={service.title}
              className={`service-selector-card ${value === service.title ? 'selected' : ''}`}
              onClick={() => handleSelect(service.title)}
            >
              <h4 className="service-selector-title">
                {service.title} - ${pricing?.cost}
              </h4>
              <p className="service-selector-description">{service.description}</p>

              {pricing && (
                <div className="service-selector-meta">
                  <p style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <ClockIcon size={16} color="#bbb" style={{ marginRight: 4, flexShrink: 0 }} />
                    {pricing.estimatedTimeMinutesRange[0]}–{pricing.estimatedTimeMinutesRange[1]} mins
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCategorySelector;
