import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TravelRequestForm from '../components/TravelRequestForm';

test('renders the travel request form', () => {
  const { getByLabelText } = render(<TravelRequestForm />);
  expect(getByLabelText('Destination')).toBeInTheDocument();
  expect(getByLabelText('Start Date')).toBeInTheDocument();
  expect(getByLabelText('End Date')).toBeInTheDocument();
  expect(getByLabelText('Purpose')).toBeInTheDocument();
});

test('displays validation errors if the form is submitted with invalid data', () => {
  const { getByText, getByLabelText } = render(<TravelRequestForm />);
  fireEvent.submit(getByText('Submit'));
  expect(getByText('Destination is required')).toBeInTheDocument();
  expect(getByText('Start date is required')).toBeInTheDocument();
  expect(getByText('End date is required')).toBeInTheDocument();
  expect(getByText('Purpose is required')).toBeInTheDocument();
});
