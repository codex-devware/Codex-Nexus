import React from "react";
import { Data } from "./Data";
import SidebarData from "./SidebarData";
import classNames from "classnames";
import logo from "../../../public/image/logo.png";
import { Link } from "react-router-dom";

const Sidebar = ({ open }) => {
  return (
    <section className="min-h-screen h-full bg-gray-50">
      <div className="flex">
        <div
          className={classNames(
            "sidebarScroll h-full pt-2 overflow-x-hidden transition-all duration-300",
            {
              "w-full md:pl-3 lg:p-5 xl:pr-0 ps-3": open,
              "w-0 lg:p-5 lg:w-20": !open,
            }
          )}
        >
          <Link to="/" className="flex items-center justify-center gap-2 py-3">
            {open ? (
              <>
                <img src={logo} className="w-[40px]" alt="Sidebar logo" />
                <span className="font-semibold text-2xl">Nexus</span>
              </>
            ) : (
              <>
                <img src={logo} alt="Sidebar logo" />
              </>
            )}
          </Link>

          <div className={open ? "pe-4" : "pe-0"}>
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
