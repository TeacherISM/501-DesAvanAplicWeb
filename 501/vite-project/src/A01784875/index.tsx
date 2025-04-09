import { StrictMode } from 'react';
import Index from "./indexPage";

import { createRoot } from 'react-dom/client';

const root = document.getElementById('loginRoot');
if (root) {
  createRoot(root).render(
  <StrictMode>
    <Index />
  </StrictMode>
  ,);
}