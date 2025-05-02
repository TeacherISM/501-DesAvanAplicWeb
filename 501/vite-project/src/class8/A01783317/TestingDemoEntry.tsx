import React from 'react';
import ReactDOM from 'react-dom/client';
import TravelRequestForm from './components/TravelRequestForm';
import '../../index.css';

ReactDOM.createRoot(document.getElementById('testing-demo-root')!).render(
  <React.StrictMode>
    <TravelRequestForm />
  </React.StrictMode>,
);
