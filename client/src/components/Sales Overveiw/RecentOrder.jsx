import ManagementFooter from "../Order Management/ManagementFooter";
import RecentOrderHeader from "./RecentOrderHeader";
import RecentOrderTable from "./RecentOrderTable";

const RecentOrder = () => {
  return (
    <>
      <div className="font-outfit w-full">
        <div className="shadow-lg rounded-lg">
          <RecentOrderHeader title={"Recent Order"} />
          <RecentOrderTable />
          <div className="px-6">
            <ManagementFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentOrder;
