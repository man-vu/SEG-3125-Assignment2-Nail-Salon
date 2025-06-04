import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { categoryServices } from '@/data/pricing';
import './PaymentForm.css';

interface PaymentFormProps {
  booking: {
    category: string;
    service: string;
    designer: string;
    start: Date | null;
    end: Date | null;
  };
  onBack: () => void;
  onSuccess: () => void;
}

const PaymentForm = ({ booking, onBack, onSuccess }: PaymentFormProps) => {
  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const getPrice = () => {
    for (const cat of categoryServices) {
      if (cat.title === booking.service) return `${cat.currency} ${cat.cost}`;
      const svc = cat.services?.find((s) => s.title === booking.service);
      if (svc) return `${svc.currency} ${svc.cost}`;
    }
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSuccess();
    }, 1000);
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <h3 className="payment-title">Payment</h3>
      <div className="payment-summary">
        <p>
          <strong>Service:</strong> {booking.service}
        </p>
        <p>
          <strong>Artist:</strong> {booking.designer}
        </p>
        {booking.start && (
          <p>
            <strong>Date:</strong> {booking.start.toLocaleString()}
          </p>
        )}
        {getPrice() && (
          <p>
            <strong>Price:</strong> {getPrice()}
          </p>
        )}
      </div>
      <Input
        placeholder="Name on Card"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        placeholder="Card Number"
        value={card}
        onChange={(e) => setCard(e.target.value)}
        required
      />
      <div className="payment-row">
        <Input
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          required
        />
        <Input
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 16, justifyContent: 'flex-end' }}>
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" className="payment-button">
          Pay Now
        </Button>
      </div>
      {submitted && <div className="payment-success">Payment Successful!</div>}
    </form>
  );
};

export default PaymentForm;
