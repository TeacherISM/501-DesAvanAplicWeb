import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './login.tsx';

createRoot(document.getElementById("rootc2")!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
