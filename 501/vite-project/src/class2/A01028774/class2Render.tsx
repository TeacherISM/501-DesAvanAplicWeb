import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Class2 from './class2'

createRoot(document.getElementById("class2")!).render(
  <StrictMode>
    <Class2 />
  </StrictMode>,
)
