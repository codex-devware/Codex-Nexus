import OrderStatusCard from "./OrderStatusCard";
import TotalRevenue from "./TotalRevenue";
import TotalSales from "./TotalSales";
import TotalVisitor from "./TotalVisitor";

const SalesRevenueTracker = () => {
  return (
    <>
      <section className=" lg:grid-cols-4 md:grid-cols-2 px-4 lg:px-0 grid md:justify-between gap-2 items-center mt-8 mb-6">
        <TotalSales />
        <TotalRevenue />
        <TotalVisitor />
        <OrderStatusCard />
      </section>
    </>
  );
};

export default SalesRevenueTracker;
