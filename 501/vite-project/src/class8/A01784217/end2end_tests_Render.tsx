/**
 * Author: Nicole Dávila Hernández 
 * Description: This code Renders the RBAC login system with Cypress implementation from class 8
 */

import { createRoot } from "react-dom/client";
import RBAC from "./end2end_tests.tsx";
import { StrictMode } from "react";

createRoot(document.getElementById("end2end_tests")!).render(
    <StrictMode>
        <RBAC />
    </StrictMode>
    );