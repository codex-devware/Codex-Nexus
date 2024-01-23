import { LuArrowDownLeftFromCircle } from "react-icons/lu";
import { MdSignalWifiStatusbar1Bar } from "react-icons/md";

const OrderStatusCard = () => {
  return (
    <>
      <div className=" flex flex-col gap-2 justify-between font-outfit border p-5 rounded-xl hover:translate-y-[-2px] duration-300 ease-in-out cursor-pointer">
        <div className="flex  gap-2">
          <div className="">
            <div className="bg-[#f1f3ff] p-3 rounded-lg">
              <span className="text-[#1E40AF]">
                <MdSignalWifiStatusbar1Bar fontSize={23} />
              </span>
            </div>
          </div>
          <div className="">
            <p className="text-[16px]">Order Status</p>
            <h1 className="flex flex-wrap items-end gap-1">
              <h2 className=" font-medium text-2xl">$59,580</h2>
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap items-center border border-[#EE7214] text-[#FF004D] px-2  w-36 py-1 rounded-xl text-sm gap-2">
          <span className="text-[13px]">
            <LuArrowDownLeftFromCircle />
          </span>
          <span>42% decrease</span>
        </div>
      </div>
    </>
  );
};

export default OrderStatusCard;
