import { render, screen, fireEvent } from '@testing-library/react'
import StepProgressBar from '@/components/StepProgressBar/StepProgressBar'

test('renders steps and handles click', () => {
  const steps = ['one', 'two', 'three']
  const onStepClick = jest.fn()
  render(<StepProgressBar steps={steps} currentStep={1} onStepClick={onStepClick} />)
  expect(screen.getByText('one')).toBeInTheDocument()
  const first = screen.getByText('one')
  fireEvent.click(first)
  expect(onStepClick).toHaveBeenCalled()
})
