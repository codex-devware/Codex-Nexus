import { CiCalendarDate, CiFilter } from "react-icons/ci";

const RevenueAnalyticsTopHeader = () => {
  return (
    <section className="mt-8">
      <div className="flex flex-wrap lg:justify-between sm:justify-center justify-center sm:gap-3 gap-3">
        <div
          data-aos="fade-down"
          className="font-outfit sm:text-left text-center md:text-left lg:text-left"
        >
          <h1 className="text-3xl font-semibold">Revenue Analytics! ,</h1>
          <p className="text-[#6B7280] dark:text-[#c7c9cc]">
            <span>Total overview statistics</span>, {"Let's"} check your revenue
            status on this month!
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center items-center gap-3"
        >
          <div className="">
            <button className="hover:translate-y-[-2px] dark:bg-white dark:text-[#1E293B] duration-300 ease-in-out flex flex-wrap items-center gap-1 border-2 py-1 px-3 text-[16px] rounded-md font-outfit font-medium">
              <span className="text-[#1E40AF]">
                <CiCalendarDate />
              </span>{" "}
              Date Range
            </button>
          </div>
          <div className="">
            <button className="hover:translate-y-[-2px] dark:bg-white dark:text-[#1E293B] duration-300 ease-in-out flex text-[16px] flex-wrap items-center gap-1 border-2 py-1 px-3 rounded-md font-outfit font-medium">
              <span className="text-[#1E40AF]">
                <CiFilter />
              </span>{" "}
              Filter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueAnalyticsTopHeader;
