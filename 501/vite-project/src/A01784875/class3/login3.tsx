import { StrictMode } from 'react';
import Login from "./login3Page";

import { createRoot } from 'react-dom/client';

const root = document.getElementById('loginRoot');
if (root) {
  createRoot(root).render(
  <StrictMode>
    <Login />
  </StrictMode>
  ,);
}