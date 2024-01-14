import OrderStatusGraph from "./OrderStatusGraph";
import OrderStatusTable from "./OrderStatusTable";
import OrderStatusTopHeader from "./OrderStatusTopHeader";

const OrderStatus = () => {
  return (
    <>
      <OrderStatusTopHeader />
      <section className="mx-auto max-w-screen-xl">
        <OrderStatusTable />
      </section>

      <div className="lg:w-full mt-6 rounded-md mb-6 w-full">
        <OrderStatusGraph />
      </div>
    </>
  );
};

export default OrderStatus;
