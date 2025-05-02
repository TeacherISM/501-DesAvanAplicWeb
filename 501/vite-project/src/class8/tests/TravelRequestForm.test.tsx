import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TravelRequestForm from '../../class5/A01027913/class5';

// Mock the CSS import to avoid issues with Jest
jest.mock('/src/A01028033/styles.css', () => ({}), { virtual: true });

describe('TravelRequestForm Component', () => {
  test('renders the travel request form correctly', () => {
    render(<TravelRequestForm />);
    
    // Check if the form title is rendered
    expect(screen.getByText('Formulario de Solicitud de Viaje')).toBeInTheDocument();
    
    // Check if all form fields are rendered
    expect(screen.getByPlaceholderText('Destination')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Start Date')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('End Date')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Purpose')).toBeInTheDocument();
    
    // Check if the submit button is rendered
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  test('displays validation errors if the form is submitted with empty fields', async () => {
    render(<TravelRequestForm />);
    
    // Submit the form without filling any fields
    fireEvent.click(screen.getByText('Submit'));
    
    // Wait for validation errors to appear
    await waitFor(() => {
      expect(screen.getByText('Se necesita un destino')).toBeInTheDocument();
      expect(screen.getByText('Se necesita una fecha de inicio')).toBeInTheDocument();
      expect(screen.getByText('Se necesita una fecha de finalización')).toBeInTheDocument();
      expect(screen.getByText('Se necesita una razón de viaje')).toBeInTheDocument();
    });
  });

  test('validates that end date is after start date', async () => {
    render(<TravelRequestForm />);
    
    // Fill in the form with an end date before the start date
    fireEvent.change(screen.getByPlaceholderText('Destination'), {
      target: { value: 'New York' },
    });
    
    fireEvent.change(screen.getByPlaceholderText('Start Date'), {
      target: { value: '2025-05-10' },
    });
    
    fireEvent.change(screen.getByPlaceholderText('End Date'), {
      target: { value: '2025-05-05' },
    });
    
    fireEvent.change(screen.getByPlaceholderText('Purpose'), {
      target: { value: 'Business trip' },
    });
    
    // Submit the form
    fireEvent.click(screen.getByText('Submit'));
    
    // Check for the specific validation error about dates
    await waitFor(() => {
      expect(screen.getByText('La fecha de finalización de ser después a la fecha de inicio')).toBeInTheDocument();
    });
  });

  test('submits the form successfully with valid data', async () => {
    // Spy on console.log to check if form values are logged
    const consoleSpy = jest.spyOn(console, 'log');
    
    render(<TravelRequestForm />);
    
    // Fill in the form with valid data
    fireEvent.change(screen.getByPlaceholderText('Destination'), {
      target: { value: 'Paris' },
    });
    
    fireEvent.change(screen.getByPlaceholderText('Start Date'), {
      target: { value: '2025-06-01' },
    });
    
    fireEvent.change(screen.getByPlaceholderText('End Date'), {
      target: { value: '2025-06-10' },
    });
    
    fireEvent.change(screen.getByPlaceholderText('Purpose'), {
      target: { value: 'Vacation' },
    });
    
    // Submit the form
    fireEvent.click(screen.getByText('Submit'));
    
    // Check if handleSubmit was called with the correct values
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Travel Request:', {
        destination: 'Paris',
        startDate: '2025-06-01',
        endDate: '2025-06-10',
        purpose: 'Vacation',
      });
    });
    
    // Clean up the spy
    consoleSpy.mockRestore();
  });
});
