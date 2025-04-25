import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AdvancedJS from './AdvancedJS'

createRoot(document.getElementById('advanced-js-root')!).render(
  <StrictMode>
    <AdvancedJS />
  </StrictMode>,
)