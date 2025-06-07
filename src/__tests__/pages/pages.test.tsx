import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import BookingPage from '@/pages/BookingPage/BookingPage'
import ServicesPage from '@/pages/ServicesPage/ServicesPage'
import TeamPage from '@/pages/TeamPage/TeamPage'
import ContactUsPage from '@/pages/ContactUsPage/ContactUsPage'
import GiftCardPage from '@/pages/GiftCardPage/GiftCardPage'
import LoginPage from '@/pages/Auth/LoginPage/LoginPage'
import RegisterPage from '@/pages/Auth/RegisterPage/RegisterPage'
import BookingConfirmationPage from '@/pages/BookingConfirmationPage/BookingConfirmationPage'

describe('Page renders', () => {
  it('BookingPage', () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', { name: /book an appointment/i })).toBeInTheDocument()
  })

  it('ServicesPage', () => {
    render(
      <BrowserRouter>
        <ServicesPage />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', { name: /services/i })).toBeInTheDocument()
  })

  it('TeamPage', () => {
    render(
      <BrowserRouter>
        <TeamPage />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', { name: /our team/i })).toBeInTheDocument()
  })

  it('ContactUsPage', () => {
    render(
      <BrowserRouter>
        <ContactUsPage />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
  })

  it('GiftCardPage', () => {
    render(
      <BrowserRouter>
        <GiftCardPage />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', { name: /gift card/i })).toBeInTheDocument()
  })

  it('LoginPage', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </AuthProvider>
    )
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument()
  })

  it('RegisterPage', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </AuthProvider>
    )
    expect(screen.getByRole('heading', { name: /register/i })).toBeInTheDocument()
  })

  it('BookingConfirmationPage', () => {
    render(
      <BrowserRouter>
        <BookingConfirmationPage />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', { name: /your booking is confirmed/i })).toBeInTheDocument()
  })
})
