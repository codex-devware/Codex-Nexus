import orderDetailsHistory from "../../../../public/orderDetails.json";
const tableHeader = [
  "product",
  "date",
  "status",
  "customer",
  "amount",
  "platform",
];
const OrderDetailsHistoryTable = ({ filter }) => {
  const data = orderDetailsHistory?.orderDetails.filter((item) =>
    filter === "all" ? true : item.status === filter
  );
  const tdClass = "py-3 flex justify-center items-center";
  return (
    <div className="overflow-x-auto border !border-t-0 rounded-b-md bg-white">
      <table className="table-container table-auto min-w-full text-left text-sm font-light">
        <thead className="table-container border font-medium">
          <tr className="table-container grid grid-cols-6">
            {tableHeader.map((item) => (
              <th scope="col" key={item} className={`capitalize ${tdClass}`}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-container">
          {data.map((item) => (
            <tr
              key={item.id}
              className="table-container grid grid-cols-6 border-b cursor-pointer hover:bg-[#ebebeb58] duration-300 border-dashed"
            >
              <td className={`${tdClass} !justify-start pl-6`}>
                <img
                  className="rounded-lg w-8 h-8   "
                  src={item.imgSrc}
                  alt=""
                />
                <span className="font-medium ps-2">{item.itemName}</span>
              </td>
              <td className={`text-sm ${tdClass}`}>{item.date}</td>
              <td className={`text-sm font-medium ${tdClass}`}>
                <button
                  className={`bg-[#F7E4DA] ${
                    item.status === "completed"
                      ? "bg-highlight/20 text-highlight"
                      : ""
                  }  ${
                    item.status === "in-progress"
                      ? "bg-secondary/20 text-secondary"
                      : ""
                  } ${
                    item.status === "canceled"
                      ? "bg-primary/20 text-primary"
                      : ""
                  }  rounded-md py-1 px-3 text-xs`}
                >
                  {item.status}
                </button>
              </td>
              <td className={`${tdClass}`}>{item.customer}</td>
              <td className={`${tdClass}`}>{item.amount}</td>
              <td className={`${tdClass}`}>{item.platform}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetailsHistoryTable;
