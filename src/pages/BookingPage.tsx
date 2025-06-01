import { useState } from 'react';
import './BookingPage.css';
import { Button } from '../components/ui/button';
import { Calendar, dateFnsLocalizer, SlotInfo } from 'react-big-calendar';
import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';
import { startOfWeek } from 'date-fns/startOfWeek';
import { getDay } from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { enUS } from 'date-fns/locale/en-US';

const locales = {
  'en-US': enUS,
};


const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    start: null as Date | null,
    end: null as Date | null,
  });

  const [events, setEvents] = useState<any[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    setFormData((prev) => ({
      ...prev,
      start: slotInfo.start,
      end: slotInfo.end,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.start || !formData.end) {
      alert('Please select a time slot.');
      return;
    }

    const newEvent = {
      title: `${formData.name} (${formData.service})`,
      start: formData.start,
      end: formData.end,
    };

    setEvents((prev) => [...prev, newEvent]);

    alert(
      `Appointment booked for ${formData.name} on ${formData.start.toLocaleString()}`
    );

    // TODO: Send to backend or Firebase here
  };

  return (
    <section className="booking-page">
      <div className="booking-container">
        <h2 className="booking-title">Book an Appointment</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <select name="service" value={formData.service} onChange={handleInputChange} required>
            <option value="">Select a Service</option>
            <option value="manicure">Manicure</option>
            <option value="pedicure">Pedicure</option>
            <option value="nail-art">Nail Art</option>
            <option value="spa">Spa Package</option>
          </select>

          <div style={{ height: '500px', margin: '2rem 0' }}>
            <Calendar
              localizer={localizer}
              events={events}
              defaultView="week"
              views={['week']}
              step={30}
              timeslots={1}
              selectable
              onSelectSlot={handleSelectSlot}
              startAccessor="start"
              endAccessor="end"
              style={{ height: '100%' }}
            />
          </div>

          <Button type="submit" className="booking-submit">
            Confirm Booking
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BookingPage;
