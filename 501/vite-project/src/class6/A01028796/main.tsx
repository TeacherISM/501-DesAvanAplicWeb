/** @jsxImportSource react */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./UserContext";
import Dashboard from "./Dashboard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <Dashboard />
    </UserProvider>
  </StrictMode>
);
