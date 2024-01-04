import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

import {} from "../ui/resizable";

export function MainLayout({ children }) {
  return (
    <>
      {/* resize */}
      <Topbar />
      <div className="flex">
        <Sidebar />

        <div className="flex items-center justify-center p-6 w-full rounded-t-lg">
          <span className="font-semibold">{children}</span>
        </div>
      </div>
    </>
  );
}
