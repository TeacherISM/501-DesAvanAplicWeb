import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginDashboard from './LoginDashboard'

createRoot(document.getElementById('login-dashboard-root')!).render(
  <StrictMode>
    <LoginDashboard />
  </StrictMode>,
)