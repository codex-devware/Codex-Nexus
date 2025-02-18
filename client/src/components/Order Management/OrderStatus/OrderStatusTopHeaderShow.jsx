import { Progress } from "@nextui-org/react";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

const OrderStatusTopHeaderShow = ({ data }) => {
  const {
    icon,
    statName,
    statCount,
    progress,
    valName2,
    valName3,
    valName1,
    value1,
    value2,
    value3,
    profit,
    update,
  } = data;
  return (
    <div className="flex flex-wrap gap-4 justify-center sm:justify-between  shadow font-outfit border p-5 rounded-xl hover:translate-y-[-2px] duration-300 ease-in-out cursor-pointer bg-white">
      <div className="flex sm:justify-between sm:items-start justify-center items-center flex-col gap-4">
        <div className="">
          <span className="text-blue/20">{icon}</span>
        </div>
        <div className="">
          <h1 className="flex flex-wrap items-end gap-1">
            <span className="text-[16px] font-medium">{statName}</span>
          </h1>
          <h2 className=" font-semibold text-center sm:text-left text-3xl">
            <span className="text-lg font-medium">$</span>
            {statCount}
          </h2>
        </div>
        <div
          className={`first-line flex flex-wrap items-center border ${
            profit
              ? "border-highlight/30 text-highlight"
              : "border-primary text-primary"
          }  px-2 py-1 rounded-xl text-sm gap-1`}
        >
          <span className="text-[13px]">
            <LuArrowUpRightFromCircle />
          </span>
          <span>{update}%</span> {progress}
        </div>
      </div>

      <div className="flex flex-col gap-2 w-80 max-w-40 ">
        <Progress
          size="md"
          radius="sm"
          classNames={{
            base: "max-w-md",
            track: "drop-shadow-md border border-default",
            indicator:
              "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          label={valName1}
          value={value1}
          showValueLabel={true}
        />
        <Progress
          size="md"
          radius="sm"
          classNames={{
            base: "max-w-md",
            track: "drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-indigo-100 to-purple-600",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          label={valName2}
          value={value2}
          showValueLabel={true}
        />
        <Progress
          size="md"
          radius="sm"
          classNames={{
            base: "max-w-md",
            track: "drop-shadow-md border border-default",
            indicator:
              "bg-gradient-to-r from-green-300 via-blue-400 to-purple-500",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          label={valName3}
          value={value3}
          showValueLabel={true}
        />
      </div>
    </div>
  );
};

export default OrderStatusTopHeaderShow;
