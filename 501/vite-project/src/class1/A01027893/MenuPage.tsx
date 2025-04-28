import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from './menu.tsx'

createRoot(document.getElementById('menu')!).render(
  <StrictMode>
    <Menu />
  </StrictMode>,
)
