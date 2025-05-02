import { createRoot } from "react-dom/client";
import RBAC from "./RBAC.tsx";
import { StrictMode } from "react";

createRoot(document.getElementById("RBAC_Div")!).render(
    <StrictMode>
        <RBAC />
    </StrictMode>
    );