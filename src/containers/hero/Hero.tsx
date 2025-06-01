// src/sections/Hero/Hero.tsx
import { useState, useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { cn } from '@/lib/utils';
import { heroSlides } from '@/data/content';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={cn('hero-slide', currentSlide === index ? 'active' : '')}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h2 className="hero-title">{slide.title}</h2>
            <h1 className="hero-subtitle">{slide.subtitle}</h1>
              <Button className="hero-button" asChild>
                <Link to={slide.buttonLink}>{slide.buttonText}</Link>
              </Button>
          </div>
        </div>
      ))}

      <div className="hero-indicators">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn('hero-dot', currentSlide === index ? 'active' : '')}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
