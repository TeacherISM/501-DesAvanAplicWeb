import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './login'

createRoot(document.getElementById('class2')!).render(
  <StrictMode>
    <Login/>
  </StrictMode>
)