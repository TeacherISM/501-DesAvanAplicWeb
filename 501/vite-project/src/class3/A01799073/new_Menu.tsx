import { useState } from "react";
import Button from "../../class2/A01799073/components/Buttons";
import GuessGame from "../../class1/A01799073/GuessGame";
import Login from "../../class2/A01799073/Login";
import LoginPage from "../../class3/A01799073/LoginPage";
import TravelRequestForm from "./TravelRequest";
import Home from "../../class2/A01799073/Home";

import "./styles/neonstyle.css";

function Menu() {
  const [selectedClass, setSelectedClass] = useState('');
  const [showHome, setShowHome] = useState(false);

  const [loginPageStep, setLoginPageStep] = useState<'login' | 'travel' | 'home'>('login');

  if (showHome) return <Home />;

  if (selectedClass === 'clase_1') return <GuessGame />;
  if (selectedClass === 'clase_2') return <Login onLogin={() => setShowHome(true)} />;
  if (selectedClass === 'clase_3') {
    if (loginPageStep === 'login')
      return <LoginPage onSuccess={() => setLoginPageStep('travel')} />;
    if (loginPageStep === 'travel')
      return <TravelRequestForm onSuccess={() => setLoginPageStep('home')} />;
    if (loginPageStep === 'home')
      return <Home />;
  }
  

  return (
    <div className="menu-container">
      <h1 className="menu-title">💻Desarrollo avanzado de aplicaciones Web</h1>
      <p className="menu-description">🌟 Selecciona una clase para ver su contenido:</p>
      <ul className="menu-list">
        <li>
          <Button label="💻 Clase 1" onClick={() => setSelectedClass('clase_1')} />
        </li>
        <li>
          <Button label="💻 Clase 2" onClick={() => setSelectedClass('clase_2')} />
        </li>
        <li>
          <Button label="💻 Clase 3" onClick={() => setSelectedClass('clase_3')} />
        </li>
      </ul>
    </div>
  );
}

export default Menu;