import { CiMoneyBill } from "react-icons/ci";
import { FaBusinessTime } from "react-icons/fa";
import { FaUsersRays } from "react-icons/fa6";
import RevenueAnalyticsStatShow from "./RevenueAnalyticsStatShow";

const RevenueAnalyticsStat = () => {
  const AllOrderStatData = [
    {
      icon: <CiMoneyBill fontSize={28} />,
      statName: "Product for sale",
      statCount: 8540,
      progress: "+59",
      profit: true,
      value1: 89,
      valName1: "Groceries",
      valName2: "Clothing",
      valName3: "Gadgets",
      update: "increasing yesterday",
      color: "bg-violet-600",
    },
    {
      icon: <FaBusinessTime opacity={0.7} fontSize={26} />,
      statName: "Product for Profit",
      statCount: 8560,
      progress: "-14",
      value1: 63,
      valName1: "Clothing",
      valName2: "Accessories",
      valName3: "Groceries",
      profit: false,
      update: "decrease today",
      staus: 440,
      color: "bg-red-600",
    },
    {
      icon: <FaUsersRays opacity={0.7} fontSize={26} />,
      statName: "Total Customers",
      statCount: 9550,
      progress: " +24",
      value1: 72,
      valName1: "OverAll",
      profit: true,
      update: "decrease today",
      staus: 440,
      color: "bg-orange-600",
    },
  ];
  return (
    <>
      <section className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 sm:px-2 gap-2 mt-8 mb-6">
        {AllOrderStatData?.map((data, index) => (
          <RevenueAnalyticsStatShow key={index} data={data} />
        ))}
      </section>
    </>
  );
};

export default RevenueAnalyticsStat;
