import React, { useState } from 'react';
import Login from './class_2/pages/Login';
import Home from './class_2/pages/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
