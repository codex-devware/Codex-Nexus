import Sidebar from "../Sidebar/Sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";

  
  export function MainLayout({children}) {
    return (
      <ResizablePanelGroup
        direction='horizontal'
        className='max-w-screen rounded-lg border'
      >
        <ResizablePanel defaultSize={20}>
          <div className='flex h-screen items-center justify-center p-6'>
            <span className='font-semibold'><Sidebar/></span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction='vertical'>
            <ResizablePanel defaultSize={10}>
              <div className='flex h-full items-center justify-center p-6'>
                <span className='font-semibold'></span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className='flex h-full items-center justify-center p-6'>
                <span className='font-semibold'>{children}</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  }
  