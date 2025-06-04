import { render, screen } from '@testing-library/react'
import TeammateCard from '@/components/TeammateCard/TeammateCard'

test('renders teammate card with props', () => {
  render(
    <TeammateCard
      name="Alice"
      title="Nail Artist"
      avatar="avatar.png"
      bio="Bio text"
    />
  )
  expect(screen.getByText('Alice')).toBeInTheDocument()
  expect(screen.getByText('Nail Artist')).toBeInTheDocument()
  expect(screen.getByText('Bio text')).toBeInTheDocument()
})
