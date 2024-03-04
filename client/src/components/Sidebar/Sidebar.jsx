import { BsArrowRight } from "react-icons/bs";
import { Data } from "./Data";
import SidebarData from "./SidebarData";
const Sidebar = ({ setOpen, open }) => {
  return (
    <section className="min-h-screen h-full ">
      <div className="flex h-full ">
        <div
          className={`sidebarScroll h-full pt-8 bg-gray-400 overflow-x-hidden ${
            open
              ? "w-full md:pl-3 lg:pr-3 lg:pl-6 xl:pr-0"
              : "w-0 p-0 lg:p-5 lg:w-20"
          } duration-300 relative`}
        >
          <BsArrowRight
            className={`hidden z-[999] lg:block bg-white text-dark-purple text-4xl rounded-full absolute -right-3 top-9 px-2  border border-dark-purple cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="pt-2] h-[100vh]">
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
