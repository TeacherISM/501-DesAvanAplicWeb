import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Button from './components/Button';

const App = () => {
  return (
    <Router>
      <div id="root">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Welcome to the Main Page</h1>
                <Link to="/login">
                  <Button label="Go to Login" />
                </Link>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;