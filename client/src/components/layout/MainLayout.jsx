import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

export function MainLayout({ children }) {
  return (
    <>
      {/* resize */}
      <Topbar />
      <div className='flex'>
        <Sidebar />
        <div className='flex w-full rounded-t-lg border'>
          <span className='font-semibold border w-full'>{children}</span>
        </div>
      </div>
    </>
  );
}
