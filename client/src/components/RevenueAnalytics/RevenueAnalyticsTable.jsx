const RevenueAnalyticsTable = () => {
  const data = [
    {
      id: "#245",
      imgSrc:
        "https://media.istockphoto.com/id/1178379920/photo/mens-black-blank-sweatshirt-template-from-two-sides-natural-shape-on-invisible-mannequin-for.jpg?s=612x612&w=0&k=20&c=PgHvTo9oTr0kQ2m5UKv6tDKJ-3f5h9raiBbRlNdnBU8=",
      itemName: "Showaat Shirt",
      stock: "9764",
      amount: "$415.3",
      status: true,
      growth: "+54%",
      sold: "1546",
      earning: "$9879441",
      Method: "Paypal",
    },
    {
      id: "#543",
      imgSrc:
        "https://blinkstore.in/wp-content/uploads/sites/29/2023/08/image-13-22.jpg",
      itemName: "Hoddie",
      stock: "9724",
      amount: "$153",
      status: false,
      sold: "5642",
      growth: "-34%",
      earning: "$185641",
      Method: "Bkash",
    },
    {
      id: "#411",
      imgSrc:
        "https://img.freepik.com/free-vector/front-basic-white-grey-bomber-jacket-isolated_1308-59980.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704844800&semt=ais",
      itemName: "VIP Jacket",
      stock: "7954",
      amount: "$653",
      Method: "Payooner",
      status: true,
      growth: "+84%",
      sold: "7794",
      earning: "$97515",
    },
    {
      id: "#513",
      imgSrc:
        "https://blinkstore.in/wp-content/uploads/sites/29/2023/08/image-13-22.jpg",
      itemName: "Dashed Pants",
      stock: "6545",
      amount: "$532",
      Method: "Nagaad",
      status: true,
      growth: "+61%",
      earning: "$345468",
      sold: "5422",
    },
    {
      id: "#652",
      imgSrc:
        "https://media.istockphoto.com/id/1178379920/photo/mens-black-blank-sweatshirt-template-from-two-sides-natural-shape-on-invisible-mannequin-for.jpg?s=612x612&w=0&k=20&c=PgHvTo9oTr0kQ2m5UKv6tDKJ-3f5h9raiBbRlNdnBU8=",
      itemName: "Mac T-Shirt",
      stock: "4516",
      amount: "$145",
      status: false,
      growth: "-73%",
      Method: "Google Pay",
      sold: "4492",
      earning: "$464314",
    },
  ];
  return (
    <>
      <div className="flex justify-between px-4 mb-4">
        <h1 className="text-sm sm:text-lg font-bold font-sora">
          Top Selling Products
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-2 font-outfit">
          <select className="select select-accent select-sm w-32">
            <option disabled selected className="">
              Sort By Sold
            </option>
            <option>Groceris</option>
            <option>Clothing</option>
            <option>Gadgets</option>
          </select>
          <select className="select select-secondary select-sm w-32">
            <option disabled selected className="">
              Monthly
            </option>
            <option>Groceris</option>
            <option>Clothing</option>
            <option>Gadgets</option>
          </select>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="overflow-x-auto border rounded-md mb-4 mx-4"
      >
        <table className="table-auto min-w-full text-left text-sm font-light">
          <thead className="bg-[#ebebeb6c] text-gray-700 border font-semibold text-sm">
            <tr>
              <th scope="col" className="pl-6 pr-4 py-2.5">
                Code
              </th>
              <th scope="col" className="pl-6 pr-4 py-2.5">
                Product
              </th>
              <th scope="col" className="pr-3 py-2.5">
                Price
              </th>
              <th scope="col" className="px-6 py-2.5">
                Stock
              </th>
              <th scope="col" className="px-6 py-2.5">
                Growth
              </th>
              <th scope="col" className="px-6 py-2.5">
                Sold
              </th>
              <th scope="col" className="px-6 py-2.5">
                Earning
              </th>
              <th scope="col" className="px-6 py-2.5">
                Gateway
              </th>
            </tr>
          </thead>
          <tbody className=" font-normal font-outfit">
            {data.map((item) => (
              <tr
                key={item.id}
                className="border cursor-pointer bg-white  hover:bg-[#ebebeb] duration-300 border-dashed "
              >
                <td className="whitespace-nowrap pl-6 pr-4 text-gray-700 py-4 font-medium">
                  {item.id}
                </td>
                <td className="whitespace-nowrap pr-6 py-4 flex items-center gap-2">
                  <img
                    className="rounded-lg w-10 h-10 border-2 px-2 py-2   "
                    src={item.imgSrc}
                    alt=""
                  />
                  <span className="font-medium">{item.itemName}</span>
                </td>
                <td className="whitespace-nowrap py-4 text-sm">
                  {item.amount}
                </td>

                <td className="whitespace-nowrap px-6 py-4">{item.stock}</td>
                <td className="whitespace-nowrap px-4 text-sm font-medium">
                  <button
                    className={`bg-[#F7E4DA] ${
                      item.status === true
                        ? "bg-highlight/20 text-highlight"
                        : " bg-primary/20 text-primary"
                    }  
                     rounded-md py-1 px-3 text-xs`}
                  >
                    {item.growth}
                  </button>
                </td>

                <td className="whitespace-nowrap px-6 py-4">{item.sold}</td>
                <td className="whitespace-nowrap px-6 py-4 font-bold">
                  {item.earning}
                </td>
                <td className="whitespace-nowrap px-6 py-4">{item.Method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RevenueAnalyticsTable;
