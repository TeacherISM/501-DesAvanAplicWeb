import { createRoot } from "react-dom/client";
import Login from "./login";
import { StrictMode } from "react";

createRoot(document.getElementById("LoginDiv")!).render(
    <StrictMode>
        <Login />
    </StrictMode>
    );