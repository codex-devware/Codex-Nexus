import React from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing the menu and cross icons
import { Data } from "./Data";
import SidebarData from "./SidebarData";
import classNames from "classnames";

const Sidebar = ({ setOpen, open }) => {
  return (
    <section className="min-h-screen h-full bg-gray-100">
      <div className="flex h-full">
        <div
          className={classNames(
            "sidebarScroll h-full pt-8 border-r border-gray-900 overflow-x-hidden transition-all duration-300 relative",
            {
              "w-full md:pl-3 lg:pr-3 lg:pl-6 xl:pr-0": open,
              "w-0 p-0 lg:p-5 lg:w-20": !open,
            }
          )}
        >
          {open ? (
            <FaTimes
              className="z-[999] lg:block text-4xl rounded-full absolute top-3 left-6 pb-2 px-2 cursor-pointer transition-transform duration-300"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <FaBars
              className="z-[999] lg:block text-4xl rounded-full absolute top-3 left-6 pb-2 px-2 cursor-pointer transition-transform duration-300"
              onClick={() => setOpen(!open)}
            />
          )}
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
