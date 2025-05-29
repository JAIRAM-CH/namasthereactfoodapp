import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import useOnlineStatus from "../../utils/useOnlineStatus";
const TopMenu = () => {
  const { isAuthenticated, logout } = useAuth0();
  const onlineStatus = useOnlineStatus();
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>OnlineStatus : {onlineStatus ? "✔" : "❌"}</li>
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
            <li
              className="login-btn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TopMenu;
