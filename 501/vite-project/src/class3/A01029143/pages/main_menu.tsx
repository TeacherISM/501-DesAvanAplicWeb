import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Menu from './../components/Menu';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Menu />
  </StrictMode>
)
