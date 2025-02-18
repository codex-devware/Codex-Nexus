import CountUp from "react-countup";
import { LuArrowDownLeftFromCircle } from "react-icons/lu";
import { MdSignalWifiStatusbar1Bar } from "react-icons/md";

const OrderStatusCard = () => {
  return (
    <>
      <div className=" flex flex-col gap-3 justify-between font-outfit border p-5 rounded-xl hover:translate-y-[-2px] duration-300 ease-in-out cursor-pointer bg-white">
        <div className="flex items-center gap-3">
          <div className="bg-highlight p-3 rounded-lg">
            <span className="text-white">
              <MdSignalWifiStatusbar1Bar fontSize={23} />
            </span>
          </div>
          <div>
            <p className="text-[16px]">Order Status</p>
            <h1 className="flex flex-wrap items-end gap-1">
              <h2 className=" font-medium text-2xl">
                <CountUp end={59580} />
              </h2>
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap items-center border border-highlight text-highlight px-2  w-36 py-1 rounded-xl text-sm gap-2">
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
