import CountUp from "react-countup";
import { FiShoppingCart } from "react-icons/fi";
import { LuArrowDownLeftFromCircle } from "react-icons/lu";

const TotalSales = () => {
  return (
    <div className="flex flex-col gap-3 justify-between font-outfit border p-5 rounded-xl hover:translate-y-[-2px] duration-300 ease-in-out cursor-pointer bg-white">
      <div className="flex items-center gap-3">
        <div className="bg-secondary p-3 rounded-lg">
          <span className="text-white">
            <FiShoppingCart fontSize={23} />
          </span>
        </div>
        <div>
          <p className="text-[16px]">All Order</p>
          <h1 className="flex flex-wrap items-end gap-1">
            <h2 className=" font-medium text-2xl">
              <CountUp end={48430}></CountUp>$
            </h2>
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap items-center border border-secondary/50 text-secondary px-2 w-36 py-1 rounded-xl text-sm gap-1">
        <span className="text-[13px]">
          <LuArrowDownLeftFromCircle />
        </span>
        <span>24% decrease</span>
      </div>
    </div>
  );
};

export default TotalSales;
