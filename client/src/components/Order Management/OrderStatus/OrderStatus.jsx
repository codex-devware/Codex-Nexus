import OrderStatusTable from "./OrderStatusTable";
import OrderStatusTopHeader from "./OrderStatusTopHeader";

const OrderStatus = () => {
  return (
    <>
      <OrderStatusTopHeader />
      <section className="mx-auto max-w-screen-xl">
        <OrderStatusTable />
      </section>
    </>
  );
};

export default OrderStatus;
