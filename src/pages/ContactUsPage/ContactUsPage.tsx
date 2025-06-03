
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./ContactUsPage.css";

const ContactUsPage = () => (
  <div className="contact-bg">
      <header className="gallery-header">
        <h2>Contact Us</h2>
        <div className="divider"></div>
        <p>
          We'd love to hear from you! Reach out with questions, feedback, or to book your next appointment—our team is here to help.
        </p>
      </header>
    <main className="contact-main">
      <section className="contact-left">
        {/* Embedded Google Map (Blossom Avenue) */}
        <div className="contact-map">
          <iframe
            title="Dreamy Nail & Beauty Map"
            src="https://www.google.com/maps?q=88+Blossom+Avenue,+Unit+5,+Ottawa,+ON+K2G+3V9,+Canada&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Newsletter Signup */}
        <div className="contact-newsletter">
          <h2 className="newsletter-title">Stay Dreamy</h2>
          <p className="newsletter-desc">
            Join our mailing list for exclusive offers, seasonal promotions, and self-care tips.
          </p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email"
              required
            />
            <Button className="newsletter-btn">Join Now</Button>
          </form>
        </div>
      </section>
      <section className="contact-right">
        <div className="contact-info-block">
          <h3 className="contact-subtitle">Visit Us</h3>
          <div className="contact-row">
            <MapPin size={18} />
            <span>
              88 Blossom Avenue, Unit 5<br />
              Ottawa, ON K2G 3V9, Canada
            </span>
          </div>
        </div>
        <div className="contact-info-block">
          <h3 className="contact-subtitle">Phone</h3>
          <div className="contact-row">
            <Phone size={18} />
            <a href="tel:6135558828">(613) 555-8828</a>
          </div>
        </div>
        <div className="contact-info-block">
          <h3 className="contact-subtitle">Email</h3>
          <div className="contact-row">
            <Mail size={18} />
            <a href="mailto:hello@dreamynailbeauty.ca">hello@dreamynailbeauty.ca</a>
          </div>
        </div>
        <div className="contact-info-block">
          <h3 className="contact-subtitle">Salon Hours</h3>
          <ul className="contact-hours">
            <li>
              <span>Monday – Friday:</span>
              <span>10:00 AM – 7:00 PM</span>
            </li>
            <li>
              <span>Saturday:</span>
              <span>10:00 AM – 6:00 PM</span>
            </li>
            <li>
              <span>Sunday:</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
    <footer className="contact-footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Dreamy Nail & Beauty. All Rights Reserved.</span>
        <span className="footer-links">
          <a href="/terms">Terms & Conditions</a>
          <span> | </span>
          <a href="/privacy">Privacy Policy</a>
        </span>
      </div>
    </footer>
  </div>
);

export default ContactUsPage;
