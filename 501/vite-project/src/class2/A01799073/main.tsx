import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index_pruebas.css';
import App from './App_pruebas';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
