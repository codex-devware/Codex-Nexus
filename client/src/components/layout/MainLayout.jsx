import { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../ui/resizable';

export function MainLayout({ children, resize, setResize }) {
  console.log({ resize, setResize });
  useEffect(() => {
    const resizeDiv = document.querySelector('.resizeAblePanel');
    resizeDiv.addEventListener('', () => {
      const resizeValue = resizeDiv.getAttribute('data-panel-size');
      setResize(resizeValue);
    });
    console.log(resizeDiv);
  }, [setResize]);
  console.log(resize);
  return (
    <>
      {/* resize */}
      <Topbar />
      <ResizablePanelGroup direction='horizontal' className='max-w-[30%]'>
        <ResizablePanel defaultSize={resize} className='resizeAblePanel'>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={20}>
          <div></div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className='flex items-center justify-center p-6 max-w-[70%]'>
        <span className='font-semibold'>{children}</span>
      </div>
    </>
  );
}
