import CountUp from "react-countup";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { LuArrowDownLeftFromCircle } from "react-icons/lu";

const TotalRevenue = () => {
  return (
    <>
      <div className=" flex flex-col gap-2 justify-between font-outfit border p-5 rounded-xl hover:translate-y-[-2px] duration-300 ease-in-out cursor-pointer">
        <div className="flex  gap-2">
          <div className="">
            <div className="bg-[#f1f3ff] p-3 rounded-lg">
              <span className="text-[#1E40AF]">
                <LiaMoneyBillWaveAltSolid fontSize={23} />
              </span>
            </div>
          </div>
          <div className="">
            <p className="text-[16px]">Total Revenue</p>
            <h1 className="flex flex-wrap items-end gap-1">
              <h2 className=" font-medium text-2xl">
                <CountUp end={78964}></CountUp>$
              </h2>
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

export default TotalRevenue;
