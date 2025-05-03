import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import TravelRequestForm from '../../class4/A01027920/TravelRequestForm'
import '@testing-library/jest-dom';

test('renders the travel request form', () => {
  const { getByPlaceholderText } = render(<TravelRequestForm />);
  expect(getByPlaceholderText('Destination')).toBeInTheDocument();
  expect(getByPlaceholderText('Start Date')).toBeInTheDocument();
  expect(getByPlaceholderText('End Date')).toBeInTheDocument();
  expect(getByPlaceholderText('Purpose')).toBeInTheDocument();
});

test('calls handleSubmit with the correct values when submitted', () => {
    const consoleSpy = jest.spyOn(console, 'log');
  
    render(<TravelRequestForm />);
  
    const destinationInput = screen.getByPlaceholderText('Destination');
    const startDateInput = screen.getByPlaceholderText('Start Date');
    const endDateInput = screen.getByPlaceholderText('End Date');
    const purposeTextarea = screen.getByPlaceholderText('Purpose');
    const submitButton = screen.getByText('Submit');
  
    fireEvent.change(destinationInput, { target: { value: 'Paris' } });
    fireEvent.change(startDateInput, { target: { value: '2024-08-01' } });
    fireEvent.change(endDateInput, { target: { value: '2024-08-10' } });
    fireEvent.change(purposeTextarea, { target: { value: 'Business Trip' } });
  
    fireEvent.click(submitButton);
  
    expect(consoleSpy).toHaveBeenCalledWith('Travel Request:', {
      destination: 'Paris',
      startDate: '2024-08-01',
      endDate: '2024-08-10',
      purpose: 'Business Trip',
    });
  
    consoleSpy.mockRestore();
  });