import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import useOnlineStatus from "../../utils/useOnlineStatus";
const TopMenu = () => {
  const { isAuthenticated, logout } = useAuth0();
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-28" src={Logo} alt="Logo" />
      </div>
      <div className="flex items-center ">
        <ul className="flex mr-4 list-none">
          <li className="px-2">OnlineStatus : {onlineStatus ? "✔" : "❌"}</li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 ">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">
              <i className="bi bi-cart3"></i>
            </Link>
          </li>

          {isAuthenticated && (
            <li
              className="login-btn px-2"
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
