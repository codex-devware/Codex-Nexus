import { BsArrowRight } from "react-icons/bs";
import { Data } from "./Data";
import SidebarData from "./SidebarData";
const Sidebar = ({ setOpen, open }) => {
  return (
    <section>
      <div className="flex ">
        <div
          className={`h-screen pt-8 bg-gray-400 overflow-hidden ${
            open ? "w-full md:p-5" : " w-0 p-0 md:p-5  lg:w-20"
          } duration-300 relative`}
        >
          <BsArrowRight
            className={`hidden lg:block bg-white text-dark-purple text-4xl rounded-full absolute -right-3 top-9 px-2  border border-dark-purple cursor-pointer ${
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
