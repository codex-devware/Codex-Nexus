import TotalSales from "./TotalSales";
import TotalRevenue from "./TotalRevenue";
import TotalVisitor from "./TotalVisitor";

const SalesRevenueTracker = () => {
  return (
    <>
      <section className="flex flex-wrap md:justify-between gap-2 items-center mt-8 mb-6">
        <TotalSales />
        <TotalRevenue />
        <TotalVisitor />
      </section>
    </>
  );
};

export default SalesRevenueTracker;
