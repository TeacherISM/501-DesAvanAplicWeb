import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { LoginProps } from '../types/common';

const Login: React.FC<LoginProps> = ({ GoBack, onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
        onLoginSuccess();
    };

    const isFormValid = username.trim() !== '' && password.trim() !== '';

    return (
        <div style={{ width: '300px', margin: '50px auto', textAlign: 'center' }}>
           
            <InputField
                type="text"
                placeholder="Username Here"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <InputField
                type="password"
                placeholder="Password Here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button label="Enter" onClick={handleLogin} disabled={!isFormValid} />
            <div style={{ marginTop: '20px' }}>
                <Button label="Back" onClick={GoBack} />
            </div>
        </div>
    );
};

export default Login;
