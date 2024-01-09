import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

export function MainLayout({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* resize */}

      <Topbar openToggle={open} setOpenToggle={setOpen} />

      <div className="grid grid-cols-12 justify-center">
        <div
          className={`fixed z-50 md:relative bg-gray-400 ${
            open ? "lg:col-span-2 md:col-span-3" : "md:col-span-1"
          }`}
        >
          <Sidebar setOpen={setOpen} open={open} />
        </div>
        <div
          className={`${
            open
              ? "lg:col-span-10 md:col-span-9 col-span-12"
              : "col-span-12 md:col-span-11"
          }`}
        >
          <div className="rounded-t-lg border lg:px-12">{children}</div>
        </div>
      </div>
    </>
  );
}
