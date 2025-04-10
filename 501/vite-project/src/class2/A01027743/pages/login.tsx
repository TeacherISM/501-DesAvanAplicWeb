import { useState } from 'react';
import InputField from '../components/input_field';
import Button from '../components/button';
import '../styles/login.css';

const Login = () => {

  //back to menu
  const handleRedirect = () => {
    window.location.href = '/A01027743/menu.html';
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //print en la consola
  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <>
      <button className='back-to' onClick={handleRedirect}> menu </button>
      <div className="container">
        <h1>Login</h1>
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
