import { useState, useEffect } from 'react';
import InputField from '../../../class2/A01027743/components/input_field';
import Button from '../../../class2/A01027743/components/button';
import '../styles/login.css';

const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  //handle errors
  const [error, setError] = useState('');

  // useEffect to load the username from localStorage when the component mounts
  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername); 
    }
  }, []); 

  // validate the username and password
  const handleSubmit = () => {
    if (!username || !password) {
      setError('missing username or password');
      return;
    }

    console.log('Username:', username);
    console.log('Password:', password);
    
    //store the username in localStorage
    localStorage.setItem('username', username);

    setError(''); // Clear error message if fields are filled
    // go back to the menu
    window.location.href = '/A01027743/menu.html';
  };

  return (
    <>
      <button className='back-to' onClick={() => window.location.href = '/A01027743/menu.html'}>menu</button>
      <div className="container">
        <h1>Login</h1>
        
        {error && <div className="error-message">{error}</div>}

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
        
        <Button label="Submit" onClick={handleSubmit} />
      </div>
    </>
  );
};

export default Login;
