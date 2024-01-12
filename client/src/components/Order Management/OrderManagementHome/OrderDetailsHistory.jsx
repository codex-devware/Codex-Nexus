import CustomerStatics from "./CustomerStatics";
import OrderDetailsHistoryTable from "./OrderDetailsHistoryTable";
import OrderDetailsHistoryTop from "./OrderDetailsHistoryTop";

const OrderDetailsHistory = () => {
  return (
    <section className="flex flex-wrap">
      <div className="lg:w-[100%] w-full">
        <div className="font-outfit w-full">
          <OrderDetailsHistoryTop />
          <OrderDetailsHistoryTable />
        </div>
      </div>

      <div className="lg:w-[50%] mx-auto mt-6 rounded-md mb-6 bg-gray-50 shadow-md border-dashed border-[1px] w-full">
        <CustomerStatics />
      </div>

      <div className="lg:w-[50%] mx-auto mt-6 rounded-md mb-6 bg-gray-50 shadow-md border-dashed border-[1px] w-full">
        <CustomerStatics />
      </div>
    </section>
  );
};

export default OrderDetailsHistory;
