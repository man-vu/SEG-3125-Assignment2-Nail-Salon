import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext'

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: any) => <div>{children}</div>,
  SwiperSlide: ({ children }: any) => <div>{children}</div>,
}));

jest.mock('swiper/modules', () => ({
  EffectCoverflow: {},
  Autoplay: {},
}));

jest.mock('swiper/css', () => ({}));
jest.mock('swiper/css/effect-coverflow', () => ({}));

jest.mock('./containers/gallery/Gallery', () => () => <div>Gallery</div>);
jest.mock('./containers/gift-cards/GiftCards', () => () => <div>GiftCards</div>);
jest.mock('./containers/hero/Hero', () => () => <div>Hero</div>);
jest.mock('./containers/services/Services', () => () => <div>Services</div>);
jest.mock('./containers/about/About', () => () => <div>About</div>);
jest.mock('./containers/testimonials/Testimonials', () => () => <div>Testimonials</div>);
jest.mock('./containers/footer/Footer', () => () => <div>Footer</div>);

test('renders header', () => {
  render(
    <AuthProvider>
      <App />
    </AuthProvider>
  )
  expect(screen.getByText(/REAMY NAIL & BEAUTY/i)).toBeInTheDocument()
})
