import { type CategoryServiceItem } from '@/data/pricing';
import ClockIcon from "../icons/ClockIcon";
// import './ServiceCategorySelector.css';

interface Props {
  value: number | null; // ID of the selected category, or null if none selected
  onChange: (categoryId: number) => void;
  categories?: CategoryServiceItem[];
}

const ServiceCategorySelector = ({ value, onChange, categories = [] }: Props) => {
  const handleSelect = (id: number) => {
    onChange(id);
  };

  console.log("ServiceCategorySelector categories", categories);

  // Find pricing info by id
  function getPricingInfo(id: number) {
    if (!categories || categories.length === 0) {
      
      console.warn("No categories available to find pricing info");
      return null;
    }
    return categories.find((s) => s.id === id);
  }

  return (
    <div className="service-selector">
      <h3 className="service-selector-heading">Select a category service</h3>

      <div className="service-selector-grid">
        {categories.map((service) => {
          const pricing = getPricingInfo(service.id);

          return (
            <div
              key={service.id}
              className={`service-selector-card ${value === service.id ? 'selected' : ''}`}
              onClick={() => handleSelect(service.id)}
            >
              <h4 className="service-selector-title">
                {service.title || service.name} - ${pricing?.cost ?? 'N/A'}
              </h4>
              <p className="service-selector-description">{service.description}</p>

              {pricing && pricing.estimatedTimeMinutesRange && (
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
