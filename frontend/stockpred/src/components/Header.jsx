import Button from "./Button"
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <nav className="navbar bg-dark px-4 d-flex justify-content-between align-items-center">
      <Link className="navbar-brand text-light" to="/">
        Stock Prediction Portal
      </Link>

      <div className="d-flex gap-3">
        <Button text="Login" class="btn-outline-info"/>
        <Button text="Register" class="btn-info"/>
      </div>
    </nav>
  )
}

export default Header
