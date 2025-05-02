import { useState } from "react";
import { UserProvider } from "../../class6/A01799073/UserContext";

import Button from "../../class2/A01799073/components/Buttons";
import GuessGame from "../../class1/A01799073/GuessGame";
import Login from "../../class2/A01799073/Login";
import LoginPage from "../../class3/A01799073/LoginPage";
import TravelRequestForm from "./TravelRequestForm";
import Home from "../../class2/A01799073/Home";
import Clase4 from "../../class4/A01799073/Clase4";
import TravelRequestForm_yup from "../../class5/A01799073/TravelRequestForm_yup";
import MockLogin from "../../class6/A01799073/MockLogin";
import Dashboard from "../../class6/A01799073/Dashboard";
import Clase7 from "../../class7/A01799073/Class7";
import Clase8 from "../../class8/A01799073/Class8";


import "./styles/neonstyle.css";
import BackToMenu from "./components/BackMenu";

function Menu() {
  const [selectedClass, setSelectedClass] = useState('');
  const [showHome, setShowHome] = useState(false);
  const [loginPageStep, setLoginPageStep] = useState<'login' | 'travel' | 'home'>('login');

  if (showHome) return <Home />;

  if (selectedClass === 'clase_1') return <GuessGame />;
  if (selectedClass === 'clase_2') return <Login onLogin={() => setShowHome(true)} />;
  if (selectedClass === 'clase_3') {
    if (loginPageStep === 'login') return <LoginPage onSuccess={() => setLoginPageStep('travel')} />;
    if (loginPageStep === 'travel') return <TravelRequestForm onSuccess={() => setLoginPageStep('home')} />;
    if (loginPageStep === 'home') return <Home />;
  }
  if (selectedClass === 'clase_4') return <Clase4 />;
  if (selectedClass === 'clase_5') return <TravelRequestForm_yup />;
  if (selectedClass === "clase_6") {
    return (
      <UserProvider>
        <MockLogin />
        <Dashboard />
        <BackToMenu />
      </UserProvider>
    );
  }

  if (selectedClass === 'clase_7') return <Clase7 />;
  if (selectedClass === 'clase_8') return <Clase8 />;

  return (
    <div className="menu-container">
      <h1 className="menu-title">💻Desarrollo avanzado de aplicaciones Web</h1>
      <p className="menu-description">🌟 Selecciona una clase para ver su contenido:</p>
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "2rem" }}>

        {/* Milestone 1 */}
        <div style={{ background: "#222", borderRadius: "1rem", padding: "1.5rem", minWidth: "200px" }}>
          <h2 style={{ color: "#f20044bb", fontWeight: "bold" }}>Milestone 1</h2>
          <ul className="menu-list">
            <li><Button label="💻 Clase 1" onClick={() => setSelectedClass('clase_1')} /></li>
            <li><Button label="💻 Clase 2" onClick={() => setSelectedClass('clase_2')} /></li>
            <li><Button label="💻 Clase 3" onClick={() => setSelectedClass('clase_3')} /></li>
          </ul>
        </div>

        {/* Milestone 2 */}
        <div style={{ background: "#222", borderRadius: "1rem", padding: "1.5rem", minWidth: "200px" }}>
          <h2 style={{ color: "#f20044bb", fontWeight: "bold" }}>Milestone 2</h2>
          <ul className="menu-list">
            <li><Button label="💻 Clase 4" onClick={() => setSelectedClass('clase_4')} /></li>
            <li><Button label="💻 Clase 5" onClick={() => setSelectedClass('clase_5')} /></li>
            <li><Button label="💻 Clase 6" onClick={() => setSelectedClass('clase_6')} /></li>
          </ul>
        </div>

        {/* Milestone 3 */}
        <div style={{ background: "#222", borderRadius: "1rem", padding: "1.5rem", minWidth: "200px" }}>
          <h2 style={{ color: "#f20044bb", fontWeight: "bold" }}>Milestone 3</h2>
          <ul className="menu-list">
            <li><Button label="💻 Clase 7 (Servidor)" onClick={() => setSelectedClass('clase_7')} /></li>
            <li><Button label="💻 Clase 8 (Pruebas)" onClick={() => setSelectedClass('clase_8')} /></li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Menu;
