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
import { type CategoryServiceItem } from '@/data/pricing';
import { type Designer } from '@/data/designers';
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from '@/lib/useIsMobile'; // import the custom hook
import { API_BASE_URL } from '@/config';

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

  const [categories, setCategories] = useState<CategoryServiceItem[]>([]);
  const [designerData, setDesignerData] = useState<Designer[]>([]);

  const [formData, setFormData] = useState({
    category: null as number | null,
    service: '',
    designer: '',
    start: null as Date | null,
    end: null as Date | null,
  });
  const [events, setEvents] = useState<BookingEvent[]>([]);
  const [step, setStep] = useState(0);
  const [showReview, setShowReview] = useState(false);
  const isMobile = useIsMobile(); // <-- use the custom hook

useEffect(() => {
  console.log('Fetching categories...');
  fetch(`${API_BASE_URL}/categories`)
    .then(res => {
      
      console.log('Categories response status:', res.status);
      return res.json();
    })
    .then(data => {
      
      console.log('Categories data:', data);
      setCategories(data);
    })
    .catch(error => {
      console.error('Error fetching categories:', error);
      setCategories([]);
    });

  console.log('Fetching designers...');
  fetch(`${API_BASE_URL}/designers`)
    .then(res => {
      console.log('Designers response status:', res.status);
      return res.json();
    })
    .then(data => {
      console.log('Designers data:', data);
      setDesignerData(data);
    })
    .catch(error => {
      console.error('Error fetching designers:', error);
      setDesignerData([]);
    });
}, []);

  useEffect(() => {
    if (navState.category) {
      setFormData(prev => ({
        ...prev,
        category: typeof navState.category === 'number' ? navState.category : parseInt(navState.category, 10),
        service: navState.service || '',
        designer: '',
        start: null,
        end: null,
      }));
      if (navState.service) setStep(2);
      else setStep(1);
    }
    // eslint-disable-next-line
  }, [navState.category, navState.service]);

  useEffect(() => {
    setEvents(getDummyBookings());
  }, []);

  const categorySource = categories;
  const designerSource = designerData;

  const goToStep = (targetStep: number) => {
    setStep(targetStep);
    setFormData(prev => {
      if (targetStep === 0) return { ...prev, category: null, service: '', designer: '', start: null, end: null };
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

  const handleCategoryChange = (catId: number) => {
    setFormData(prev => ({ ...prev, category: catId, service: '', designer: '', start: null, end: null }));
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
    setFormData({ category: null, service: '', designer: '', start: null, end: null });
  };

  const handleReviewClose = () => {
    setShowReview(false);
    setStep(3);
  };

  // ----------- Core logic for hiding selectors on mobile at date/time step -----------
  // Show selectors if not mobile, or if not on step 3+
  const shouldShowSelectors =
    !isMobile || (step < 3);

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
            <AnimatePresence mode="wait">
              {shouldShowSelectors && (
                <>
                  {step === 0 && (
                    <motion.div
                      key="category"
                      initial={{ opacity: 0, x: -32 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 32 }}
                      transition={{ duration: 0.24 }}
                    >
                      <ServiceCategorySelector categories={categorySource} value={formData.category} onChange={handleCategoryChange} />
                    </motion.div>
                  )}
                  {step === 1 && (
                    <motion.div
                      key="service"
                      initial={{ opacity: 0, x: -32 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 32 }}
                      transition={{ duration: 0.24 }}
                    >
                      <ServiceSelector categories={categorySource} value={formData.service} category={formData.category} onChange={handleServiceChange} />
                    </motion.div>
                  )}
                  {step === 2 && (
                    <motion.div
                      key="designer"
                      initial={{ opacity: 0, x: -32 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 32 }}
                      transition={{ duration: 0.24 }}
                    >
                      <DesignerSelector designers={designerSource} value={formData.designer} onChange={handleDesignerChange} />
                    </motion.div>
                  )}
                  {step >= 3 && (
                    <motion.div
                      key="locked"
                      initial={{ opacity: 0, x: -32 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 32 }}
                      transition={{ duration: 0.24 }}
                    >
                      <ServiceCategorySelector categories={categorySource} value={formData.category} onChange={() => { }} />
                      <ServiceSelector categories={categorySource} value={formData.service} category={formData.category} onChange={() => { }} />
                      <DesignerSelector designers={designerSource} value={formData.designer} onChange={() => { }} />
                      <SidebarMask text="Your selections are locked in. To change, go back." />
                    </motion.div>
                  )}
                </>
              )}
            </AnimatePresence>
          </aside>

          <div className="booking-main">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.24 }}
                className="calendar-wrapper"
              >
                <h3 className="designer-heading">Select date & time</h3>
                <Scheduler
                  events={events}
                  onSelectSlot={handleSelectSlot}
                  selectable={step === 3}
                />
                {step < 3 && (
                  <SidebarMask text="Select category, service, and artist to choose a time" />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <ReviewModal
        open={showReview}
        onClose={handleReviewClose}
        onConfirm={handleSubmit}
        formData={{
          ...formData,
          category: categories.find(c => c.id === formData.category) as any,
        }}
      />
    </section>
  );
};

export default BookingPage;
