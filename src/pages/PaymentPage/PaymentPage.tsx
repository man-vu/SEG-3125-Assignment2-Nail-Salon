import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { categoryServices } from '@/data/pricing';
import './PaymentPage.css';

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const booking = (state as any)?.formData;

  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const getPrice = () => {
    if (!booking) return '';
    for (const cat of categoryServices) {
      if (cat.title === booking.service) return `${cat.currency} ${cat.cost}`;
      const svc = cat.services?.find(s => s.title === booking.service);
      if (svc) return `${svc.currency} ${svc.cost}`;
    }
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div className="payment-bg">
      <form className="payment-form" onSubmit={handleSubmit}>
        <h1 className="payment-title">Payment</h1>

        {booking && (
          <div className="payment-summary">
            <p><strong>Service:</strong> {booking.service}</p>
            <p><strong>Artist:</strong> {booking.designer}</p>
            {booking.start && (
              <p><strong>Date:</strong> {new Date(booking.start).toLocaleString()}</p>
            )}
            {getPrice() && <p><strong>Price:</strong> {getPrice()}</p>}
          </div>
        )}

        <Input
          placeholder="Name on Card"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <Input
          placeholder="Card Number"
          value={card}
          onChange={e => setCard(e.target.value)}
          required
        />
        <div className="payment-row">
          <Input
            placeholder="MM/YY"
            value={expiry}
            onChange={e => setExpiry(e.target.value)}
            required
          />
          <Input
            placeholder="CVV"
            value={cvv}
            onChange={e => setCvv(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="payment-button">
          Pay Now
        </Button>
        {submitted && <div className="payment-success">Payment Successful!</div>}
      </form>
    </div>
  );
};

export default PaymentPage;
