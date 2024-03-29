import CountUp from "react-countup";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

const OrderStatShowData = ({ data }) => {
  const {
    icon,
    statName,
    statCount,
    statStatus,
    profit,
    percent,
    profitStatus,
  } = data;
  return (
    <>
      <section className="flex flex-wrap w-[90%] mx-auto flex-col gap-6 font-outfit border p-5 rounded-xl  duration-300 ease-in-out cursor-pointer">
        <div className="flex flex-wrap flex-col gap-4">
          <div className="">
            <div className=" rounded-lg">
              <span className="text-[#1e40afb2]">{icon}</span>
            </div>
          </div>
          <div className="">
            <p className="text-[18px] font-semi-bold">{statName}</p>
            <h1 className=" gap-10  ">
              <h2 className=" font-medium text-2xl">
                <CountUp end={statCount}></CountUp>
              </h2>
              <h2 className=" font-medium text-sm">{statStatus}</h2>
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap items-end">
          <div
            className={`first-line flex flex-wrap items-center border ${
              profit
                ? "border-green-300 text-green-600"
                : "border-[#EE7214] text-[#FF004D]"
            }  px-2 py-1 rounded-xl text-sm gap-1`}
          >
            <span className="text-[13px]">
              <LuArrowUpRightFromCircle />
            </span>
            <span>{percent}%</span> {profitStatus}
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderStatShowData;
