import { useState } from "react";
import FieldInput from "./inputField";
import Boton from "./boton";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log('Username: ', username);
        console.log('Password: ', password);
        alert('Login successful!');
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <FieldInput
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <FieldInput
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Boton
                label="Submit"
                onClick={handleSubmit}
            />
            <div className="menu-link-container">
                <a href="./Menu.html" className="menu-link">Menu</a>
            </div>
        </div>
    );
};

export default Login;
