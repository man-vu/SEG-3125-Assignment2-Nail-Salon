import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './BookingConfirmationPage.css';
import { Button } from '@/components/ui/button';

interface BookingDetails {
  category: string;
  service: string;
  designer: string;
  start: Date | string | null;
  end: Date | string | null;
}

const BookingConfirmationPage: React.FC = () => {
  const location = useLocation();
  const state = (location.state || {}) as BookingDetails;

  const start = state.start ? new Date(state.start) : null;
  const end = state.end ? new Date(state.end) : null;

  return (
    <main className="booking-confirmation-page">
      <div className="booking-confirmation-container">
        <h2>Your Booking is Confirmed!</h2>
        <p className="confirmation-details">
          <strong>Category:</strong> {state.category} <br />
          <strong>Service:</strong> {state.service} <br />
          <strong>Artist:</strong> {state.designer} <br />
          <strong>Date &amp; Time:</strong>{' '}
          {start?.toLocaleString()} – {end?.toLocaleTimeString()}
        </p>

        <section className="prep-tips">
          <h3>Preparation Tips</h3>
          <ul>
            <li>Arrive 10 minutes early to settle in.</li>
            <li>Remove any old polish before your appointment.</li>
            <li>Inform us of any allergies or sensitivities.</li>
            <li>Bring open-toed shoes for pedicure services.</li>
          </ul>
        </section>

        <Button asChild className="back-home-btn">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </main>
  );
};

export default BookingConfirmationPage;
