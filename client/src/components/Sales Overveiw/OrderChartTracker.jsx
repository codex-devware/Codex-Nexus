import RecentOrder from "./RecentOrder";
import SalesOverviewGraph from "./SalesOverviewGraph";

const OrderChartTracker = () => {
  return (
    <>
      <section className="flex flex-wrap gap-4">
        <div className="lg:w-[68%] w-full">
          <RecentOrder />
        </div>
        <div className="lg:w-[30%] w-full">
          <SalesOverviewGraph />
        </div>
      </section>
    </>
  );
};

export default OrderChartTracker;
