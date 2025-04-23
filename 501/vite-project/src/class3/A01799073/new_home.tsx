import { useState } from "react";
import Button from "../../class2/A01799073/components/Buttons";

import GuessGame from "../../class1/A01799073/GuessGame";
import Login from "../../class2/A01799073/Login";
import LoginPage from "../../class3/A01799073/LoginPage";

import "./Styles/menu.css";

function Menu() {
  const [selectedClass, setSelectedClass] = useState('');

  if (selectedClass === 'clase_1') return <GuessGame />;
  if (selectedClass === 'clase_2') return <Login/>;
  if (selectedClass === 'clase_3') return <LoginPage/>;

  return (
    <div className="menu-container">
      <h1 className="menu-title">Menu</h1>
      <ul className="menu-list">
        <li>
          <Button label="Clase 1" onClick={() => setSelectedClass('clase_1')} />
        </li>
        <li>
          <Button label="Clase 2" onClick={() => setSelectedClass('clase_2')} />
        </li>
        <li>
          <Button label="Clase 3" onClick={() => setSelectedClass('clase_3')} />
        </li>
      </ul>
    </div>
  );
}

export default Menu;