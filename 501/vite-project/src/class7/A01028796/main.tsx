/** @jsxImportSource react */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RealTimeNotifications from './WebSocket';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RealTimeNotifications />
  </StrictMode>
);
