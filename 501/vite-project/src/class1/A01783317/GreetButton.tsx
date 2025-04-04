import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GreetButton.css';

const GreetPage: React.FC = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleGreet = () => {
    if (name.trim()) {
      setGreeting(`Hello, ${name}! Welcome to our application.`);
    } else {
      setGreeting('Please enter your name first.');
    }
  };

  return (
    <div className="greet-page">
      <div className="greet-container">
        <h3> What is Your Name? </h3>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleGreet}>Greet Me</button>
        {greeting && <p className="greeting-message">{greeting}</p>}
        <Link to="/">
          <button>Return</button>
        </Link>
      </div>
    </div>
  );
};

export default GreetPage;