// Script with the activities of class 1
import { useState } from "react";
import "/src/A01028033/styles.css";
import TravelRequestForm from "./components/1_1";
import ExpenseForm from "./components/1_2";

const Class4 = () => {
  return (
    <div id="root">
      <h1>Class 4 (Build Forms for Travel Requests and Expense Submissions)</h1>

      <section style={{ marginBottom: "40px" }}>
        <h2>1.1 TravelRequestForm</h2>
        <p>Formulario de viaje.</p>
        <TravelRequestForm />
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>1.2. ExpenseForm</h2>
        <p>FOrmulario de gastos.</p>
        <ExpenseForm  />
      </section>

      <a href="/public/A01028033/menu/milestoneMenu.html">
        <button>Back to menu</button>
      </a>
    </div>
  );
};

export default Class4;
