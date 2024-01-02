import Sidebar from "../Sidebar/Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const TopBanner = () => {
  return (
    <section className="grid grid-cols-12 h-full">
      <div className="col-start-1 col-end-3 border-r">
        <Sidebar />
      </div>
      <div className="">
        <h1 className="text-3xl font-bold ">Hello Developers</h1>
      </div>
    </section>
  );
};

export default TopBanner;
