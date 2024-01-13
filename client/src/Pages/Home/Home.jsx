import TotalSalesGraph from "@/components/Home/TotalSalesGraph";
import OrderChartTracker from "@/components/Sales Overveiw/OrderChartTracker";
import SalesOverveiw from "@/components/Sales Overveiw/SalesOverveiw";

const Home = () => {
  return (
    <>
      <SalesOverveiw />
      <OrderChartTracker />
      <TotalSalesGraph />
    </>
  );
};

export default Home;
