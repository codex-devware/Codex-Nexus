// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from '../ui/resizable';
// import Sidebar from '../Sidebar/Sidebar';
// import TopBanner from './TopBanner';

// export function Test() {
//   return (
//     <ResizablePanelGroup
//       direction='horizontal'
//       className='max-w-screen rounded-lg border'
//     >
//       <ResizablePanel defaultSize={10}>
//         <div className='flex h-screen items-start justify-center p-6'>
//           <span className='font-semibold'><Sidebar/></span>
//         </div>
//       </ResizablePanel>
//       <ResizableHandle />
//       <ResizablePanel defaultSize={50}>
//         <ResizablePanelGroup direction='vertical'>
//           <ResizablePanel defaultSize={10}>
//             <div className=''>
//               <span className='font-semibold'>Top menu</span>
//             </div>
//           </ResizablePanel>
//           <ResizableHandle />
//           <ResizablePanel defaultSize={75}>
//             <div className=''>
//               <span className='font-semibold'><TopBanner/></span>
//             </div>
//           </ResizablePanel>
//         </ResizablePanelGroup>
//       </ResizablePanel>
//     </ResizablePanelGroup>
//   );
// }
