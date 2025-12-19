import { useState } from 'react'
import axios from 'axios'

const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)


  const handleRegistration = async (e) => {
    e.preventDefault()
    setLoading(true);
    const userData = {
      username,
      email,
      password,
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/register/',
        userData
      )

      console.log('response.data =>', response.data)
      console.log('Registration is successful')
      setErrors({})
      setSuccess(true)

    } catch (error) {
      console.error(
        'Registration Error',
        error.response?.data || error.message
      )
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100 justify-content-center">
        <div className="col-md-6 col-lg-4 bg-dark p-4 rounded">

          <h3 className="text-center text-light mb-4">
            Create Account
          </h3>

          <form onSubmit={handleRegistration}>

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
            <small>
              {errors.username &&<div className='text-danger'>{errors.username}</div>}
            </small>

            <input
              type="email"
              id="email"
              name="email"
              className="form-control mb-3"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />

            <input
              type="password"
              id="password"
              name="password"
              className="form-control mb-4"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />

              {success && <div className='alert alert-success'>Registration Successful</div>}
              {loading ? ( <button
              type="submit"
              className="btn btn-info w-100"
              disabled
            >
              Please Wait ......
            </button>) :  <button
              type="submit"
              className="btn btn-info w-100"
            >
              Register
            </button> }

           

          </form>

        </div>
      </div>
    </div>
  )
}

export default Register
