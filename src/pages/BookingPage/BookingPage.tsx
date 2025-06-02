import { useState, useEffect } from 'react';
import './BookingPage.css';
import ServiceCategorySelector from '../../components/ServiceCategorySelector/ServiceCategorySelector';
import ServiceSelector from '../../components/ServiceSelector/ServiceSelector';
import DesignerSelector from '../../components/DesignerSelector/DesignerSelector';
import Scheduler from '../../components/Scheduler/Scheduler';
import { getDummyBookings, BookingEvent } from '../../data/availableSlots';
import StepProgressBar from '../../components/StepProgressBar/StepProgressBar';
import ReviewModal from '../../components/ReviewModal/ReviewModal'; // <-- import
import SidebarMask from '../../components/SidebarMask/SidebarMask';

const steps = [
  'Select a service category',
  'Select a service',
  'Select an artist',
  'Select date & time',
  'Review & Confirmation',
];

const BookingPage = () => {
  const [formData, setFormData] = useState({
    category: '',
    service: '',
    designer: '',
    start: null as Date | null,
    end: null as Date | null,
  });
  const [events, setEvents] = useState<BookingEvent[]>([]);
  useEffect(() => { setEvents(getDummyBookings()); }, []);

  const [step, setStep] = useState(0);
  const [showReview, setShowReview] = useState(false);

  const goToStep = (targetStep: number) => {
    setStep(targetStep);
    setFormData(prev => {
      if (targetStep === 0) return { ...prev, category: '', service: '', designer: '', start: null, end: null };
      if (targetStep === 1) return { ...prev, service: '', designer: '', start: null, end: null };
      if (targetStep === 2) return { ...prev, designer: '', start: null, end: null };
      if (targetStep === 3) return { ...prev, start: null, end: null };
      return prev;
    });
  };

  const canProceed =
    (step === 0 && !!formData.category) ||
    (step === 1 && !!formData.service) ||
    (step === 2 && !!formData.designer) ||
    (step === 3 && !!formData.start && !!formData.end);

  const handleNext = () => { 
    if (canProceed) {
      if (step === 3) setShowReview(true);
      else setStep((s) => s + 1);
    }
  };
  const handleBack = () => { if (step > 0) goToStep(step - 1); };

  const handleCategoryChange = (cat: string) => {
    setFormData(prev => ({ ...prev, category: cat, service: '', designer: '', start: null, end: null }));
    setStep(1);
  };
  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement> | string) => {
    const value = typeof e === 'string' ? e : e.target.value;
    setFormData(prev => ({ ...prev, service: value, designer: '', start: null, end: null }));
    setStep(2);
  };
  const handleDesignerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, designer: e.target.value, start: null, end: null }));
    setStep(3);
  };
  const handleSelectSlot = (slotInfo: any) => {
    setFormData(prev => ({ ...prev, start: slotInfo.start, end: slotInfo.end }));
    setStep(4);
    setShowReview(true); // open modal immediately on slot pick
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setEvents(prev => [
      ...prev,
      {
        title: `${formData.service} w/ ${formData.designer}`,
        start: formData.start!,
        end: formData.end!,
      },
    ]);
    setShowReview(false);
    alert(`Appointment booked on ${formData.start?.toLocaleString()}`);
    setStep(0);
    setFormData({ category: '', service: '', designer: '', start: null, end: null });
  };

  const handleReviewClose = () => {
    setShowReview(false);
    setStep(3); // Go back to scheduler
  };

  return (
    <section className="booking-page">
      <div className="booking-container">
        <div className="booking-header">
          <h1>Book an Appointment</h1>
          <StepProgressBar
            steps={steps}
            currentStep={step}
            onStepClick={goToStep}
          />
        </div>
        <div className="booking-body">
        <aside className="booking-sidebar" style={{ position: "relative" }}>
          {/* Step 0–2: show only one selector */}
          {step === 0 && (
            <ServiceCategorySelector value={formData.category} onChange={handleCategoryChange} />
          )}
          {step === 1 && (
            <ServiceSelector value={formData.service} category={formData.category} onChange={handleServiceChange} />
          )}
          {step === 2 && (
            <DesignerSelector value={formData.designer} onChange={handleDesignerChange} />
          )}

          {/* Step 3 and above: show all previous as read-only */}
          {step >= 3 && (
            <>
              <ServiceCategorySelector value={formData.category} onChange={() => {}}  />
              <ServiceSelector value={formData.service} category={formData.category} onChange={() => {}}  />
              <DesignerSelector value={formData.designer} onChange={() => {}}  />
              <SidebarMask text="Your selections are locked in. To change, go back." />
            </>
          )}
        </aside>
          <div className="booking-main">
            {/* Always show scheduler, but disable slot selection unless step===3 */}
            <div className="calendar-wrapper">
              <Scheduler
                events={events}
                onSelectSlot={handleSelectSlot}
                selectable={step === 3}
              />
              {step < 3 && (<SidebarMask text="Select category, service, and artist to choose a time" />

              )}
            </div>
          </div>
        </div>
      </div>
      <ReviewModal
        open={showReview}
        onClose={handleReviewClose}
        onConfirm={handleSubmit}
        formData={formData}
      />
    </section>
  );
};

export default BookingPage;
