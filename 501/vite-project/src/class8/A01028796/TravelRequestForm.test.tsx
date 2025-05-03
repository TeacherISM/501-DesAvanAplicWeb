import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TravelRequestForm from '../../class4/A01028796/TravelRequestForm';

describe('TravelRequestForm', () => {
  test('renderiza todos los campos del formulario', () => {
    const { getByPlaceholderText } = render(<TravelRequestForm />);

    expect(getByPlaceholderText('Destination')).toBeInTheDocument();
    expect(getByPlaceholderText('Start Date')).toBeInTheDocument();
    expect(getByPlaceholderText('End Date')).toBeInTheDocument();
    expect(getByPlaceholderText('Purpose')).toBeInTheDocument();
  });

  test('muestra errores si se envia vacio', async () => {
    const { getByText, findByText } = render(<TravelRequestForm />);
    
    const submitButton = getByText(/submit/i);
    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);

    expect(await findByText('Destination is required')).toBeInTheDocument();
    expect(await findByText('Start date is required')).toBeInTheDocument();
    expect(await findByText('End date is required')).toBeInTheDocument();
    expect(await findByText('Purpose is required')).toBeInTheDocument();
  });
});
