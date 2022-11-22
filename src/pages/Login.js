import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'
import { Link } from 'react-router-dom'

const Login = (props) => {
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate(`/login/${payload.id}`)
  }

  return (
    <div>
      <h1>Hello</h1>
      <p>
        Sign in to your WhiteBoard account or{' '}
        <Link to="/Register">create an account</Link>
      </p>
      <form className="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            className="email"
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            className="password"
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            required
          />
        </div>
        <div className="button1">
          <button
            className="regButton"
            disabled={!formValues.email || !formValues.password}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
