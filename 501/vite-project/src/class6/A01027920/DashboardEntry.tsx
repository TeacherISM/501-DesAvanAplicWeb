import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DashboardWrapper from './DashboardWrapper'

createRoot(document.getElementById('login-root')!).render(
  <StrictMode>
    <DashboardWrapper />
  </StrictMode>,
)