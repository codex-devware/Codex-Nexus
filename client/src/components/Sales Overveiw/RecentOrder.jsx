import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ManagementFooter from "../Order Management/ManagementFooter";
import RecentOrderHeader from "./RecentOrderHeader";
import RecentOrderTable from "./RecentOrderTable";
const RecentOrder = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="font-outfit w-full">
        <div data-aos="fade-up" className="shadow-lg dark:bg-white dark:text-[#1E293B]  rounded-lg">
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
