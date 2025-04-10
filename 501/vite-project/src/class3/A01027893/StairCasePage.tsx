import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Staircase from './staircase.tsx'

createRoot(document.getElementById('staircase')!).render(
  <StrictMode>
    <Staircase />
  </StrictMode>,
)
