import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from './AuthProvider'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
  
  

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/token/',
        { username, password }
      )

      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)

      console.log('Login Successful')
      setIsLoggedIn(true)
      navigate('/')

    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-6 col-lg-4 bg-dark p-4 rounded">

        <h3 className="text-center text-light mb-4">
          Login
        </h3>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control mb-3"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />

          <input
            type="password"
            id="password"
            name="password"
            className="form-control mb-3"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

          {error && <div className="alert alert-danger">{error}</div>}

          <button
            type="submit"
            className="btn btn-info w-100"
            disabled={loading}
          >
            {loading ? 'Please wait…' : 'Login'}
          </button>
        </form>

      </div>
    </div>
  )
}

export default Login
