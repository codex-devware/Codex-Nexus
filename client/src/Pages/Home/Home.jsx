import TotalSalesGraph from "@/components/Home/TotalSalesGraph";
import OrderChartTracker from "@/components/Sales Overveiw/OrderChartTracker";
import SalesOverveiw from "@/components/Sales Overveiw/SalesOverveiw";
import Hello from "./Hello";

const Home = () => {
  return (
    <>
      <SalesOverveiw />
      <OrderChartTracker />
      <TotalSalesGraph />
      <Hello />
    </>
  );
};

export default Home;
