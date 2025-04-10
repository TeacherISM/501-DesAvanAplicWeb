import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CatGreeting from './Wellcome'

createRoot(document.getElementById('wellcome-root')!).render(
  <StrictMode>
    <CatGreeting />
  </StrictMode>,
)
