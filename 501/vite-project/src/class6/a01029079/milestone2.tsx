import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Milestone2Menu from './milestone2Menu'

createRoot(document.getElementById('milestone2')!).render(
  <StrictMode>
    <Milestone2Menu />
  </StrictMode>,
)
