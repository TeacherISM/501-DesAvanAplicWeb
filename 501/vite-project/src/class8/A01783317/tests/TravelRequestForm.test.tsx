import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TravelRequestForm from '../components/TravelRequestForm';
import '@testing-library/jest-dom';

// Mock the global Date constructor
const mockDate = new Date('2025-05-01');
global.Date = jest.fn(() => mockDate) as any;
global.Date.now = jest.fn(() => mockDate.getTime());

// Restore the original Date implementation
beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('TravelRequestForm Component', () => {
  test('renders the form with all expected fields', () => {
    render(<TravelRequestForm />);
    
    // Check for heading
    expect(screen.getByText('Travel Request Form with Validation')).toBeInTheDocument();
    
    // Check for essential form fields
    expect(screen.getByLabelText('Destination')).toBeInTheDocument();
    expect(screen.getByLabelText('Departure Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Return Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Purpose of Travel')).toBeInTheDocument();
    expect(screen.getByLabelText('Estimated Cost ($)')).toBeInTheDocument();
    expect(screen.getByLabelText('Transportation')).toBeInTheDocument();
    expect(screen.getByLabelText('Accommodation')).toBeInTheDocument();
    expect(screen.getByLabelText(/Advance Payment Required/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Additional Comments')).toBeInTheDocument();
    
    // Check for buttons
    expect(screen.getByTestId('submit-button')).toHaveTextContent('Submit Request');
    expect(screen.getByTestId('reset-button')).toHaveTextContent('Reset');
  });

  test('renders validation rules section', () => {
    render(<TravelRequestForm />);
    
    expect(screen.getByText('Validation Rules')).toBeInTheDocument();
    expect(screen.getByText('Destination must be at least 3 characters')).toBeInTheDocument();
    expect(screen.getByText('Departure date must be in the future')).toBeInTheDocument();
    expect(screen.getByText('Return date must be after departure date')).toBeInTheDocument();
    expect(screen.getByText('Purpose must be at least 10 characters')).toBeInTheDocument();
    expect(screen.getByText('Estimated cost must be a positive number')).toBeInTheDocument();
    expect(screen.getByText('If advance payment is required, amount must be specified')).toBeInTheDocument();
  });

  test('renders back to menu link', () => {
    render(<TravelRequestForm />);
    
    const backLink = screen.getByText('← Back to Menu');
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute('href', '/A01781041/Home.html');
  });

  test('shows validation errors when form is submitted empty', async () => {
    render(<TravelRequestForm />);
    
    // Submit the empty form
    fireEvent.click(screen.getByTestId('submit-button'));
    
    // Validation errors should appear
    expect(screen.getByText('Destination is required')).toBeInTheDocument();
    expect(screen.getByText('Departure date is required')).toBeInTheDocument();
    expect(screen.getByText('Return date is required')).toBeInTheDocument();
    expect(screen.getByText('Purpose of travel is required')).toBeInTheDocument();
    expect(screen.getByText('Estimated cost is required')).toBeInTheDocument();
  });

  test('validates destination field with minimum length requirement', async () => {
    render(<TravelRequestForm />);
    
    const destinationInput = screen.getByTestId('destination-input');
    fireEvent.change(destinationInput, { target: { value: 'NY' } });
    fireEvent.click(screen.getByTestId('submit-button'));
    
    // Find the error message specifically in the error-message div
    const errorMessages = screen.getAllByText('Destination must be at least 3 characters');
    const errorInErrorDiv = errorMessages.find(el => el.className === 'error-message' || el.parentElement?.className === 'error-message');
    expect(errorInErrorDiv).toBeInTheDocument();
    
    // Now fix the field
    fireEvent.change(destinationInput, { target: { value: 'New York' } });
    fireEvent.click(screen.getByTestId('submit-button'));
    
    // Should no longer show the specific error
    expect(screen.queryByText('Destination must be at least 3 characters', { selector: '.error-message' })).not.toBeInTheDocument();
  });

  test('validates date constraints for departure and return dates', async () => {
    render(<TravelRequestForm />);
    
    // Set past date for departure
    const departureInput = screen.getByTestId('departure-date-input');
    fireEvent.change(departureInput, { target: { value: '2023-01-01' } });
    
    // Set return date before departure
    const returnInput = screen.getByTestId('return-date-input');
    fireEvent.change(returnInput, { target: { value: '2025-05-01' } });
    
    fireEvent.click(screen.getByTestId('submit-button'));
    
    // Should show date-related errors
    expect(screen.getByText('Departure date cannot be in the past')).toBeInTheDocument();
    
    // Now set correct dates
    fireEvent.change(departureInput, { target: { value: '2025-05-10' } });
    fireEvent.change(returnInput, { target: { value: '2025-05-08' } });
    
    fireEvent.click(screen.getByTestId('submit-button'));
    
    // Should show error that return date is before departure
    // Use getAllByText and select the error message (not the validation rule)
    const errorMessages = screen.getAllByText('Return date must be after departure date');
    const errorMessage = errorMessages.find(el => el.className === 'error-message' || el.parentElement?.className === 'error-message');
    expect(errorMessage).toBeInTheDocument();
    
    // Fix return date
    fireEvent.change(returnInput, { target: { value: '2025-05-15' } });
    fireEvent.click(screen.getByTestId('submit-button'));
    
    // No date errors should now be present
    expect(screen.queryByText('Departure date cannot be in the past')).not.toBeInTheDocument();
    const returnDateErrors = screen.queryAllByText('Return date must be after departure date', { selector: '.error-message' });
    expect(returnDateErrors.length).toBe(0);
  });

  test('validates purpose field with minimum length requirement', async () => {
    render(<TravelRequestForm />);
    
    const purposeInput = screen.getByTestId('purpose-input');
    fireEvent.change(purposeInput, { target: { value: 'Business' } });
    fireEvent.click(screen.getByTestId('submit-button'));
    
    expect(screen.getByText('Please provide a more detailed purpose (at least 10 characters)')).toBeInTheDocument();
    
    // Fix the purpose field
    fireEvent.change(purposeInput, { target: { value: 'Business meeting with international clients' } });
    fireEvent.click(screen.getByTestId('submit-button'));
    
    expect(screen.queryByText('Please provide a more detailed purpose (at least 10 characters)')).not.toBeInTheDocument();
  });

  test('validates numeric fields (estimated cost)', async () => {
    render(<TravelRequestForm />);
    
    const costInput = screen.getByTestId('cost-input');
    fireEvent.change(costInput, { target: { value: '-100' } });
    fireEvent.click(screen.getByTestId('submit-button'));
    
    expect(screen.getByText('Amount must be a positive number')).toBeInTheDocument();
    
    // Try non-numeric value
    fireEvent.change(costInput, { target: { value: 'abc' } });
    fireEvent.click(screen.getByTestId('submit-button'));
    
    expect(screen.getByText('Amount must be a positive number')).toBeInTheDocument();
    
    // Fix with valid number
    fireEvent.change(costInput, { target: { value: '1500' } });
    fireEvent.click(screen.getByTestId('submit-button'));
    
    expect(screen.queryByText('Amount must be a positive number')).not.toBeInTheDocument();
  });

  test('conditionally shows advance amount field when checkbox is checked', async () => {    
    render(<TravelRequestForm />);
    
    // Advance amount field should not be visible initially
    expect(screen.queryByLabelText('Advance Amount ($)')).not.toBeInTheDocument();
    
    // Check the advance required checkbox
    const checkbox = screen.getByTestId('advance-checkbox');
    fireEvent.click(checkbox);
    
    // Advance amount field should now be visible
    expect(screen.getByLabelText('Advance Amount ($)')).toBeInTheDocument();
    
    // Fill invalid amount and check validation
    const advanceInput = screen.getByTestId('advance-amount-input');
    fireEvent.change(advanceInput, { target: { value: '-50' } });
    fireEvent.click(screen.getByTestId('submit-button'));
    
    expect(screen.getByText('Amount must be a positive number')).toBeInTheDocument();
    
    // Fix with valid number
    fireEvent.change(advanceInput, { target: { value: '500' } });
    
    // Uncheck the box to hide the field again
    fireEvent.click(checkbox);
    expect(screen.queryByLabelText('Advance Amount ($)')).not.toBeInTheDocument();
  });

  test('validate all dropdown options for transportation field', () => {
    render(<TravelRequestForm />);
    
    const transportationSelect = screen.getByTestId('transportation-select');
    expect(transportationSelect).toHaveValue('flight');
    
    // Check all options are available within the select element
    const transportSelect = screen.getByTestId('transportation-select') as HTMLSelectElement;
    expect(transportSelect.options.length).toBe(5);
    expect(transportSelect.options[0].value).toBe('flight');
    expect(transportSelect.options[1].value).toBe('train');
    expect(transportSelect.options[2].value).toBe('car');
    expect(transportSelect.options[3].value).toBe('bus');
    expect(transportSelect.options[4].value).toBe('other');
    
    // Change selection and validate
    fireEvent.change(transportationSelect, { target: { value: 'car' } });
    expect(transportationSelect).toHaveValue('car');
  });

  test('validate all dropdown options for accommodation field', () => {
    render(<TravelRequestForm />);
    
    const accommodationSelect = screen.getByTestId('accommodation-select');
    expect(accommodationSelect).toHaveValue('hotel');
    
    // Check all options are available within the select element
    const accomSelect = screen.getByTestId('accommodation-select') as HTMLSelectElement;
    expect(accomSelect.options.length).toBe(4);
    expect(accomSelect.options[0].value).toBe('hotel');
    expect(accomSelect.options[1].value).toBe('airbnb');
    expect(accomSelect.options[2].value).toBe('hostel');
    expect(accomSelect.options[3].value).toBe('other');
    
    // Change selection and validate
    fireEvent.change(accommodationSelect, { target: { value: 'airbnb' } });
    expect(accommodationSelect).toHaveValue('airbnb');
  });

  test('reset button clears all form fields', async () => {
    render(<TravelRequestForm />);
    
    // Fill some form fields
    fireEvent.change(screen.getByTestId('destination-input'), { target: { value: 'Tokyo' } });
    fireEvent.change(screen.getByTestId('purpose-input'), { target: { value: 'International business conference' } });
    
    // Click reset button
    fireEvent.click(screen.getByTestId('reset-button'));
    
    // Fields should be empty
    expect(screen.getByTestId('destination-input')).toHaveValue('');
    expect(screen.getByTestId('purpose-input')).toHaveValue('');
  });

  test('applies error styling to invalid fields', () => {
    render(<TravelRequestForm />);
    
    // Submit empty form to trigger validation
    fireEvent.click(screen.getByTestId('submit-button'));
    
    // Check that error styling is applied
    const destinationInput = screen.getByTestId('destination-input');
    expect(destinationInput).toHaveClass('input-error');
    
    // Fix the field and check styling is removed
    fireEvent.change(destinationInput, { target: { value: 'Paris' } });
    fireEvent.click(screen.getByTestId('submit-button'));
    
    // Should no longer have error class
    expect(destinationInput).not.toHaveClass('input-error');
  });

  test('submits the form successfully when all validations pass', async () => {
    // Mock console.log
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    
    render(<TravelRequestForm />);
    
    // Fill out the form with valid data
    fireEvent.change(screen.getByTestId('destination-input'), { target: { value: 'San Francisco' } });
    fireEvent.change(screen.getByTestId('departure-date-input'), { target: { value: '2025-06-01' } });
    fireEvent.change(screen.getByTestId('return-date-input'), { target: { value: '2025-06-10' } });
    fireEvent.change(screen.getByTestId('purpose-input'), { target: { value: 'Annual tech conference and client meetings' } });
    fireEvent.change(screen.getByTestId('cost-input'), { target: { value: '3500' } });
    
    // Submit the form
    fireEvent.click(screen.getByTestId('submit-button'));
    
    // Button should show submitting state
    expect(screen.getByTestId('submit-button')).toHaveTextContent('Submitting...');
    
    // Fast-forward time to complete the submission
    jest.advanceTimersByTime(1500);
    
    // Check if console.log was called with form values
    expect(consoleLogSpy).toHaveBeenCalledWith('Form values:', expect.objectContaining({
      destination: 'San Francisco',
      departureDate: '2025-06-01',
      returnDate: '2025-06-10'
    }));
    
    // Success message should appear
    await waitFor(() => {
      expect(screen.getByText('Travel Request Submitted Successfully!')).toBeInTheDocument();
    });
    
    // Form should reset after 3 seconds
    jest.advanceTimersByTime(3000);
    await waitFor(() => {
      expect(screen.getByTestId('destination-input')).toHaveValue('');
    });
    
    // Clean up mock
    consoleLogSpy.mockRestore();
  });

  test('shows success message and resets form after successful submission', async () => {
    render(<TravelRequestForm />);
    
    // Fill out required fields with valid data
    fireEvent.change(screen.getByTestId('destination-input'), { target: { value: 'Paris' } });
    fireEvent.change(screen.getByTestId('departure-date-input'), { target: { value: '2025-06-15' } });
    fireEvent.change(screen.getByTestId('return-date-input'), { target: { value: '2025-06-20' } });
    fireEvent.change(screen.getByTestId('purpose-input'), { target: { value: 'Business conference with partners' } });
    fireEvent.change(screen.getByTestId('cost-input'), { target: { value: '2000' } });
    
    // Submit form
    fireEvent.click(screen.getByTestId('submit-button'));
    
    // Button should be disabled during submission
    expect(screen.getByTestId('submit-button')).toBeDisabled();
    
    // Fast-forward time
    jest.advanceTimersByTime(1500);
    
    // Success message should appear
    await waitFor(() => {
      expect(screen.getByText('Travel Request Submitted Successfully!')).toBeInTheDocument();
      expect(screen.getByText('Your request has been received and is being processed.')).toBeInTheDocument();
    });
    
    // Form should not be visible when success message is shown
    expect(screen.queryByTestId('submit-button')).not.toBeInTheDocument();
    
    // After 3 seconds, form should be reset and visible again
    jest.advanceTimersByTime(3000);
    
    await waitFor(() => {
      expect(screen.getByTestId('submit-button')).toBeInTheDocument();
      expect(screen.queryByText('Travel Request Submitted Successfully!')).not.toBeInTheDocument();
    });
  });
});