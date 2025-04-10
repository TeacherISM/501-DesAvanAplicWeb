import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Implementation from './implementation.tsx'

createRoot(document.getElementById('implementation')!).render(
  <StrictMode>
    <Implementation />
  </StrictMode>,
)
