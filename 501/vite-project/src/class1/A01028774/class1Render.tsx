import { createRoot } from 'react-dom/client'
import Class1 from './class1'
import { StrictMode } from "react";
import '../../index.css'


createRoot(document.getElementById("class1")!).render(
  <StrictMode>
    <Class1 />
  </StrictMode>
)