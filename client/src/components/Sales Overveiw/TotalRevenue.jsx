import CountUp from "react-countup";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { LuArrowDownLeftFromCircle } from "react-icons/lu";

const TotalRevenue = () => {
  return (
    <div className="flex flex-col gap-3 justify-between font-outfit border p-5 rounded-xl hover:translate-y-[-2px] duration-300 ease-in-out cursor-pointer bg-white">
      <div className="flex items-center gap-3">
        <div className="bg-primary p-3 rounded-lg">
          <span className="text-white">
            <LiaMoneyBillWaveAltSolid fontSize={23} />
          </span>
        </div>
        <div>
          <p className="text-[16px]">Total Revenue</p>
          <h1 className="flex flex-wrap items-end gap-1">
            <h2 className=" font-medium text-2xl">
              <CountUp end={78964}></CountUp>$
            </h2>
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap items-center border border-primary/50 text-primary px-2  w-36 py-1 rounded-xl text-sm gap-2">
        <span className="text-[13px]">
          <LuArrowDownLeftFromCircle />
        </span>
        <span>42% decrease</span>
      </div>
    </div>
  );
};

export default TotalRevenue;
