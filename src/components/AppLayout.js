import Header from "./Header";
import Body from "./Body";
import Contact from "./Contact";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
const AppLayout = () => {
  const [userName, setUserName] = useState();
  // authentication logic

  useEffect(() => {
    // make api call
    const data = {
      name: "Gopal kumar",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

export default AppLayout;
