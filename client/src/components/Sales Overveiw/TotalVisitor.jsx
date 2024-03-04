import CountUp from "react-countup";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuArrowDownLeftFromCircle } from "react-icons/lu";

const TotalVisitor = () => {
  return (
    <>
      <div className=" flex flex-col gap-2 justify-between font-outfit border p-5 rounded-xl hover:translate-y-[-2px] duration-300 ease-in-out cursor-pointer">
        <div className="flex  gap-2">
          <div className="">
            <div className="bg-[#f1f3ff] p-3 rounded-lg">
              <span className="text-[#1E40AF]">
                <FaPeopleGroup fontSize={23} />
              </span>
            </div>
          </div>
          <div className="">
            <p className="text-[16px]">Total Visitor</p>
            <h1 className="flex flex-wrap items-end gap-1">
              <h2 className=" font-medium text-2xl">
                <CountUp end={48140} />
              </h2>
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap items-center border border-[#52b439] text-[#1ae64d] px-2  w-36 py-1 rounded-xl text-sm gap-2">
          <span className="text-[13px]">
            <LuArrowDownLeftFromCircle />
          </span>
          <span>78% Increase</span>
        </div>
      </div>
    </>
  );
};

export default TotalVisitor;
