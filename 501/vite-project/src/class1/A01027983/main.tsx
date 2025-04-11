import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Class1 from './Class1'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Class1 />
  </StrictMode>,
)
