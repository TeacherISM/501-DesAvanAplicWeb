import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ES6Features from './ES6Features'

createRoot(document.getElementById('es6features-root')!).render(
  <StrictMode>
    <ES6Features />
  </StrictMode>,
)