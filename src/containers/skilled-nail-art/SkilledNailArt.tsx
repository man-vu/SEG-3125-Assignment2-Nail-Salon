// src/containers/SkilledNailArt.tsx
import './SkilledNailArt.css';
import { skilledNailArtContent } from '@/data/content';

const SkilledNailArt = () => {
  const { tag, heading, description, panelTitle, panelText } = skilledNailArtContent;

  return (
    <section className="skilled-section">
      <div className="skilled-container">
        <div className="skilled-grid">
          <div className="skilled-intro">
            <span className="skilled-tag">{tag}</span>
            <h2 className="skilled-heading">{heading}</h2>
            <p className="skilled-description">{description}</p>
          </div>

          <div className="skilled-panel">
            <div className="panel-box">
              <h3 className="panel-title">{panelTitle}</h3>
              <p className="panel-text">{panelText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkilledNailArt;
