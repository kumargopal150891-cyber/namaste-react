import Header from "./Header";
import Body from "./Body";
import Contact from "./Contact";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
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
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="container">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default AppLayout;
