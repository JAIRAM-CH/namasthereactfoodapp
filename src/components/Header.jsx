import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
const Header = () => {
  const [isloginClicked, setIsloginClicked] = useState(false);
  const handleloginclick = () => {
    setIsloginClicked(!isloginClicked);
  };

  console.log("Header component is rendered!");

  useEffect(() => {
    console.log("useEffect is rendered!");
  }, [isloginClicked]);

  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Food Items</li>
          <li>Offers</li>
          <li>About</li>
          <li>
            <i class="bi bi-cart3"></i>
          </li>

          <button className="login-btn" onClick={handleloginclick}>
            {isloginClicked ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
