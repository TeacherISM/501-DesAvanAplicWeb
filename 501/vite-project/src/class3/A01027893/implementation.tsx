import { useState } from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

  return (
    <>
    <div>
        <button>
          <a href="http://localhost:5173/index.html" className="menu-button">
            Back Home
          </a>
        </button>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
        e.preventDefault()
        }}
      >
        <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  )
}

export default Login
