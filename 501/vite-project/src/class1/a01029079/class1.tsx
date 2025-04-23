import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Music from './music.tsx'

createRoot(document.getElementById('music')!).render(
  <StrictMode>
    <Music />
  </StrictMode>,
)