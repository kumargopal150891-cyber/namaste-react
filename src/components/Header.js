import { LOGO_URL } from "../utils/constant";
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
