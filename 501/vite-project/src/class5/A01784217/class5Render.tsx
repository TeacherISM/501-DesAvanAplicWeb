/**
 * Author: Nicole Dávila Hernández 
 * Description: This code Renders the travel request from class 5
 */


import { createRoot } from "react-dom/client";
import TravelRequestForm from "./class5";
import { StrictMode } from "react";

createRoot(document.getElementById("formik_yup")!).render(
    <StrictMode>
        < TravelRequestForm />
    </StrictMode>
);