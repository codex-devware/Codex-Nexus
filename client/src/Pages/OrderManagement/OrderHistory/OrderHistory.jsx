import ManagementFooter from "@/components/Order Management/ManagementFooter";
import ManagementTopVar from "@/components/Order Management/ManagementTopVar";
import TableBody from "@/components/Order Management/TableBody";
import TableHeader from "@/components/Order Management/TableHeader";
import { useState } from "react";

const OrderHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
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
    {
      id: 7,
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
    {
      id: 8,
      orderCode: "2630",
      profile:
        "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
      name: "Amex Dem",
      paymentMethod: "FNF",
      time: "10",
      type: "Cancel",
      status: "Canceled",
      amount: 8562,
    },
    {
      id: 9,
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
    {
      id: 10,
      orderCode: "2630",
      profile:
        "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
      name: "Amex Dem",
      paymentMethod: "FNF",
      time: "10",
      type: "Cancel",
      status: "Canceled",
      amount: 8562,
    },
    {
      id: 11,
      orderCode: "2630",
      profile:
        "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
      name: "Amex Dem",
      paymentMethod: "FNF",
      time: "10",
      type: "Cancel",
      status: "Canceled",
      amount: 8562,
    },
    {
      id: 12,
      orderCode: "2630",
      profile:
        "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
      name: "Amex Walt",
      paymentMethod: "FNF",
      time: "10",
      type: "Cancel",
      status: "Canceled",
      amount: 8562,
    },
    {
      id: 13,
      orderCode: "2630",
      profile:
        "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
      name: "Amex Dem",
      paymentMethod: "FNF",
      time: "10",
      type: "Cancel",
      status: "Canceled",
      amount: 8562,
    },
    {
      id: 14,
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
    {
      id: 15,
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
    {
      id: 16,
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
    {
      id: 17,
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
    {
      id: 18,
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
  // Filtered and paginated data
  const filteredAndPaginatedData = OrdersData.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Logic to calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndPaginatedData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Logic to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                  {currentItems.map((items) => (
                    <TableBody key={items.id} items={items} />
                  ))}
                </table>
              </div>
            </div>
            <ManagementFooter
              OrdersData={OrdersData}
              indexOfFirstItem={indexOfFirstItem}
              indexOfLastItem={indexOfLastItem}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              paginate={paginate}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderHistory;
