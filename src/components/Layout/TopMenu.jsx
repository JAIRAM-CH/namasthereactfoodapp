import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const TopMenu = () => {
  const [isloginClicked, setIsloginClicked] = useState(false);
  const handleloginclick = () => {
    setIsloginClicked(!isloginClicked);
  };

  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">
              <i class="bi bi-cart3"></i>
            </Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>

          <button className="login-btn" onClick={handleloginclick}>
            {isloginClicked ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default TopMenu;
