import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './loginPage'
import TravelRequestForm from './travelRequest'

createRoot(document.getElementById('class3')!).render(
  <StrictMode>
    <LoginPage/>
    <TravelRequestForm/>
  </StrictMode>
)