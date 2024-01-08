import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

import {} from '../ui/resizable';

export function MainLayout({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* resize */}

      <Topbar />

      <div className='grid grid-cols-12 justify-center'>
        <div
          className={`hidden md:block ${
            open ? 'lg:col-span-2 md:col-span-3' : 'md:col-span-1'
          }`}
        >
          <Sidebar setOpen={setOpen} open={open} />
        </div>
        <div
          className={`${
            open ? 'lg:col-span-10 md:col-span-9 col-span-12' : 'col-span-11'
          }`}
        >
          <div className='rounded-t-lg border'>{children}</div>
        </div>
      </div>
    </>
  );
}
