import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './NewLogin'

createRoot(document.getElementById('login-root')!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
