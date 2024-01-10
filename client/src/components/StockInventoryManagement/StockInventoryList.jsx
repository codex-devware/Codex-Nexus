import RecentOrderHeader from "../Sales Overveiw/RecentOrderHeader";
import StockInventoryTable from "./StockInventoryTable";
import SuppliersManagement from "./SuppliersManagement";
import ReturnManagement from "./ReturnManagement";

const StockInventoryList = () => {
  return (
    <div>
      {/* stock inventory list  */}
      <RecentOrderHeader title={"Stock Inventory List"} />
      <StockInventoryTable />
      {/* supplier management  */}
      <RecentOrderHeader title={"Supplier Information"} />
      <SuppliersManagement />
      {/* return management  */}
      <RecentOrderHeader title={"Return management"} />
      <ReturnManagement />
    </div>
  );
};

export default StockInventoryList;
