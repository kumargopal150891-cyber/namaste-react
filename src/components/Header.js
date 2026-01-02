import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="LogoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">About us</li>{" "}
          <li className="nav-item">Contact us</li>{" "}
          <li className="nav-item">Cart</li>
          <li>
            <button
              type="button"
              onClick={() => {
                btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
              }}
              className="btn btn-outline-info btn-sm"
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
