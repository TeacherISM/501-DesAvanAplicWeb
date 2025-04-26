import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SimpleFormMenu from './SimpleFormMenu'

createRoot(document.getElementById('form-menu-root')!).render(
  <StrictMode>
    <SimpleFormMenu />
  </StrictMode>,
)