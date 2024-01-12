import customerImg from "../../assets/mdKawsar.png";
import RecentOrderHeader from "../Sales Overveiw/RecentOrderHeader";
import ReturnManagementChart from "./ReturnManagementChart";

const ReturnOrderManagement = () => {
  const data = [
    {
      id: 1,
      skuId: "unique123",
      productName: "Computer",
      customerImg,
      customerName: "Md Kawsar",
      returnDate: "Jan 23, 2024",
      total: "$150",
    },
    {
      id: 1,
      skuId: "unique123",
      productName: "Computer",
      customerImg,
      customerName: "Md Kawsar",
      returnDate: "Jan 23, 2024",
      total: "$150",
    },
    {
      id: 1,
      skuId: "unique123",
      productName: "Computer",
      customerImg,
      customerName: "Md Kawsar",
      returnDate: "Jan 23, 2024",
      total: "$150",
    },
    {
      id: 1,
      skuId: "unique123",
      productName: "Computer",
      customerImg,
      customerName: "Md Kawsar",
      returnDate: "Jan 23, 2024",
      total: "$150",
    },
  ];
  return (
    <>
      <RecentOrderHeader title={"Return Order Management"} />
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full text-left text-sm font-light">
          <thead className="bg-[#F4F7F9] font-medium">
            <tr>
              <th scope="col" className="px-6 py-2.5">
                SKU ID
              </th>
              <th scope="col" className="pr-3 py-2.5">
                Products Name
              </th>

              <th scope="col" className="px-6 py-2.5">
                Customers
              </th>
              <th scope="col" className="px-6 py-2.5">
                Return Date
              </th>

              <th scope="col" className="px-6 py-2.5">
                Total
              </th>
              <th scope="col" className="px-6 py-2.5">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b border-dashed">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {item.skuId}
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {item.productName}
                </td>
                <td className="whitespace-nowrap pr-6 py-4 flex items-center gap-3">
                  <img
                    className="rounded-lg w-10 h-10"
                    src={item.customerImg}
                    alt=""
                  />
                  <span className="font-medium">{item.customerName}</span>
                </td>

                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {item.returnDate}
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {item.total}
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <button className="btn btn-circle bg-transparent border-none shadow-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      fill="royalblue"
                      viewBox="0 0 512 512"
                    >
                      <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                    </svg>
                  </button>
                  <button className="btn btn-circle btn-outline bg-transparent border-none shadow-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="14"
                      fill="red"
                      viewBox="0 0 448 512"
                    >
                      <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="my-20">
        <ReturnManagementChart />
      </div>
    </>
  );
};

export default ReturnOrderManagement;
