import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

import {} from '../ui/resizable';

export function MainLayout({ children }) {
  return (
    <>
      {/* resize */}

      <Topbar />

      <div className='flex'>
        <div className='hidden md:block'>
          <Sidebar />
        </div>
        <div className='w-full rounded-t-lg border'>{children}</div>
      </div>
    </>
  );
}
