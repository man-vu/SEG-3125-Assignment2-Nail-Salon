import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header/Header';
import Footer from './containers/footer/Footer';
import Hero from './containers/hero/Hero';
import Services from './containers/services/Services';
import About from './containers/about/About';
import Testimonials from './containers/testimonials/Testimonials';
import Gallery from './containers/gallery/Gallery';
import GiftCards from './containers/gift-cards/GiftCards';
import { lazy, Suspense } from 'react';

const BookingPage = lazy(() => import('./pages/BookingPage/BookingPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage/ServicesPage'));
const TeamPage = lazy(() => import('./pages/TeamPage/TeamPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage/ContactUsPage'));
const GiftCardPage = lazy(() => import('./pages/GiftCardPage/GiftCardPage'));
const LoginPage = lazy(() => import('./pages/Auth/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/Auth/RegisterPage/RegisterPage'));

const pageTransition = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.4 },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Hero />
              <Services />
              <About />
              <Testimonials />
              <Gallery />
              <GiftCards />
            </motion.div>
          }
        />
        <Route
          path="/booking"
          element={
            <motion.div {...pageTransition}>
              <BookingPage />
            </motion.div>
          }
        />
        <Route
          path="/gallery"
          element={
            <motion.div {...pageTransition}>
              <Gallery />
            </motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <motion.div {...pageTransition}>
              <ServicesPage />
            </motion.div>
          }
        />
        <Route
          path="/team"
          element={
            <motion.div {...pageTransition}>
              <TeamPage />
            </motion.div>
          }
        />
        <Route
          path="/contactus"
          element={
            <motion.div {...pageTransition}>
              <ContactUsPage />
            </motion.div>
          }
        />
        <Route
          path="/gift-cards"
          element={
            <motion.div {...pageTransition}>
              <GiftCardPage />
            </motion.div>
          }
        />
        <Route
          path="/login"
          element={
            <motion.div {...pageTransition}>
              <LoginPage />
            </motion.div>
          }
        />
        <Route
          path="/register"
          element={
            <motion.div {...pageTransition}>
              <RegisterPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
