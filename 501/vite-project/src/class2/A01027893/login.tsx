import { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (username && password) {
      setShowPopup(true)

      setTimeout(() => {
        setShowPopup(false)
      }, 3000)
    }
  }

  return (
    <div className="login-container">
      <button className="back-button">
        <a href="http://localhost:5173/">Back Home</a>
      </button>

      <h1>Login</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>

      {showPopup && (
        <div className="popup">
          SE MOSTRARÍA UN MENSAJE DE BIENVENIDA SUPER TOP
        </div>
      )}
    </div>
  )
}

export default Login
