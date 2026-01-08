import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  // case 1
  // if no dependency array is passed in iseEffect as second parameter
  //it will be called for after every render of component
  useEffect(() => {
    console.log("use Effect called");
  });

  const { loggedInUser } = useContext(UserContext);

  // case 2
  // id empty dependency array is passed
  // it will be called for only first render of componnet

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  useEffect(() => {
    console.log("empty array passed in dependency array of use Effect");
  }, []);

  // case : 3
  // if we passed dependency array is not empty
  // then use effect will get called on change of passed varibale in dependency array
  // so it will get called on change of value btnName
  useEffect(() => {
    console.log(
      "when dependeny array is n ort empty, it will get called on change of passed local state variable"
    );
  }, [btnName]);
  const onlineLineStatus = useOnlineStatus();

  console.log("Component rerendered");
  return (
    <div className="header">
      <div className="LogoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li className="nav-item">
            Online Status: {onlineLineStatus ? "✅" : "🔴"}
          </li>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/groccery">Groccery</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="font-bold">
              Cart ({cartItems.length} items)
            </Link>
          </li>

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
          <li className="nav-item font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
