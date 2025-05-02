import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import TravelRequestForm from '../../class3/A01799073/TravelRequestForm';

describe('TravelRequestForm', () => {
  const mockOnSuccess = jest.fn();

  test('renders the travel request form', () => {
    const { getByPlaceholderText } = render(<TravelRequestForm onSuccess={mockOnSuccess} />);
    expect(getByPlaceholderText('Destination')).toBeInTheDocument();
    expect(getByPlaceholderText('Start Date')).toBeInTheDocument();
    expect(getByPlaceholderText('End Date')).toBeInTheDocument();
    expect(getByPlaceholderText('Purpose')).toBeInTheDocument();
  });

  test('displays validation errors if the form is submitted with invalid data', async () => {
    const { findByText, getByText } = render(<TravelRequestForm onSuccess={mockOnSuccess} />);
    fireEvent.click(getByText('Submit'));
    expect(await findByText('Destination is required')).toBeInTheDocument();
    expect(await findByText('Start date is required')).toBeInTheDocument();
    expect(await findByText('End date is required')).toBeInTheDocument();
    expect(await findByText('Purpose is required')).toBeInTheDocument();
  });
});
