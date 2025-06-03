import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import './GiftCards.css';
import { giftCardsContent } from '@/data/content';

const GiftCards = () => {
  const {
    followTitle,
    followHandle,
    followButtonText,
    followLink, // Add this in your content if not already
    promoTitle,
    promoText,
    promoButtonText,
    promoLink, // Add this in your content if not already
  } = giftCardsContent;

  return (
    <section className="giftcards-section">
      <div className="giftcards-container">
        <div className="giftcards-grid">
          <div className="giftcards-panel follow-panel">
            <div className="panel-content">
              <h3 className="follow-title">{followTitle}</h3>
              <h2 className="follow-handle">{followHandle}</h2>
              {/* External link, use <a> */}
              <a href={followLink} target="_blank" rel="noopener noreferrer">
                <Button className="follow-button">{followButtonText}</Button>
              </a>
            </div>
          </div>

          <div className="giftcards-panel promo-panel">
            <div className="panel-content">
              <h2 className="promo-title">{promoTitle}</h2>
              <p className="promo-text">{promoText}</p>
              {/* Internal link, use <Link> */}
              <Link to={promoLink}>
                <Button className="promo-button">{promoButtonText}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCards;
