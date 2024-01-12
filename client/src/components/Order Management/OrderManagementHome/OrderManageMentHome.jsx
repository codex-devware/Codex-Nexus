import OrderDetailsHistory from "./OrderDetailsHistory";
import OrderManageStat from "./OrderManageStat";
import OrderManageTopHeader from "./OrderManageTopHeader";

const OrderManageMentHome = () => {
  return (
    <div>
      <section className="mx-auto max-w-screen-xl">
        <OrderManageTopHeader />
        <OrderManageStat />
        <OrderDetailsHistory />
      </section>
    </div>
  );
};

export default OrderManageMentHome;
