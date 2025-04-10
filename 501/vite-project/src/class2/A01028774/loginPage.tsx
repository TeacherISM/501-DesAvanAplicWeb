import React, { useState } from "react";
import InputField from "./inputFile";
import Button from "./button";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  // Manejo de cambios con destructuring
  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Username:", formData.username);
    console.log("Password:", formData.password);
    alert("Login successful!");
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        Nombre:<InputField type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
      </div>
      <div>
        Contraseña:<InputField type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      </div>
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default Login;




// import React, { useState } from 'react';
// import InputField from './components/InputField';
// import Button from './components/Button';

// const Login: React.FC = () => {
//   const [username, setUsername] = useState<string>('');
//   const [password, setPassword] = useState<string>('');

//   const handleSubmit = () => {
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <InputField
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
//       />
//       <InputField
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
//       />
//       <Button label="Submit" onClick={handleSubmit} />
//     </div>
//   );
// };

// export default Login;
