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
    const consoleSpy = jest.spyOn(console, 'log'); // Spy on console.log
  
    render(<TravelRequestForm />);
  
    // Get the input elements using placeholder text (or labels if added)
    const destinationInput = screen.getByPlaceholderText('Destination');
    const startDateInput = screen.getByPlaceholderText('Start Date');
    const endDateInput = screen.getByPlaceholderText('End Date');
    const purposeTextarea = screen.getByPlaceholderText('Purpose');
    const submitButton = screen.getByText('Submit');
  
    // Simulate user input
    fireEvent.change(destinationInput, { target: { value: 'Paris' } });
    fireEvent.change(startDateInput, { target: { value: '2024-08-01' } });
    fireEvent.change(endDateInput, { target: { value: '2024-08-10' } });
    fireEvent.change(purposeTextarea, { target: { value: 'Business Trip' } });
  
    // Submit the form
    fireEvent.click(submitButton); // Or fireEvent.submit(formElement) if you have a form
  
    // Assert that console.log was called with the correct object
    expect(consoleSpy).toHaveBeenCalledWith('Travel Request:', {
      destination: 'Paris',
      startDate: '2024-08-01',
      endDate: '2024-08-10',
      purpose: 'Business Trip',
    });
  
    consoleSpy.mockRestore(); // Restore original console.log
  });