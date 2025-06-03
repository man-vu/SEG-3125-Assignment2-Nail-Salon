import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingPage.css';
import ServiceCategorySelector from '@/components/ServiceCategorySelector/ServiceCategorySelector';
import ServiceSelector from '@/components/ServiceSelector/ServiceSelector';
import DesignerSelector from '@/components/DesignerSelector/DesignerSelector';
import Scheduler from '@/components/Scheduler/Scheduler';
import StepProgressBar from '@/components/StepProgressBar/StepProgressBar';
import ReviewModal from '@/components/ReviewModal/ReviewModal';
import SidebarMask from '@/components/SidebarMask/SidebarMask';
import { getDummyBookings, BookingEvent } from '@/data/availableSlots';

const steps = [
  'Select a service category',
  'Select a service',
  'Select an artist',
  'Select date & time',
  'Review & Confirmation',
];

const BookingPage = () => {
  const location = useLocation();
  const navState = location.state || {};

  const [formData, setFormData] = useState({
    category: '',
    service: '',
    designer: '',
    start: null as Date | null,
    end: null as Date | null,
  });
  const [events, setEvents] = useState<BookingEvent[]>([]);
  const [step, setStep] = useState(0);
  const [showReview, setShowReview] = useState(false);

  // On mount, prefill category/service if passed from ServicesPage
  useEffect(() => {
    if (navState.category) {
      setFormData(prev => ({
        ...prev,
        category: navState.category,
        service: navState.service || '',
        designer: '',
        start: null,
        end: null,
      }));
      
      // Set step appropriately
      if (navState.service) setStep(2); // skip to select designer
      else setStep(1); // go to select service in category
    }
    // If no state, just start at step 0 (default)
    // eslint-disable-next-line
  }, [navState.category, navState.service]);

  useEffect(() => {
    setEvents(getDummyBookings());
  }, []);

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
      else setStep(s => s + 1);
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
    setShowReview(true);
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
    setStep(3);
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
            {step === 0 && (
              <ServiceCategorySelector value={formData.category} onChange={handleCategoryChange} />
            )}
            {step === 1 && (
              <ServiceSelector value={formData.service} category={formData.category} onChange={handleServiceChange} />
            )}
            {step === 2 && (
              <DesignerSelector value={formData.designer} onChange={handleDesignerChange} />
            )}
            {step >= 3 && (
              <>
                <ServiceCategorySelector value={formData.category} onChange={() => {}} />
                <ServiceSelector value={formData.service} category={formData.category} onChange={() => {}} />
                <DesignerSelector value={formData.designer} onChange={() => {}} />
                <SidebarMask text="Your selections are locked in. To change, go back." />
              </>
            )}
          </aside>
          <div className="booking-main">
            <div className="calendar-wrapper">
              <h3 className="designer-heading">Select date & time</h3>
              <Scheduler
                events={events}
                onSelectSlot={handleSelectSlot}
                selectable={step === 3}
              />
              {step < 3 && (
                <SidebarMask text="Select category, service, and artist to choose a time" />
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
