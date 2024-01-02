import { useState } from "react";
import sideBarDataDB from "./SideBarDB";
import SidebarData from "./SidebarData";

const Sidebar = () => {
  const [menuStates, setMenuStates] = useState("");
  const [menuHide, setMenuHide] = useState(true);
  const toggleMenu = (menuName) => {
    setMenuStates(menuName);

    // Toggle the state for the clicked section
    setMenuHide((prevMenuStates) => ({
      ...prevMenuStates,
      [menuName]: !prevMenuStates[menuName],
    }));
  };

  return (
    <section>
      <div>
        <h1 className="text-2xl font-bold text-center mt-6 underline text-blue-500">
          Codex Nexus
        </h1>
        <div className="m-6 font-semibold text-md">
          {sideBarDataDB?.map((sections, index) => (
            <SidebarData
              toggleMenu={toggleMenu}
              menuHide={menuHide}
              menuStates={menuStates}
              key={index}
              sections={sections}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
