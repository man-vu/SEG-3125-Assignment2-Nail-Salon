import { render, screen, fireEvent } from '@testing-library/react'
import ServiceSelector from '@/components/ServiceSelector/ServiceSelector'

const onChange = jest.fn()

const category = 'Manicure'

test('renders service selector and selects option', () => {
  render(<ServiceSelector value="" category={category} onChange={onChange} />)
  expect(screen.getByText(/select a service/i)).toBeInTheDocument()
  const option = screen.getByText(/Spa Manicure/i)
  fireEvent.click(option)
  expect(onChange).toHaveBeenCalled()
})
