import Button from "./Button"

const Header = () => {
  return (
    <nav className="navbar bg-dark px-4 d-flex justify-content-between align-items-center">
      <a className="navbar-brand text-light" href="#">
        Stock Prediction Portal
      </a>

      <div className="d-flex gap-3">
        <Button text="Login" class="btn-outline-info"/>
        <Button text="Register" class="btn-info"/>
      </div>
    </nav>
  )
}

export default Header
