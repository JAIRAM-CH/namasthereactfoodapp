import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const TopMenu = () => {
  const { isAuthenticated, logout } = useAuth0();
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
              <i className="bi bi-cart3"></i>
            </Link>
          </li>

          {isAuthenticated && (
            <button
              className="login-btn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TopMenu;
