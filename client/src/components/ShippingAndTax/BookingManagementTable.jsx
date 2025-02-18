import RecentOrderHeader from "../Sales Overveiw/RecentOrderHeader";

const BookingManagementTable = ({ data }) => {
  return (
    <>
      <RecentOrderHeader title={"Return Order Management"} />
      <div className="overflow-x-auto ">
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
                Pickup
              </th>

              <th scope="col" className="px-6 py-2.5">
                delivery
              </th>
              <th scope="col" className="px-6 py-2.5">
                Status
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
                  {item.pickup}
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {item.delivery}
                </td>
                <td className="whitespace-nowrap  text-sm font-medium">
                  <button
                    className={`bg-[#F7E4DA] ${
                      item.status === "Delivered"
                        ? "bg-highlight/20 text-highlight"
                        : ""
                    }  ${
                      item.status === "Pending"
                        ? "bg-secondary/20 text-secondary"
                        : ""
                    } ${
                      item.status === "Canceled"
                        ? "bg-primary/20 text-primary"
                        : ""
                    }  rounded-md py-1 px-3 text-xs`}
                  >
                    {item.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookingManagementTable;
