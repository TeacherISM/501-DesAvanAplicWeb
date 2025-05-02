import { useState } from "react";
import Class4 from "../../class4/A01028889/class4";
import Class5 from "../../class5/A01028889/class5";
import Class6 from "../../class6/A01028889/class6";
import Button from "../../class2/A01028889/button";

import './Styles/class.css';
import "./Styles/menu.css";

function Milestone2Menu() {
  const [selectedClass, setSelectedClass] = useState('');
  if (selectedClass === 'class4') return <Class4 />;
  if (selectedClass === 'class5') return <Class5 />;
  if (selectedClass === 'class6') return <Class6 />;

  return (
    <div className="menu-container">
      <h1 className="menu-title">Milestone 2</h1>
      <h3 className="Participants">A01028889 - A01029079</h3>
      <ul className="menu-list">
        <li>
          <Button label="Go Class 4" onClick={() => setSelectedClass('class4')} />
        </li>
        <li>
          <Button label="Go Class 5" onClick={() => setSelectedClass('class5')} />
        </li>
        <li>
          <Button label="Go Class 6" onClick={() => setSelectedClass('class6')} />
        </li>
      </ul>
      <a href="/src/A01028889/home.html" className="class-button-link">
        Go to A01028889's Milestones Menu
      </a>
    </div>
  );
}

export default Milestone2Menu;
