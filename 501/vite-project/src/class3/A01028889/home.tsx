import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from './menu'

createRoot(document.getElementById('home')!).render(
  <StrictMode>
    <Menu />
  </StrictMode>,
)
