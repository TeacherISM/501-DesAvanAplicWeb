import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AreYouAShrimp from './Class1Component'

createRoot(document.getElementById('class1')!).render(
  <StrictMode>
    <AreYouAShrimp/>
  </StrictMode>
)

