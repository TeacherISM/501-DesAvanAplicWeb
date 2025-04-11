import React, { useState } from 'react';
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
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="greet-container">
        <h3>What is Your Name?</h3>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="greet-me-button" onClick={handleGreet}>Greet Me</button>
        {greeting && <p className="greeting-message">{greeting}</p>}
        
        <a href="/landing.html" className="return-link">
          <button className="return-button">Return to Home</button>
        </a>
      </div>
    </div>
  );
};

export default GreetPage;