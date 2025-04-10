import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Class3 from './class3'

createRoot(document.getElementById("class2")!).render(
  <StrictMode>
    <Class3 />
  </StrictMode>,
)
