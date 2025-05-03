import React, { useState } from "react";
import TravelRequestForm from "../../class3/A01799073/TravelRequestForm";
import BackToMenu from '../../class3/A01799073/components/BackMenu';
import ExpenseForm from "./ExpenseForm";
import TravelRequestFetcher from "./TravelRequestFetcher";

const Clase4: React.FC = () => {
  const [show, setShow] = useState<"travel" | "expense" | "fetcher" | null>(null);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Clase 4: Formularios y Render Props</h1>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
        <button onClick={() => setShow("travel")}>Travel Request Form</button>
        <button onClick={() => setShow("expense")}>Expense Form</button>
        <button onClick={() => setShow("fetcher")}>Lista de Requests (Render Props)</button>
      </div>
      {show === "travel" && <TravelRequestForm onSuccess={function (): void {
              throw new Error("Function not implemented.");
          } } />}
      {show === "expense" && <ExpenseForm />}
      {show === "fetcher" && (
        <TravelRequestFetcher
          render={({ travelRequests, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <ul>
                {travelRequests.map((req) => (
                  <li key={req.id}>{req.destination} ({req.purpose})</li>
                ))}
              </ul>
            );
          }}
        />
      )}
      <BackToMenu/>
    </div>
  );
};

export default Clase4;
