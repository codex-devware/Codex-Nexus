import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

import {} from '../ui/resizable';

export function MainLayout({ children, resize, setResize }) {
  console.log({ resize, setResize });
  // useEffect(() => {
  //   const resizeDiv = document.querySelector('.resizeAblePanel');
  //   resizeDiv.addEventListener('', () => {
  //     const resizeValue = resizeDiv.getAttribute('data-panel-size');
  //     setResize(resizeValue);
  //   });
  //   console.log(resizeDiv);
  // }, [setResize]);
  // console.log(resize);
  return (
    <>
      {/* resize */}
      <Topbar />
      <div className='flex'>
        <Sidebar />
        <div className='flex items-center justify-center p-6 w-full rounded-t-lg'>
          <span className='font-semibold'>{children}</span>
        </div>
      </div>
    </>
  );
}
