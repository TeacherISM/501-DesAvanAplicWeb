/** @jsxImportSource react */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TravelRequestForm from "./TravelRequestForm";
import ExpenseForm from "./ExpenseForm";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <TravelRequestForm />
      <hr style={{ margin: "3rem 0" }} />
      <ExpenseForm />
      <button
        onClick={() => (window.location.href = "/A01028796/menu.html")}
        style={{
          marginTop: "2rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          backgroundColor: "#e5e7eb",
          border: "1px solid #d1d5db",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Volver al menú
      </button>
    </div>
  </StrictMode>
);
