import OrderDetailsHistory from './OrderDetailsHistory';
import OrderManageStat from './OrderManageStat';
import OrderManageTopHeader from './OrderManageTopHeader';

const OrderManageMentHome = () => {
  return (
    <>
      <section>
        <OrderManageTopHeader />
        <OrderManageStat />
        <OrderDetailsHistory />
      </section>
    </>
  );
};

export default OrderManageMentHome;
