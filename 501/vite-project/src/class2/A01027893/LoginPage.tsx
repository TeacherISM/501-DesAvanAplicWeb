import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './login.tsx'

createRoot(document.getElementById('login')!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
