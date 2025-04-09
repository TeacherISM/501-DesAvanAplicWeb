import React, { useState } from 'react';
import Login from '../A01799073/pages/Login';
import Home from '../A01799073/pages/Home';


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return <div>{isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />}</div>;
};

export default App;
