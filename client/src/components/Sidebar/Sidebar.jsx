import { useEffect, useState } from "react";
import { ArrowBigLeft } from "lucide-react";
import { BsArrowRight, BsDashSquare } from "react-icons/bs";
import SidebarData from "./SidebarData";
import { Data } from "./Data";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <section>
      <div className="flex">
        <div
          className={`h-screen p-5 pt-8 ${
            open ? "w-full" : "w-20"
          } duration-300 relative`}
        >
          <BsArrowRight
            className={`bg-white text-dark-purple text-4xl rounded-full absolute -right-3 top-9 px-2  border border-dark-purple cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="pt-2">
            {Data?.map((sections, index) => (
              <SidebarData open={open} key={index} sections={sections} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
