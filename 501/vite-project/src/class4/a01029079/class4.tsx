import React from 'react';
import ReactDOM from 'react-dom/client';
import TravelRequestForm from './TravelRequestForm';
import ExpenseForm from './ExpenseForm';

const root = ReactDOM.createRoot(document.getElementById('class4')!);
root.render(
  <React.StrictMode>
    <TravelRequestForm />
    <ExpenseForm />
  </React.StrictMode>
);
