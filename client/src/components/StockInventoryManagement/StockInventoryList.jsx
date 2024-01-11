import RecentOrderHeader from "../Sales Overveiw/RecentOrderHeader";
import StockInventoryChart from "./StockInventoryChart";
import StockInventoryTable from "./StockInventoryTable";

const StockInventoryList = () => {
  return (
    <div>
      {/* stock inventory list  */}
      <RecentOrderHeader title={"Stock Inventory List"} />
      <StockInventoryTable />
      <StockInventoryChart />
    </div>
  );
};

export default StockInventoryList;
