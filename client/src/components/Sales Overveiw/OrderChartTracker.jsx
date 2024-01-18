import TotalSalesGraph from "../Home/TotalSalesGraph";
import SalesOverviewGraph from "./SalesOverviewGraph";

const OrderChartTracker = () => {
  return (
    <>
      <section className="flex flex-wrap gap-4">
        <div className="lg:w-[68%] w-full">
          <TotalSalesGraph />
        </div>
        <div className="lg:w-[30%] w-full">
          <SalesOverviewGraph />
        </div>
      </section>
    </>
  );
};

export default OrderChartTracker;
