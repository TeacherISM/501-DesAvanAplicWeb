import React, { useState } from 'react';

// componente reutilizable de botón
const Button = ({ label, onClick }: { label: string; onClick: () => void }) => {
    return (
        <button
            onClick={onClick}
            style={{ padding: '10px 20px',
                     backgroundColor: 'blue', 
                     color: 'white', 
                     border: 'none', 
                     borderRadius: '5px',
                     margin: '10px'
            }}
        >
            {label}
        </button>
    );
};

// componente reutilizable de campo de entrada
const InputField = ({
    type,
    placeholder,
    value,
    onChange,
}: {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={{ padding: '10px', margin: '10px 0', width: '100%', border: '1px solid #ccc', borderRadius: '5px' }}
        />
    );
};

// página de login
const Login = ({ onBack }: { onBack: () => void }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div style={{ width: '300px', margin: '50px auto', textAlign: 'center' }}>
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
            <div style={{ marginTop: '20px' }}>
                <Button label="Back to Home" onClick={onBack} />
            </div>
        </div>
    );
};

export { Button, InputField, Login };