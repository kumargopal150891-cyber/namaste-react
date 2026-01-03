import Header from "./Header";
import Body from "./Body";
import Contact from "./Contact";
import { Outlet } from "react-router";
const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
