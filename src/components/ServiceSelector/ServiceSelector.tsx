// src/components/ServiceSelector/ServiceSelector.tsx
import { categoryServices } from '@/data/pricing';
import './ServiceSelector.css';
import ClockIcon from "../icons/ClockIcon";

interface Props {
  value: string;
  category: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement> | string) => void;
}

const ServiceSelector = ({ value, category, onChange }: Props) => {
  const handleSelect = (title: string) => {
    onChange({ target: { name: 'service', value: title } } as any);
  };

  const selectedCategory = categoryServices.find(cat => cat.title === category);

  return (
    <div className="service-selector">
      <h3 className="service-selector-heading">Select a Service</h3>

      {!selectedCategory || !selectedCategory.services || selectedCategory.services.length === 0 ? (
        <p className="service-selector-subtext">Please select a service category with available services.</p>
      ) : (
        <div className="service-selector-grid">
          {selectedCategory.services.map((service) => (
            <div
              key={service.title}
              className={`service-selector-card ${value === service.title ? 'selected' : ''}`}
              onClick={() => handleSelect(service.title)}
            >
              <h4 className="service-selector-title">{service.title} - ${service.cost}</h4>
              <p className="service-selector-description">{service.description}</p>
              <div className="service-selector-meta">
                <p style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <ClockIcon size={16} color="#bbb" style={{ marginRight: 4, flexShrink: 0 }} />
                  {service.estimatedTimeMinutesRange[0]}–{service.estimatedTimeMinutesRange[1]} mins
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceSelector;
