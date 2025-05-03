import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TravelRequestForm from '../../class5/A01784217/class5';
import '@testing-library/jest-dom';

test('renderiza el formulario de solicitud de viaje', () => {
    render(<TravelRequestForm />);

    expect(screen.getByPlaceholderText('Introduce el país de origen')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Introduce la ciudad de origen')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Introduce el país destino')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Introduce la ciudad destino')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Seleccione la fecha de inicio')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Seleccione la fecha de fin')).toBeInTheDocument();
});

test('muestra errores cuando se intenta enviar el formulario vacío', async () => {
    render(<TravelRequestForm />);

    fireEvent.submit(screen.getByRole('button', { name: /enviar/i }));

    // Buscamos mensajes de error de manera flexible
    expect(await screen.findByText((content) => content.includes('Motivo del viaje es requerido'))).toBeInTheDocument();
    expect(await screen.findByText((content) => content.includes('Fecha de inicio es requerida'))).toBeInTheDocument();
});