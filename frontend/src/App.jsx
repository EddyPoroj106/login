import { useState } from 'react'
import Login from './Login'
import Register from './Register'

export default function App() {
  const [view, setView] = useState('login') // 'login' | 'register'
  const [user, setUser] = useState(null)

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(null)
    setView('login')
  }

  if (user) {
    return (
      <div className="card">
        <h2>Bienvenido, {user}</h2>
        <p>Autenticación exitosa. Ya tienes un token guardado.</p>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    )
  }

  return view === 'login' ? (
    <Login onLoginSuccess={setUser} goToRegister={() => setView('register')} />
  ) : (
    <Register onRegisterSuccess={setUser} goToLogin={() => setView('login')} />
  )
}
