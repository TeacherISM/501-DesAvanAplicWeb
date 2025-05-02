/** @jsxImportSource react */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LoginForm from './LoginForm';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginForm />
  </StrictMode>
);
