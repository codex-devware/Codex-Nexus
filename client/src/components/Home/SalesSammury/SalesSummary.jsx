import netSalesImg from "../../../assets/netSales.png";
import totalSalesImg from "../../../assets/totalSales.png";
import topProductImg from "../../../assets/topProduct.png";
import SingleSales from "./SingleSales";

const SalesSummary = () => {
  const SalesData = [
    {
      id: 1,
      img: totalSalesImg,
      name: "Total Sales",
      amount: 5,
      growth: "-2",
    },
    {
      id: 2,
      img: netSalesImg,
      name: "Net Sales",
      amount: 500,
      growth: "+10",
    },
    {
      id: 3,
      img: topProductImg,
      name: "Top Product",
      amount: 12,
      growth: "+12",
    },
  ];
  return (
    <div>
      <div className="pt-6 pl-6">
        <h2 className="text-xl font-bold">Today Sales</h2>
        <h4 className="font-semibold">Sales Summary</h4>
      </div>
      <section className="grid grid-cols-4 gap-6 p-6">
        {SalesData.map((items) => (
          <SingleSales key={items.id} items={items} />
        ))}
        <div>Sales Amount</div>
      </section>
    </div>
  );
};

export default SalesSummary;
