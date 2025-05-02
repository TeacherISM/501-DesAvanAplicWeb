import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import TravelRequestForm from '../../class3/A01799073/TravelRequestForm';

describe('TravelRequestForm', () => {
  const mockOnSuccess = jest.fn();

  test('renders the travel request form', () => {
    const { getByLabelText } = render(<TravelRequestForm onSuccess={mockOnSuccess} />);
    expect(getByLabelText('Destination')).toBeInTheDocument();
    expect(getByLabelText('Start Date')).toBeInTheDocument();
    expect(getByLabelText('End Date')).toBeInTheDocument();
    expect(getByLabelText('Purpose')).toBeInTheDocument();
  });

  test('displays validation errors if the form is submitted with invalid data', () => {
    const { getByText } = render(<TravelRequestForm onSuccess={mockOnSuccess} />);
    fireEvent.submit(getByText('Submit'));
    expect(getByText('Destination is required')).toBeInTheDocument();
    expect(getByText('Start date is required')).toBeInTheDocument();
    expect(getByText('End date is required')).toBeInTheDocument();
    expect(getByText('Purpose is required')).toBeInTheDocument();
  });
});
