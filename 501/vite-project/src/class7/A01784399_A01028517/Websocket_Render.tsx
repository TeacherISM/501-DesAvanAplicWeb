/**
 * Author: Julia Maria Stephanie Duenkelsbuehler Castillo 
 * 
 */


import { createRoot } from "react-dom/client";
import RealTimeNotifications from "./WebSocket";
import { StrictMode } from "react";

createRoot(document.getElementById("Websocket_Div")!).render(
    <StrictMode>
        < RealTimeNotifications />
    </StrictMode>
    );