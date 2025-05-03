import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TravelRequestForm from './TravelRequestForm'

createRoot(document.getElementById('login-root')!).render(
  <StrictMode>
    <TravelRequestForm />
  </StrictMode>,
)