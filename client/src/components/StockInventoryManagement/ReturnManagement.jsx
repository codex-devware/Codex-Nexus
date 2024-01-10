import customerImg from "../../assets/mdKawsar.png";

const StockInventoryTable = () => {
  const data = [
    {
      id: 1,
      skuId: "unique123",
      productName: "Computer",
      customerImg,
      customerName: "Md Kawsar",
      returnDate: "Jan 23, 2024",
      total: "$150",
      action: "True",
    },
  ];
  return (
    <>
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
                  {item.action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StockInventoryTable;
