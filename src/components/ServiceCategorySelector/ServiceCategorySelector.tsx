import { categoryServices, type CategoryServiceItem } from '@/data/pricing';
import ClockIcon from "../icons/ClockIcon";
// import './ServiceCategorySelector.css';

interface Props {
  value: string;
  onChange: (category: string) => void;
  categories?: CategoryServiceItem[];
}

const ServiceCategorySelector = ({ value, onChange, categories }: Props) => {
  const handleSelect = (title: string) => {
    onChange(title); // Only pass the string title!
  };

  const data = categories && categories.length ? categories : categoryServices;

  const getPricingInfo = (title: string) =>
    data.find((s) => s.title === title || s.name === title);

  return (
    <div className="service-selector">
      <h3 className="service-selector-heading">Select a category service</h3>

      <div className="service-selector-grid">
        {data.map((service) => {
          const pricing = getPricingInfo(service.title || service.name);

          return (
            <div
              key={service.title || service.name}
              className={`service-selector-card ${value === (service.title || service.name) ? 'selected' : ''}`}
              onClick={() => handleSelect(service.title || service.name)}
            >
              <h4 className="service-selector-title">
                {(service.title || service.name)} - ${pricing?.cost}
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
