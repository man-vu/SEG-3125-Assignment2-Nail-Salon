import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '@/components/Header/Header'
import { AuthProvider } from '@/contexts/AuthContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import '@testing-library/jest-dom'

test('renders header logo text', () => {
  render(
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
  expect(screen.getByText(/REAMY NAIL & BEAUTY/i)).toBeInTheDocument()
})
