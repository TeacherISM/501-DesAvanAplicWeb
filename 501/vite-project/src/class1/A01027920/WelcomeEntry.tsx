import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CatGreeting from './Welcome'

createRoot(document.getElementById('welcome-root')!).render(
  <StrictMode>
    <CatGreeting />
  </StrictMode>,
)
