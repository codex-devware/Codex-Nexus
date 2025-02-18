import CountUp from "react-countup";

const AllOrderTopShow = ({ data }) => {
  const { statName, statCount, progress, icon, color } = data;
  return (
    <div className="flex flex-wrap justify-between shadow font-outfit border px-8 py-5 rounded-xl hover:translate-y-[-2px] duration-300 ease-in-out cursor-pointer bg-white">
      <div className="flex justify-between  gap-4">
        <div className="">
          <div className="bg-[#f1f3ff] p-3 rounded-lg">
            <span className="text-blue">{icon}</span>
          </div>
        </div>
        <div className="">
          <h1 className="flex flex-wrap items-end gap-1">
            <span className=" font-medium text-2xl">{statCount}</span>
          </h1>
          <span className="text-[16px]">{statName}</span>
        </div>
      </div>
      <div className="relative h-14 w-14 left-6">
        <svg
          className="h-full w-full"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-gray-200"
            strokeWidth="2"
          ></circle>

          <g className="origin-center -rotate-90 transform">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className={`stroke-current ${color}`}
              strokeWidth="2"
              strokeDasharray="100"
              strokeDashoffset={progress}
            ></circle>
          </g>
        </svg>

        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <span className="text-center text-sm font-bold text-gray-800 dark:text-white">
            <CountUp duration={4} end={progress}></CountUp>%
          </span>
        </div>
      </div>
    </div>
  );
};

export default AllOrderTopShow;
