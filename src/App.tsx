import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './containers/footer/Footer';
import Hero from './containers/hero/Hero';
import Services from './containers/services/Services';
import About from './containers/about/About';
import NailCare from './containers/nail-care/NailCare';
import SkilledNailArt from './containers/skilled-nail-art/SkilledNailArt';
import Testimonials from './containers/testimonials/Testimonials';
import Gallery from './containers/gallery/Gallery';
import GiftCards from './containers/gift-cards/GiftCards';
import Pricing from './containers/pricing/Pricing';
import Promotions from './containers/promotions/Promotions';
import LatestNews from './containers/latest-news/LatestNews';
import BookingPage from './pages/BookingPage/BookingPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <About />
                  <Testimonials />
                  <Gallery />
                  <GiftCards />
                  <Pricing />
                  <Promotions />
                  <LatestNews />
                </>
              }
            />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
