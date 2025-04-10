import React, { useState, useEffect } from 'react';
import InputField from '../../class2/A01027920/InputField';
import Button from '../../class2/A01027920/Button';
import TravelRequestForm from './TravelRequest';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [logedin, setLogin] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    // Simulate a login request
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        console.log('Login successful');
        setLogin(true);
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 1000);
  };

  if (logedin) {
    return <TravelRequestForm/>
  }
  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label={loading ? 'Loading...' : 'Submit'} onClick={handleSubmit} />
      <a href={'/A01027920/Home.html'} className='buttonlink'>Go to Home</a>
    </div>
  );
};

export default Login;