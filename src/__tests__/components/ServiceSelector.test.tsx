import { render, screen, fireEvent } from '@testing-library/react'
import ServiceSelector from '@/components/ServiceSelector/ServiceSelector'

const onChange = jest.fn()
const categories = [
  {
    id: 1,
    title: 'Manicure',
    description: '',
    image: '',
    Services: [
      { id: 1, title: 'Spa Manicure', description: '', cost: 20, duration: 30 },
    ],
  },
]
const category = 1

test('renders service selector and selects option', () => {
  render(<ServiceSelector value="" category={category} categories={categories} onChange={onChange} />)
  expect(screen.getByText(/select a service/i)).toBeInTheDocument()
  const option = screen.getByRole('heading', { name: /^Spa Manicure/i })
  fireEvent.click(option)
  expect(onChange).toHaveBeenCalled()
})
