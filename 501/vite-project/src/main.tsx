import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import StudentApp from './StudentApp.tsx'

// Function to decide which app to render
const shouldShowStudentApp = () => {
  // Check if hash has student-specific routes
  const hash = window.location.hash;
  return hash.includes('/class1/') || 
         hash.includes('/class2') || 
         hash.includes('/class3');
};

// Render the appropriate app based on the URL
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {shouldShowStudentApp() ? <StudentApp /> : <App />}
  </StrictMode>,
)