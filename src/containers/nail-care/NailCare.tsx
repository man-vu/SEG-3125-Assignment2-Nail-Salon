// src/sections/NailCare/NailCare.tsx
import { Button } from '../../components/ui/button';
import { nailCareContent } from '@/data/content';
import './NailCare.css';

const NailCare = () => {
  return (
    <section className="nailcare-section">
      <div className="nailcare-overlay"></div>
      <div className="nailcare-container">
        <div className="nailcare-content">
          <h2 className="nailcare-title">{nailCareContent.title}</h2>
          <p className="nailcare-description">{nailCareContent.description}</p>
          <Button className="nailcare-button">{nailCareContent.buttonText}</Button>
        </div>
      </div>
    </section>
  );
};

export default NailCare;
