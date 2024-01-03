import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../ui/resizable';

export function MainLayout({ children }) {
  return (
    <>
      {/* resize */}
      <Topbar />
      <ResizablePanelGroup direction='horizontal' className='max-w-[30%]'>
        <ResizablePanel defaultSize={80}>
          <div className='flex min-h-screen  items-center justify-center p-6'>
            <Sidebar />
          </div>
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
