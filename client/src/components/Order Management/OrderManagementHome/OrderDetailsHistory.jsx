import CustomerStatics from "./CustomerStatics";
import OrderDetailsHistoryTable from "./OrderDetailsHistoryTable";

import OrderDetailsHistoryTop from "./OrderDetailsHistoryTop";
import OrderManaSalesOverview from "./OrderManaSalesOverview";

const OrderDetailsHistory = () => {
  return (
    <section className="flex flex-wrap gap-2 px-4">
      <div data-aos="fade-up" className="lg:w-[100%] w-full">
        <div className="font-outfit w-full">
          <OrderDetailsHistoryTop />
          <OrderDetailsHistoryTable />
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="lg:w-[48%] mx-auto mt-6 rounded-md mb-6 bg-gray-50 shadow-md border-dashed border-[1px] w-full"
      >
        <CustomerStatics />
      </div>

      <div
        data-aos="fade-down"
        className="lg:w-[48%] mx-auto mt-6 rounded-md mb-6 bg-gray-50 shadow-md border-dashed border-[1px] w-full"
      >
        <OrderManaSalesOverview />
      </div>
    </section>
  );
};

export default OrderDetailsHistory;
