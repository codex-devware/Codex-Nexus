import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TotalSalesGraph from "../Home/TotalSalesGraph";
import SalesOverviewGraph from "./SalesOverviewGraph";
const OrderChartTracker = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="flex flex-wrap gap-4 items-center">
        <div data-aos="fade-up" className="lg:w-[68%] w-full">
          <TotalSalesGraph />
        </div>
        <div data-aos="fade-down" className="lg:w-[30%] w-full">
          <SalesOverviewGraph />
        </div>
      </section>
    </>
  );
};

export default OrderChartTracker;
