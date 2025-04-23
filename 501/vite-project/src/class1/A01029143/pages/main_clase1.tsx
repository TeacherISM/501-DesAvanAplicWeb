import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Clase1 from '../components/Clase1';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Clase1 />
  </StrictMode>
)
