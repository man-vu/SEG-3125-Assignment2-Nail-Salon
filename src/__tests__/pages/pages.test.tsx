import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import BookingPage from '@/pages/BookingPage/BookingPage'
import ServicesPage from '@/pages/ServicesPage/ServicesPage'
import TeamPage from '@/pages/TeamPage/TeamPage'
import ContactUsPage from '@/pages/ContactUsPage/ContactUsPage'
import GiftCardPage from '@/pages/GiftCardPage/GiftCardPage'
import LoginPage from '@/pages/Auth/LoginPage/LoginPage'
import RegisterPage from '@/pages/Auth/RegisterPage/RegisterPage'

describe('Page renders', () => {
  it('BookingPage', () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/book an appointment/i)).toBeInTheDocument()
  })

  it('ServicesPage', () => {
    render(
      <BrowserRouter>
        <ServicesPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/services/i)).toBeInTheDocument()
  })

  it('TeamPage', () => {
    render(
      <BrowserRouter>
        <TeamPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/our team/i)).toBeInTheDocument()
  })

  it('ContactUsPage', () => {
    render(
      <BrowserRouter>
        <ContactUsPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/contact us/i)).toBeInTheDocument()
  })

  it('GiftCardPage', () => {
    render(
      <BrowserRouter>
        <GiftCardPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/gift card/i)).toBeInTheDocument()
  })

  it('LoginPage', () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/login/i)).toBeInTheDocument()
  })

  it('RegisterPage', () => {
    render(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/register/i)).toBeInTheDocument()
  })
})
