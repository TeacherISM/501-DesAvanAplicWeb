// Script to render the class1 page
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Class1 from "./class1";
import "/src/index.css";

createRoot(document.getElementById("class1Div")!).render(
  <StrictMode>
    <Class1 />
  </StrictMode>,
);
