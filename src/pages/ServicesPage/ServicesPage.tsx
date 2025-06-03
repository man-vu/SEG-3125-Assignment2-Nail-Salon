import React, { useRef, useLayoutEffect, useState } from 'react';
import './ServicesPage.css';
import OurServiceCard from '@/components/OurServiceCard/OurServiceCard';
import { Button } from '@/components/ui/button';
import { categoryServices } from '@/data/pricing';

function ServicesTabs({ categories, value, onChange }) {
  const listRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const tabs = Array.from(listRef.current.querySelectorAll('.services-tab')) as HTMLElement[];
    const idx = categories.findIndex(cat => cat.value === value);
    if (tabs[idx]) {
      setIndicator({
        left: tabs[idx].offsetLeft,
        width: tabs[idx].offsetWidth,
      });
    }
  }, [value, categories]);

  return (
    <div className="services-tabs-list-wrap" style={{ position: 'relative' }}>
      <div
        ref={listRef}
        className="services-tabs-list"
        style={{ position: 'relative', zIndex: 2 }}
      >
        {categories.map(cat => (
          <button
            key={cat.value}
            className={`services-tab${value === cat.value ? ' active' : ''}`}
            onClick={() => onChange(cat.value)}
            type="button"
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div
        className="services-tabs-underline"
        style={{
          position: 'absolute',
          left: indicator.left,
          width: indicator.width,
          height: '2.5px',
          background: '#232323',
          bottom: 0,
          borderRadius: '1px',
          zIndex: 1,
          transition:
            'left 0.3s cubic-bezier(0.25,0.46,0.45,0.94), width 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
      />
    </div>
  );
}

const ServicesPage = () => {
  const [tab, setTab] = useState(categoryServices[0].title.toLowerCase());
  const categories = categoryServices.map(cat => ({
    label: cat.title.toUpperCase(),
    value: cat.title.toLowerCase(),
  }));

  return (
    <main className="services-bg">
      {/* Page Header */}
      <header className="gallery-header">
        <h2>Services</h2>
        <div className="divider"></div>
        <p>Discover our range of premium nail services designed to pamper and perfect your nails.
          Each service is performed by our expert technicians using high-quality products.</p>
      </header>

      {/* Services Tabs */}
      <section className="services-tabs-container">
        <ServicesTabs categories={categories} value={tab} onChange={setTab} />
        {(() => {
          const activeCategory = categoryServices.find(
            (cat) => cat.title.toLowerCase() === tab
          );
          if (!activeCategory) return null;
          return (
            <div className="services-tabs-content">
              <div className="services-cards-grid">
                <OurServiceCard
                  title={activeCategory.title}
                  image={activeCategory.image}
                  description={activeCategory.description}
                  cost={activeCategory.cost}
                  currency={activeCategory.currency}
                  estimatedTimeMinutesRange={activeCategory.estimatedTimeMinutesRange}
                />
                {activeCategory.services?.map((svc) => (
                  <OurServiceCard
                    key={svc.title}
                    image={svc.image}
                    title={svc.title}
                    description={svc.description}
                    cost={svc.cost}
                    currency={svc.currency}
                    estimatedTimeMinutesRange={svc.estimatedTimeMinutesRange}
                    shortDescription={svc.shortDescription}
                  />
                ))}
              </div>
            </div>
          );
        })()}
      </section>


      {/* Booking Information */}
      <section className="services-booking-info">
        <div className="services-booking-inner">
          <h2 className="services-booking-title">Ready to Book Your Service?</h2>
          <p className="services-booking-desc">
            Our skilled technicians are ready to provide you with the perfect nail experience.
            Book your appointment today and treat yourself to some well-deserved pampering.
          </p>
          <Button className="services-booking-btn">
            BOOK NOW
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
