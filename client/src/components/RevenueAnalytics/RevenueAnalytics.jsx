import RevenueAnalyticsPurchaseCard from "./RevenueAnalyticsPurchaseCard";
import RevenueAnalyticsSaleGraph from "./RevenueAnalyticsSaleGraph";
import RevenueAnalyticsStat from "./RevenueAnalyticsStat";
import RevenueAnalyticsTable from "./RevenueAnalyticsTable";
import RevenueAnalyticsTopHeader from "./RevenueAnalyticsTopHeader";

const RevenueAnalytics = () => {
  return (
    <>
      <RevenueAnalyticsTopHeader />
      <RevenueAnalyticsStat />
      <section className="flex flex-wrap sm:px-0 px-2 mb-5">
        <div data-aos="fade-up" className="lg:w-[66%] w-full">
          <div className="font-outfit w-full">
            <RevenueAnalyticsSaleGraph />
          </div>
        </div>

        <div
          data-aos="fade-down"
          className="lg:w-[32%] mx-auto rounded-md md:px-0 md:py-0 px-2 py-2 xl:ml-2 shadow border-dashed w-full bg-white"
        >
          <RevenueAnalyticsPurchaseCard />
        </div>
      </section>

      <RevenueAnalyticsTable />
    </>
  );
};

export default RevenueAnalytics;
