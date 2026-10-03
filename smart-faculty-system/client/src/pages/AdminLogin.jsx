import { useState } from 'react'
import { loginAdmin, registerAdmin } from '../services/facultyApi.js'

export default function AdminLogin({ onLogin }) {
  const [mode, setMode] = useState('login')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    if (!username.trim()) {
      setError('Username is required')
      return
    }

    if (!password.trim() || password.trim().length < 4) {
      setError('Password must be at least 4 characters')
      return
    }

    setLoading(true)
    setError('')

    try {
      const request = mode === 'register' ? registerAdmin : loginAdmin
      const response = await request({ username: username.trim(), password: password.trim() })
      onLogin(response)
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="page-section login-section">
      <div className="login-panel">
        <p className="eyebrow">Administrator access</p>
        <h2>{mode === 'login' ? 'Admin login' : 'Create admin account'}</h2>
        <p className="section-description">Create your admin username and password, then login to add faculty members.</p>

        <div className="toggle-group" aria-label="Admin authentication mode">
          <button
            type="button"
            className={mode === 'login' ? 'toggle-button toggle-button--active' : 'toggle-button'}
            onClick={() => setMode('login')}
          >
            Login
          </button>
          <button
            type="button"
            className={mode === 'register' ? 'toggle-button toggle-button--active' : 'toggle-button'}
            onClick={() => setMode('register')}
          >
            Register
          </button>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter admin username"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              required
            />
          </label>

          {error && <p className="message message--error">{error}</p>}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Please wait...' : mode === 'login' ? 'Admin login' : 'Register admin'}
          </button>
        </form>
      </div>
    </section>
  )
}
