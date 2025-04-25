import { createRoot } from "react-dom/client";
import ExpenseForm from "./ExpenseForm";
import { StrictMode } from "react";

createRoot(document.getElementById("ExpenseForm")!).render(
    <StrictMode>
        < ExpenseForm />
    </StrictMode>
    );