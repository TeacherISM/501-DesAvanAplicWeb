// Script to render the class3 page
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Class3 from "./class3";
import "/src/index.css";

createRoot(document.getElementById("class3Div")!).render(
  <StrictMode>
    <Class3 />
  </StrictMode>,
);
