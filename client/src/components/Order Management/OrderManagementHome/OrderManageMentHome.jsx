import OrderDetailsHistory from "./OrderDetailsHistory";
import OrderManageStat from "./OrderManageStat";
import OrderManageTopHeader from "./OrderManageTopHeader";

const OrderManageMentHome = () => {
  return (
    <>
      <OrderManageTopHeader />
      <OrderManageStat />
      <OrderDetailsHistory />
    </>
  );
};

export default OrderManageMentHome;
