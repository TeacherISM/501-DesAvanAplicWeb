import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Class1 from "./class1";

createRoot(document.getElementById("class1Div")!).render(
  <StrictMode>
    <Class1 />
  </StrictMode>,
);
