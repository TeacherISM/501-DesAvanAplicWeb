/*
* Nicole Dávila Hernández
* A01784217
* Class 2 - Reusable components with hooks (useEffect, useState) 
*
* Nota: Para ver la implementación de los hooks useState y useEffect,
* se recomienda abrir la developer console para observar cómo se registran
* los cambios en los campos de password y username, así como la confirmación
* del formulario mock que se registra al presionar 'Submit'.
*/

import React, { useState, useEffect } from 'react';

// Reusable button component
const Button = ({ label, onClick }: { label: string; onClick: () => void }) => {
    return (
        <button
            onClick={onClick}
            style={{
                padding: '10px 20px',
                backgroundColor: 'blue',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                margin: '10px',
            }}
        >
            {label}
        </button>
    );
};

// Reusable input field component
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
            style={{
                padding: '10px',
                margin: '10px 0',
                width: '100%',
                border: '1px solid #ccc',
                borderRadius: '5px',
            }}
        />
    );
};

// Login page
const Login = ({ onBack }: { onBack: () => void }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // useEffect to log changes to username and password
    useEffect(() => {
        console.log('Username or Password changed');
        console.log('Current Username:', username);
        console.log('Current Password:', password);
    }, [username, password]); // Dependency array ensures this runs when username or password changes

    const handleSubmit = () => {
        console.log('Form Submitted');
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