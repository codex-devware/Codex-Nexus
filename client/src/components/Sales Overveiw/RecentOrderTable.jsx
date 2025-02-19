const RecentOrderTable = () => {
  const data = [
    {
      id: 1,
      imgSrc:
        "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/1.png",
      itemName: "Decorative Plants",
      date: "20 Sep - 03.00AM",
      amount: "$637.30",
      status: "Success",
    },
    {
      id: 2,
      imgSrc: "https://fabrilife.com/products/63bc2fb22e02f-square.jpg",
      itemName: "Vip Shirt",
      date: "20 Sep - 03.00AM",
      amount: "$637.30",
      status: "Failed",
    },
    {
      id: 3,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqTXcsVzqYbPIZZwAehtw3J_1ESw898WR7AJ2tnyIIA&s",
      itemName: "Awesome Light",
      date: "20 Sep - 03.00AM",
      amount: "$637.30",
      status: "Success",
    },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full text-left text-sm font-light">
        <thead className="font-medium border">
          <tr>
            <th scope="col" className="pl-6 pr-4 py-2.5 ">
              <input type="checkbox" />
            </th>
            <th scope="col" className="pr-3 py-2.5">
              Recent Orders
            </th>
            <th scope="col" className="px-6 py-2.5">
              Orders Date
            </th>
            <th scope="col" className="px-6 py-2.5">
              Price
            </th>
            <th scope="col" className="px-6 py-2.5">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b border-dashed">
              <td className="whitespace-nowrap pl-6 pr-4 py-4 font-medium">
                <input type="checkbox" />
              </td>
              <td className="whitespace-nowrap pr-6 py-4 flex items-center gap-3">
                <img className="rounded-lg w-8 h-8" src={item.imgSrc} alt="" />
                <span className="font-medium">{item.itemName}</span>
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {item.date}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {item.amount}
              </td>
              <td className="whitespace-nowrap px-4 py-4">
                {item.status === "Success" ? (
                  <button className="bg-highlight/20 rounded-lg py-1 px-4 w-20 font-semibold text-highlight">
                    {item.status}
                  </button>
                ) : (
                  <button className="bg-primary/20 rounded-lg py-1 px-4 w-20 font-semibold text-primary">
                    {item.status}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrderTable;
