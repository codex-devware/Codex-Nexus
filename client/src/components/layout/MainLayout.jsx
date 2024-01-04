import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

import {} from '../ui/resizable';

export function MainLayout({ children }) {
  return (
    <>
      {/* resize */}
      <Topbar />
      <div className='flex'>
        <Sidebar />
<<<<<<<<< Temporary merge branch 1
        <div className="flex items-center justify-center p-6 w-full rounded-t-lg">
          <span className="font-semibold">{children}</span>
=========
        <div className='flex items-center justify-center p-6 w-full rounded-t-lg border'>
          <span className='font-semibold border'>{children}</span>
>>>>>>>>> Temporary merge branch 2
        </div>
      </div>
    </>
  );
}