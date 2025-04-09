import { StrictMode } from 'react';
import Users from "./class1Page";

import { createRoot } from 'react-dom/client';

const root = document.getElementById('loginRoot');
if (root) {
  createRoot(root).render(
  <StrictMode>
    <Users />
  </StrictMode>
  ,);
}