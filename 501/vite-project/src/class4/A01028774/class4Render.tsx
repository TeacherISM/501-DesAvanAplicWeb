// Script to render the class1 page
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Class4 from "./class4";
import "/src/index.css";

createRoot(document.getElementById("class4Div")!).render(
  <StrictMode>
    <Class4 />
  </StrictMode>,
);
