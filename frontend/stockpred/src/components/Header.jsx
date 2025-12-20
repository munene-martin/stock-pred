import Button from "./Button"
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "./AuthProvider"
import { useContext } from "react"

const Header = () => {
const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
const navigate = useNavigate();

const handleLogout = () =>{
  localStorage.removeItem("accessToken")
  localStorage.removeItem("refreshToken")
  setIsLoggedIn(false)
  navigate("/login")
}
  return (
    <nav className="navbar bg-dark px-4 d-flex justify-content-between align-items-center">
      <Link className="navbar-brand text-light" to="/">
        Stock Prediction Portal
      </Link>

      <div className="d-flex gap-3"> 
        {isLoggedIn ? ( <button className="btn btn-danger" onClick={handleLogout}>Logout</button>)
        : 
        (
          <>
          <Button text="Login" class="btn-outline-info"/>
          &nbsp;
        <Button text="Register" class="btn-info"/>
        </>
        )}
        
      </div>
    </nav>
  )
}

export default Header
