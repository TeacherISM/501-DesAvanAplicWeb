// Script with the activities of class 1
import { useState } from "react";
import "/src/A01028033/styles.css";
import RealTimeNotifications from "./RealTimeNotifications";



const Class4 = () => {
  return (
    <div id="root">
      <h1>WebSockets for Real-Time Updates</h1>

      <section style={{ marginBottom: "40px" }}>
        <RealTimeNotifications />
      </section>

      <a href="/public/A01028033/menu/milestoneMenu.html">
        <button>Back to menu</button>
      </a>
    </div>
  );
};

export default Class4;
