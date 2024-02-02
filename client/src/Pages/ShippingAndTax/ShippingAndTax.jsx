import BookingManagementTable from "@/components/ShippingAndTax/BookingManagementTable";
import PerformanceOverviewGraph from "@/components/ShippingAndTax/PerformanceOverviewGraph";
import ShipmentTable from "@/components/ShippingAndTax/ShipmentTable";
import customerImg from "../../assets/mdKawsar.png";

const ShippingAndTax = () => {
  const data = [
    {
      id: 1,
      skuId: "unique123",
      productName: "Computer",
      customerImg,
      customerName: "Md Kawsar",
      pickup: "Muradpur, Ctg",
      delivery: "New Market, CTG",
      status: "Delivered",
      percentage: 100,
    },
    {
      id: 2,
      skuId: "unique123",
      productName: "Computer",
      customerImg,
      customerName: "Md Kawsar",
      pickup: "Gulshan, Dhaka",
      delivery: "Airport, Dhaka",
      status: "Pending",
      percentage: 50,
    },
    {
      id: 3,
      skuId: "unique123",
      productName: "Computer",
      customerImg,
      customerName: "Md Kawsar",
      pickup: "GEC, Ctg",
      delivery: "Agrabad, CTG",
      status: "Canceled",
      percentage: 100,
    },
    {
      id: 4,
      skuId: "unique123",
      productName: "Computer",
      customerImg,
      customerName: "Md Kawsar",
      pickup: "Banani, Dhaka",
      delivery: "Stadium, Dhaka",
      status: "Delivered",
      percentage: 100,
    },
  ];
  return (
    <section className="grid grid-cols-12">
      <div className="col-start-1 lg:col-end-10 col-end-13">
        <PerformanceOverviewGraph />
        <BookingManagementTable data={data} />
      </div>
      <div className="lg:col-start-10 col-start-1 col-end-13">
        <ShipmentTable data={data} />
      </div>
    </section>
  );
};

export default ShippingAndTax;
