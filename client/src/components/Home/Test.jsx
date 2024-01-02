import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../ui/resizable';

export function Test() {
  return (
    <ResizablePanelGroup
      direction='horizontal'
      className='max-w-screen rounded-lg border'
    >
      <ResizablePanel defaultSize={20}>
        <div className='flex h-screen items-center justify-center p-6'>
          <span className='font-semibold'>One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction='vertical'>
          <ResizablePanel defaultSize={10}>
            <div className='flex h-full items-center justify-center p-6'>
              <span className='font-semibold'>Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className='flex h-full items-center justify-center p-6'>
              <span className='font-semibold'>Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
