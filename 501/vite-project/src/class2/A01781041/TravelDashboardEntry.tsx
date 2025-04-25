import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TravelDashboard from './TravelDashboard'

createRoot(document.getElementById('travel-dashboard-root')!).render(
  <StrictMode>
    <TravelDashboard />
  </StrictMode>,
)