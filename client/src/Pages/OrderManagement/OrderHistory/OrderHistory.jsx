import ManagementFooter from "@/components/Order Management/ManagementFooter";
import ManagementTopVar from "@/components/Order Management/ManagementTopVar";
import TableBody from "@/components/Order Management/TableBody";
import TableHeader from "@/components/Order Management/TableHeader";
import { useState } from "react";

const OrderHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const OrdersData = [
    {
      id: 1,
      orderCode: "2632",
      profile: "https://i.ibb.co/XjjZqKL/03.jpg",
      name: "Sourov Dey",
      paymentMethod: "Cash",
      time: "07",
      type: "Collect",
      status: "Collected",
      amount: 2999,
    },
    {
      id: 2,
      orderCode: "2631",
      profile: "https://avatars.githubusercontent.com/u/54439025?v=4",
      name: "IKHTIAR UDDIN",
      paymentMethod: "Paid",
      time: "09",
      type: "Cancel",
      status: "Canceled",
      amount: 4852,
    },
    {
      id: 3,
      orderCode: "2630",
      profile: "https://avatars.githubusercontent.com/u/88099075?v=4",
      name: "Mohammad Jubair",
      paymentMethod: "Cash",
      time: "10",
      type: "Delivery",
      status: "Delivered",
      amount: 8562,
    },
    {
      id: 4,
      orderCode: "2630",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjLzRWkFnjDACM6cKg04RQfmIbJ065cJFpEo9iWLSbg&s",
      name: "Alex Sobuj",
      paymentMethod: "Cash",
      time: "10",
      type: "Collect",
      status: "Collected",
      amount: 8562,
    },
    {
      id: 5,
      orderCode: "2630",
      profile:
        "https://avatars.githubusercontent.com/u/88099075?v=4https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0MxZqtpYExTG4jVaQSzN57LIsfAf2N_I9Jt5oNtVDUQ&s",
      name: "Mohammad Amir",
      paymentMethod: "Cash",
      time: "10",
      type: "Delivery",
      status: "Delivered",
      amount: 8562,
    },
    {
      id: 6,
      orderCode: "2630",
      profile:
        "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
      name: "Aman Khan",
      paymentMethod: "Cash",
      time: "10",
      type: "Cancel",
      status: "Canceled",
      amount: 8562,
    },
  ];
  const filteredOrders = OrdersData.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <section data-aos="fade-up" className="bg-gray-50 p-3 sm:p-5 w-auto">
        <div>
          <div className=" relative  overflow-hidden">
            <h1 className="font-outfit text-[26px] font-bold mb-3">
              Order History
            </h1>
            <ManagementTopVar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <div className="">
              <div className="overflow-x-auto">
                <table className="text-[14px] text-left text-gray-500 font-outfit w-[1000px] xl:w-full overflow-x-auto">
                  <TableHeader />
                  {filteredOrders.map((items) => (
                    <TableBody key={items.id} items={items} />
                  ))}
                </table>
              </div>
            </div>
            <ManagementFooter />
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderHistory;
