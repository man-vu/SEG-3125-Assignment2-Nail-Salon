import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '@/components/Header/Header'

test('renders header logo text', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  expect(screen.getByText(/REAMY NAIL & BEAUTY/i)).toBeInTheDocument()
})
