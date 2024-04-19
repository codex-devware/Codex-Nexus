import { Progress } from "@nextui-org/react";
import CountUp from "react-countup";
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";

const RevenueAnalyticsStatShow = ({ data }) => {
  const {
    icon,
    statName,
    statCount,
    progress,
    valName1,
    value1,
    profit,
    color,
  } = data;

  return (
    <div className="shadow font-outfit flex flex-col gap-2 border darkCard p-4 w-[300px] sm:w-full mx-auto rounded-xl hover:translate-y-[-2px] duration-300 ease-in-out cursor-pointer">
      <div className="">
        <div className="flex items-center justify-between">
          <h1 className="flex gap-1">
            <span className="text-[16px] font-medium">{statName}</span>
          </h1>
          <h2 className="text-[#1E40AF] darkIcon px-2 py-2 rounded-md ">
            {icon}
          </h2>
        </div>

        <h2 className=" font-semibold text-center sm:text-left text-3xl">
          <CountUp end={statCount} duration={3}></CountUp>
        </h2>
      </div>

      <div className="flex flex-col gap-2 w-full ">
        <Progress
          size="sm"
          radius="sm"
          classNames={{
            base: "max-w-md",
            track: "drop-shadow-md border border-default",
            indicator: `${color}`,
            label: "tracking-wider font-medium ",
            value: "text-foreground/60",
          }}
          label={valName1}
          value={value1}
          showValueLabel={true}
        />
      </div>
      <div className=" flex justify-between">
        <h1
          className={`${
            profit ? "text-green-600" : "text-red-600"
          } flex items-center gap-1`}
        >
          {" "}
          {profit ? <IoMdTrendingUp /> : <IoMdTrendingDown />}
          {progress}
        </h1>
        <h2 className={` text-sm`}>less than fast week</h2>
      </div>
    </div>
  );
};

export default RevenueAnalyticsStatShow;
