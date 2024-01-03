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
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel defaultSize={25}>
          <div className='flex min-h-screen items-center justify-center p-6'>
            <Sidebar />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className='flex items-center justify-center p-6'>
            <span className='font-semibold'>{children}</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
