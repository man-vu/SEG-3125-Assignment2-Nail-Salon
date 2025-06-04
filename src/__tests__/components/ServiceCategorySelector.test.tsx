import { render, screen, fireEvent } from '@testing-library/react'
import ServiceCategorySelector from '@/components/ServiceCategorySelector/ServiceCategorySelector'

const onChange = jest.fn()
const categories = [
  { id: 1, title: 'Manicure', image: '', description: '' },
]

test('renders category selector and selects option', () => {
  render(<ServiceCategorySelector value={null} categories={categories} onChange={onChange} />)
  expect(screen.getByText(/select a category service/i)).toBeInTheDocument()
  const option = screen.getByRole('heading', { name: /^Manicure/i })
  fireEvent.click(option)
  expect(onChange).toHaveBeenCalled()
})
