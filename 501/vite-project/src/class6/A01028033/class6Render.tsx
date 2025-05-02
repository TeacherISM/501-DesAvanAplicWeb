// Script to render the class6 page
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Class6 from "./class6";
import "/src/index.css";

createRoot(document.getElementById("class6Div")!).render(
  <StrictMode>
    <Class6 />
  </StrictMode>,
);
