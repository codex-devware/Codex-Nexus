const OrderStatusTable = () => {
  const data = [
    {
      id: "#245",
      imgSrc:
        "https://media.istockphoto.com/id/1178379920/photo/mens-black-blank-sweatshirt-template-from-two-sides-natural-shape-on-invisible-mannequin-for.jpg?s=612x612&w=0&k=20&c=PgHvTo9oTr0kQ2m5UKv6tDKJ-3f5h9raiBbRlNdnBU8=",
      itemName: "Showaat Shirt",
      date: "20-01-2023",
      amount: "$415.3",
      status: "Completed",
      customer: "Jubair",
      platform: "Walmart",
      Method: "Paypal",
    },
    {
      id: "#543",
      imgSrc:
        "https://blinkstore.in/wp-content/uploads/sites/29/2023/08/image-13-22.jpg",
      itemName: "Hoddie",
      date: "20-01-2021",
      amount: "$153",
      status: "Canceled",
      customer: "Kawsar",
      platform: "Daaraz",
      Method: "Bkash",
    },
    {
      id: "#411",
      imgSrc:
        "https://img.freepik.com/free-vector/front-basic-white-grey-bomber-jacket-isolated_1308-59980.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704844800&semt=ais",
      itemName: "VIP Jacket",
      date: "24-09-2025",
      amount: "$653",
      Method: "Payooner",
      status: "In-Progress",
      customer: "Pappu",
      platform: "Amazon",
    },
    {
      id: "#513",
      imgSrc:
        "https://blinkstore.in/wp-content/uploads/sites/29/2023/08/image-13-22.jpg",
      itemName: "Dashed Pants",
      date: "21-08-2027",
      amount: "$532",
      Method: "Nagaad",
      status: "Completed",
      platform: "Ghorer Bazar",
      customer: "Babor",
    },
    {
      id: "#652",
      imgSrc:
        "https://media.istockphoto.com/id/1178379920/photo/mens-black-blank-sweatshirt-template-from-two-sides-natural-shape-on-invisible-mannequin-for.jpg?s=612x612&w=0&k=20&c=PgHvTo9oTr0kQ2m5UKv6tDKJ-3f5h9raiBbRlNdnBU8=",
      itemName: "Mac T-Shirt",
      date: "14-12-2024",
      amount: "$145",
      status: "In-Progress",
      Method: "Google Pay",
      customer: "Sourov",
      platform: "E-Shop Dev",
    },
  ];
  return (
    <>
      <div
        data-aos="fade-up"
        className="overflow-x-auto border rounded-md mb-4 mx-4"
      >
        <table className="table-auto min-w-full text-left text-sm font-light">
          <thead className="bg-[#ebebeb] font-medium">
            <tr>
              <th scope="col" className="pl-6 pr-4 py-2.5">
                Code
              </th>
              <th scope="col" className="pr-3 py-2.5">
                Product
              </th>
              <th scope="col" className="px-6 py-2.5">
                Date
              </th>
              <th scope="col" className="px-6 py-2.5">
                Status
              </th>
              <th scope="col" className="px-6 py-2.5">
                Customer
              </th>
              <th scope="col" className="px-6 py-2.5">
                Amount
              </th>
              <th scope="col" className="px-6 py-2.5">
                Method
              </th>
              <th scope="col" className="px-6 py-2.5">
                Platform
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b cursor-pointer hover:bg-[#ebebeb] duration-300 border-dashed"
              >
                <td className="whitespace-nowrap pl-6 pr-4 text-gray-700 py-4 font-medium">
                  {item.id}
                </td>
                <td className="whitespace-nowrap pr-6 py-4 flex items-center gap-3">
                  <img
                    className="rounded-lg w-8 h-8   "
                    src={item.imgSrc}
                    alt=""
                  />
                  <span className="font-medium">{item.itemName}</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  {item.date}
                </td>
                <td className="whitespace-nowrap  text-sm font-medium">
                  <button
                    className={`bg-[#F7E4DA] ${
                      item.status === "Completed"
                        ? "bg-green-200 text-green-500"
                        : ""
                    }  ${
                      item.status === "In-Progress"
                        ? "bg-orange-200 text-orange-500"
                        : ""
                    } ${
                      item.status === "Canceled"
                        ? "bg-red-100 text-red-600"
                        : ""
                    }  rounded-md py-1 px-3 text-xs`}
                  >
                    {item.status}
                  </button>
                </td>
                <td className="whitespace-nowrap px-6 py-4">{item.customer}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.amount}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.Method}</td>
                <td className="whitespace-nowrap px-6 py-4">{item.platform}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderStatusTable;
