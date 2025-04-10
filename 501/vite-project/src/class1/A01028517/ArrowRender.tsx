import { createRoot } from "react-dom/client";
import Arrow_and_Deconstructing from "./Arrow";
import { StrictMode } from "react";

createRoot(document.getElementById("ArrowDiv")!).render(
    <StrictMode>
        <Arrow_and_Deconstructing />
    </StrictMode>
    );