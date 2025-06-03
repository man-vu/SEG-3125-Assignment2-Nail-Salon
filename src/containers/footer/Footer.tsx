import { useState } from "react";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import './Footer.css';
import { footerContent } from '@/data/content';

const Footer = () => {
  const { newsletter, contact, hours, socialLinks, brand, copyright } = footerContent;

  // State for newsletter form
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    // Basic email validation
    if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    // Simulate success (replace this with real API)
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-title">{newsletter.title}</h3>
            <p className="footer-text">{newsletter.text}</p>
            <form className="footer-subscribe" onSubmit={handleNewsletterSubmit}>
              <Input
                type="email"
                placeholder={newsletter.placeholder}
                className="footer-input"
                value={email}
                onChange={e => setEmail(e.target.value)}
                aria-label="Your email address"
                disabled={submitted}
                required
              />
              <Button className="footer-subscribe-button" type="submit" disabled={submitted}>
                {newsletter.buttonText}
              </Button>
            </form>
            {error && <div className="footer-error">{error}</div>}
            {submitted && <div className="footer-success">Thank you for joining our newsletter!</div>}
          </div>

          <div className="footer-column">
            <h3 className="footer-title">{contact.title}</h3>
            <ul className="footer-contact">
              <li>
                <MapPin size={20} className="footer-icon" />
                <span>{contact.address}</span>
              </li>
              <li>
                <Phone size={20} className="footer-icon" />
                <span>{contact.phone}</span>
              </li>
              <li>
                <Mail size={20} className="footer-icon" />
                <span>{contact.email}</span>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">{hours.title}</h3>
            <ul className="footer-hours">
              {hours.schedule.map((entry, idx) => (
                <li key={idx}>
                  <span>{entry.day}:</span>
                  <span>{entry.time}</span>
                </li>
              ))}
            </ul>
            <div className="footer-social">
              <a href={socialLinks.facebook} aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href={socialLinks.instagram} aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href={socialLinks.twitter} aria-label="Twitter">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{copyright(brand)}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
