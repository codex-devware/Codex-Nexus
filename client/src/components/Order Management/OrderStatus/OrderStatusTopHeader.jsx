import { CiMoneyBill } from "react-icons/ci";
import { FaBusinessTime } from "react-icons/fa6";
import OrderStatusTopHeaderShow from "./OrderStatusTopHeaderShow";
const OrderStatusTopHeader = () => {
  const AllOrderStatData = [
    {
      icon: <CiMoneyBill fontSize={28} />,
      statName: "Total Transactions",
      statCount: 8540,
      progress: 59,
      profit: true,
      value1: 91,
      value2: 53,
      value3: 74,
      valName1: "Groceries",
      valName2: "Clothing",
      valName3: "Gadgets",
      update: "increasing yesterday",
      color: "text-secondary",
    },
    {
      icon: <FaBusinessTime opacity={0.7} fontSize={26} />,
      statName: "Orders Due",
      statCount: 4750,
      progress: 14,
      value1: 69,
      value2: 54,
      value3: 35,
      valName1: "Clothing",
      valName2: "Accessories",
      valName3: "Groceries",
      profit: false,
      update: "decrease today",
      staus: 440,
      color: "text-primary",
    },
  ];
  return (
    <section className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 px-4 gap-2 mt-8 mb-6">
      {AllOrderStatData?.map((data, index) => (
        <OrderStatusTopHeaderShow key={index} data={data} />
      ))}
    </section>
  );
};

export default OrderStatusTopHeader;
