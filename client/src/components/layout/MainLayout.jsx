import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

import {} from "../ui/resizable";

export function MainLayout({ children }) {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      {/* resize */}

      <Topbar menu={menu} handleMenu={handleMenu} />

      <div className="flex">
        <div
          className={` duration-500 transition ease-in-out ${
            menu ? "block" : "hidden"
          }`}
        >
          <Sidebar menu={menu} handleMenu={handleMenu} />
        </div>
        <div className="w-full rounded-t-lg border">{children}</div>
      </div>
    </>
  );
}
