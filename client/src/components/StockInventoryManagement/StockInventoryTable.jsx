const StockInventoryTable = () => {
  const data = [
    {
      id: 1,
      imgSrc:
        "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/1.png",
      productName: "Decorative Plants",
      skuId: "unique123",
      addedDate: "Jan 23, 2024",
      price: "$637.30",
      category: "Computer",
      brand: "Acer",
      inStockQTY: "10",
      status: "Success",
    },
    {
      id: 1,
      imgSrc:
        "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/1.png",
      productName: "Decorative Plants",
      skuId: "unique123",
      addedDate: "Jan 23, 2024",
      price: "$637.30",
      category: "Computer",
      brand: "Acer",
      inStockQTY: "10",
      status: "Success",
    },
    {
      id: 1,
      imgSrc:
        "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/1.png",
      productName: "Decorative Plants",
      skuId: "unique123",
      addedDate: "Jan 23, 2024",
      price: "$637.30",
      category: "Computer",
      brand: "Acer",
      inStockQTY: "10",
      status: "Success",
    },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full text-left text-sm font-light">
        <thead className="bg-white border font-medium">
          <tr>
            <th scope="col" className="pl-6 pr-4 py-2.5">
              <input type="checkbox" />
            </th>
            <th scope="col" className="pr-3 py-2.5">
              Products Name
            </th>
            <th scope="col" className="px-6 py-2.5">
              SKU ID
            </th>
            <th scope="col" className="px-6 py-2.5">
              Category
            </th>
            <th scope="col" className="px-6 py-2.5">
              Brand
            </th>

            <th scope="col" className="px-6 py-2.5">
              Added Date
            </th>
            <th scope="col" className="px-6 py-2.5">
              Price
            </th>
            <th scope="col" className="px-6 py-2.5">
              Instock QTY
            </th>
            <th scope="col" className="px-6 py-2.5">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b border-dashed bg-white">
              <td className="whitespace-nowrap pl-6 pr-4 py-4 font-medium">
                <input type="checkbox" />
              </td>
              <td className="whitespace-nowrap pr-6 py-4 flex items-center gap-3">
                <img className="rounded-lg" src={item.imgSrc} alt="" />
                <span className="font-medium">{item.productName}</span>
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {item.skuId}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {item.category}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {item.brand}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {item.addedDate}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {item.price}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {item.inStockQTY}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <button className="bg-highlight/90 rounded-lg py-2 px-5 font-semibold text-[#f4f8f5]">
                  Succeed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockInventoryTable;
