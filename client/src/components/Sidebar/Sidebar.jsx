import { useState } from "react";

import SidebarData from "./SidebarData";
import { ArrowBigLeft } from "lucide-react";
import { BsArrowRight, BsDashSquare } from "react-icons/bs";
import sideBarDataDB from "./sideBarDataDB";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <section>
      <div className="flex">
        <div
          className={` bg-gray-800 h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } duration-300 relative`}
        >
          <BsArrowRight
            className={`bg-white text-dark-purple text-4xl rounded-full absolute -right-3 top-9 px-2  border border-dark-purple cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="pt-2">
            {sideBarDataDB?.map((sections, index) => (
              <SidebarData open={open} key={index} sections={sections} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
