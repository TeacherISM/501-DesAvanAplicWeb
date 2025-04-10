import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Arrow from './arrow.tsx'

createRoot(document.getElementById('arrow')!).render(
  <StrictMode>
    <Arrow />
  </StrictMode>,
)
