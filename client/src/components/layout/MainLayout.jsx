import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

export function MainLayout({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* resize */}

      <div className='grid grid-cols-12 justify-center'>
        <div
          className={`fixed z-50 lg:relative ${
            open ? 'lg:col-span-2' : 'lg:col-span-1'
          }`}
        >
          <div className='relative'>
            <div className='fixed top-0 bottom-0 left-0 lg:w-[180px] xl:w-[200px] 2xl:w-[250px]'>
              <Sidebar setOpen={setOpen} open={open} />
            </div>
          </div>
        </div>
        <div
          className={`${
            open ? 'lg:col-span-10  col-span-12' : 'col-span-12 lg:col-span-11'
          }`}
        >
          <div className='h-20'>
            <div className='fixed right-0 z-40 '>
              <Topbar openToggle={open} setOpenToggle={setOpen} />
            </div>
          </div>
          <div className='rounded-t-lg border xl:px-12 bg-gray-50'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
