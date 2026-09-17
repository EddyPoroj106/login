import { useState } from 'react'
import api from './api'

export default function Register({ onRegisterSuccess, goToLogin }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await api.post('/register/', { username, email, password })
      localStorage.setItem('token', res.data.token)
      onRegisterSuccess(res.data.username)
    } catch (err) {
      if (err.response && err.response.data) {
        const data = err.response.data
        const primerError = Object.values(data)[0]
        setError(Array.isArray(primerError) ? primerError[0] : String(primerError))
      } else {
        setError('No se pudo conectar con el servidor.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card">
      <h2>Crear cuenta</h2>
      <form onSubmit={handleSubmit}>
        <label>Usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Correo</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Creando...' : 'Registrarme'}
        </button>
      </form>

      <p className="link" onClick={goToLogin}>
        ¿Ya tienes cuenta? Inicia sesión
      </p>
    </div>
  )
}
