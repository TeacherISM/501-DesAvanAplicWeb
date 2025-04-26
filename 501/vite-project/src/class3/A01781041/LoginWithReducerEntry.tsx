import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginWithReducer from './LoginWithReducer'

createRoot(document.getElementById('login-with-reducer-root')!).render(
  <StrictMode>
    <LoginWithReducer />
  </StrictMode>,
)