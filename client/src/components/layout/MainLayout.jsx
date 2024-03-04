import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

export function MainLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* resize */}

      <div
        className={`grid grid-cols-12 justify-center ${open && "lg:h-[100vh]"}`}
      >
        <div
          className={`fixed z-50 lg:relative bg-gray-400 ${
            open ? "lg:col-start-1 col-end-3" : "col-start-1 col-end-1"
          }`}
        >
          <div className="relative">
            <div className="fixed top-0 bottom-0 left-0">
              <Sidebar setOpen={setOpen} open={open} />
            </div>
          </div>
        </div>
        <div
          className={`${
            open
              ? "lg:col-start-4 xl:col-start-3 lg:col-end-13 col-start-1 col-end-13 "
              : " lg:ml-20 col-end-13 col-start-1"
          }`}
        >
          <div className="h-20">
            <div className={`fixed z-40 w-full`}>
              <Topbar openToggle={open} setOpenToggle={setOpen} />
            </div>
          </div>
          <div className="rounded-t-lg border xl:px-12 bg-gray-50  max-lg:px-4 px-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
