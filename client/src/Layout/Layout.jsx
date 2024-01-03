import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <Navbar />
        <div className="col-start-4 col-end-13">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
