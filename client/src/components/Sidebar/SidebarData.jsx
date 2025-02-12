import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import classNames from "classnames";

const SidebarData = ({ sections, open }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const { section, subSection, icon, path } = sections;
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  console.log(activeMenu);

  return (
    <ul>
      <Link
        to={path}
        onClick={() => {
          setActiveMenu(section);
          setOpenSubMenu(section);
        }}
      >
        <li
          onClick={() => {
            setOpenSubMenu(openSubMenu === section ? null : section);
          }}
          className={`text-gray-800 text-sm flex items-center justify-center gap-x-4 cursor-pointer p-2 transition-colors duration-300 hover:bg-gray-700 hover:text-white rounded-md border-b-2 my-3 ${
            activeMenu === section ? "bg-gray-700 text-white" : ""
          }`}
        >
          <span className="text-2xl block opacity-80">{icon}</span>
          <span
            className={classNames(
              "text-[14px] font-medium flex-1 flex items-center justify-between gap-4",
              { hidden: !open }
            )}
          >
            {section}
            {subSection.length > 0 && (
              <BsChevronDown
                className={classNames("transition-transform duration-300", {
                  "rotate-180": openSubMenu === section,
                })}
              />
            )}
          </span>
        </li>
      </Link>
      {subSection.length > 0 && openSubMenu === section && open && (
        <ul className="pl-8 mt-2">
          {subSection.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setActiveMenu(item.title)}
            >
              <li
                className={`text-gray-800 text-sm flex items-center gap-x-4 cursor-pointer p-2 transition-colors duration-300 hover:bg-gray-600 hover:text-white rounded-md shadow-sm ${
                  activeMenu === item.title ? "bg-gray-700 text-white" : ""
                }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </ul>
  );
};

export default SidebarData;
