import { test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import TravelRequestForm from '../components/TravelRequestForm';

test('renders the travel request form', () => {
  const { getByPlaceholderText } = render(<TravelRequestForm />);
  expect(getByPlaceholderText('Destination')).toBeInTheDocument();
  expect(getByPlaceholderText('Start Date')).toBeInTheDocument();
  expect(getByPlaceholderText('End Date')).toBeInTheDocument();
  expect(getByPlaceholderText('Purpose')).toBeInTheDocument();
});

test('displays validation errors if the form is submitted with invalid data', async () => {
  const { getByText, findByText } = render(<TravelRequestForm />);
  fireEvent.click(getByText('Submit'));

  expect(await findByText('Destination is required')).toBeInTheDocument();
  expect(await findByText('Start date is required')).toBeInTheDocument();
  expect(await findByText('End date is required')).toBeInTheDocument();
  expect(await findByText('Purpose is required')).toBeInTheDocument();
});
