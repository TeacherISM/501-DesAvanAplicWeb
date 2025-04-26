import { createRoot } from 'react-dom/client'
import Class1 from './class1'
import { StrictMode } from "react";

createRoot(document.getElementById("rootc1")!).render(
  <StrictMode>
    <Class1 />
  </StrictMode>
)
