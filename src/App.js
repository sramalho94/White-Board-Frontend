// import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Students from './pages/Students'
import Login from './pages/Login'
import Register from './pages/Register'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'

function App() {
  const [user, setUser] = useState()
  const [authenticated, toggleAuthenticated] = useState(false)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
  }

  return (
    <div className="App">
      <NavBar
        handleLogout={handleLogout}
        authenticated={authenticated}
        user={user}
      />
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/students" element={<Students />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
