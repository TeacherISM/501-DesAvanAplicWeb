import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from './new_Menu'

createRoot(document.getElementById('new_home')!).render(
  <StrictMode>
    <Menu />
  </StrictMode>,
)