/** @jsxImportSource react */
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Dashboard() {
  const { user, login } = useContext(UserContext);

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Dashboard</h1>

      <div style={{ margin: "1rem 0" }}>
        <label htmlFor="role">Selecciona un rol:</label>{" "}
        <select
          id="role"
          onChange={(e) => login(e.target.value as "employee" | "manager" | "admin")}
          value={user.role}
          style={{ padding: "0.5rem", marginLeft: "0.5rem" }}
        >
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {user.role === "employee" && (
        <div>
          <h2>Employee View</h2>
          <p>Puedes enviar solicitudes de viaje y costos.</p>
        </div>
      )}
      {user.role === "manager" && (
        <div>
          <h2>Manager View</h2>
          <p>Puedes aprobar o rechazar solicitudes en general.</p>
        </div>
      )}
      {user.role === "admin" && (
        <div>
          <h2>Admin View</h2>
          <p>Puedes administrar usuarios y revisar el log.</p>
        </div>
      )}

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
  );
}
