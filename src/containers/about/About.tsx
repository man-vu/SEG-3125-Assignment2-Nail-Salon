import './About.css';
import { Button } from '../../components/ui/button';
import CheckIcon from '../../components/icons/CheckIcon';
import { aboutContent } from '../../data/content';

const About = () => {
  const { title, intro, image, features, cta } = aboutContent;

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img src={image.src} alt={image.alt} className="about-image" />
          </div>

          <div className="about-content">
            <h2 className="about-title">{title}</h2>
            {intro.map((paragraph, idx) => (
              <p className="about-text" key={idx}>{paragraph}</p>
            ))}

            <div className="about-features">
              {features.map((feature, idx) => (
                <div className="feature-item" key={idx}>
                  <div className="feature-icon"><CheckIcon /></div>
                  <div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="about-button">{cta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
