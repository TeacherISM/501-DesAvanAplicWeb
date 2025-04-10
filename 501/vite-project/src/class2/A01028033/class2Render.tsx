// Script to render the Class2 page
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./pages/Login";
// import "/src/index.css";

createRoot(document.getElementById("class2Div")!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
);
