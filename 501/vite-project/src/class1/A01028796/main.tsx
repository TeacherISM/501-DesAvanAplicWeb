/** @jsxImportSource react */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ArrowExample from './ArrowExample.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ArrowExample />
  </StrictMode>
);
