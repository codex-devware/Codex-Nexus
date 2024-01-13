import OrderDetailsHistory from "./OrderDetailsHistory";
import OrderManageStat from "./OrderManageStat";
import OrderManageTopHeader from "./OrderManageTopHeader";

const OrderManageMentHome = () => {
  return (
    <>
      <section className="mx-auto max-w-screen-xl">
        <OrderManageTopHeader />
        <OrderManageStat />
        <OrderDetailsHistory />
      </section>
    </>
  );
};

export default OrderManageMentHome;
