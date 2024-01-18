import OrderChartTracker from "@/components/Sales Overveiw/OrderChartTracker";
import RecentOrder from "@/components/Sales Overveiw/RecentOrder";
import SalesOverveiw from "@/components/Sales Overveiw/SalesOverveiw";

const Home = () => {
  return (
    <>
      <SalesOverveiw />
      <OrderChartTracker />
      <RecentOrder />
    </>
  );
};

export default Home;
