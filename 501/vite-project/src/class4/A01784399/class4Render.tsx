/**
 * Author: Julia Maria Stephanie Duenkelsbuehler Castillo 
 * Description: This code Renders a travel request form using React.
 */


import { createRoot } from "react-dom/client";
import TravelRequestForm from "./class4";
import { StrictMode } from "react";

createRoot(document.getElementById("TravelRequestForm")!).render(
    <StrictMode>
        < TravelRequestForm />
    </StrictMode>
    );