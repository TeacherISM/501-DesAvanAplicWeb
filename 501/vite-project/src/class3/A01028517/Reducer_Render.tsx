import { createRoot } from "react-dom/client";
import Reducer from "./Reducer";
import { StrictMode } from "react";

createRoot(document.getElementById("ReducerDiv")!).render(
    <StrictMode>
        <Reducer />
    </StrictMode>
    );

    