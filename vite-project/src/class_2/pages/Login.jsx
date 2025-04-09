import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Login = ({onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (username && password) {
    console.log('Username:', username);
    console.log('Password:', password);
    onLogin();
    }else {
        alert('Por favor, rellene los campos disponibles');
    }   
  };

  return (
    <div style= {{padding: '20px'}}>
      <div className='login-container'>
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
   </div>
      
  );
};

export default Login;