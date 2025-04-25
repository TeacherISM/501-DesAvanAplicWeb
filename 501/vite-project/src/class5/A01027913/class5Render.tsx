// Script to render the class1 page
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Class5 from "./class5";
import "/src/index.css";

createRoot(document.getElementById("class5Div")!).render(
  <StrictMode>
    <Class5 />
  </StrictMode>,
);
