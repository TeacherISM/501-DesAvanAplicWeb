import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Login from './Pages/log_in'

createRoot(document.getElementById('login')!).render(
  <StrictMode>
    <Login/>
  </StrictMode>,
)
