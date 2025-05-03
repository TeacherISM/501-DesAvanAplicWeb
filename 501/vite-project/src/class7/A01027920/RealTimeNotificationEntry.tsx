import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RealTimeNotifications from './RealTimeNotification'

createRoot(document.getElementById('noti-root')!).render(
  <StrictMode>
    <RealTimeNotifications />
  </StrictMode>,
)