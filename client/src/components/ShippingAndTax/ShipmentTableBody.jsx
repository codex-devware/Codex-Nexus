import { GrMap } from "react-icons/gr";

export default function ShipmentTableBody({ shipmentTable }) {
  return (
    <>
      {shipmentTable.map((item) => (
        <tr
          key={item.id}
          className="capitalize border-b py-3 ps-3 !text-sm first-letter:border-dashed grid grid-cols-9 justify-center items-center table-container bg-white"
        >
          <td className="capitalize">{item.idNumber}</td>

          <td className="capitalize">
            <span
              className={`${
                item.status === "in transit"
                  ? "bg-primary/20 text-primary"
                  : item.status === "delivered"
                  ? "text-highlight bg-highlight/30"
                  : "bg-secondary/30 text-secondary"
              } rounded-lg py-1 px-4 w-20 font-normal`}
            >
              {item.status}
            </span>
          </td>
          <td className="capitalize">{item.customer}</td>
          <td className="capitalize">{item.contact}</td>
          <td className="capitalize">{item.pickup}</td>
          <td className="capitalize">{item.delivery}</td>
          <td className="capitalize ">{item.trunk}</td>
          <td className="capitalize pl-3">{item.weight}</td>
          <td className="flex justify-center capitalize text-center">
            <button
              className={`size-5 bg-gray-100 rounded  w-20 flex justify-center items-center hover:bg-gray-200 duration-150 py-4 ${
                item.status === "in transit"
                  ? "text-secondary bg-secondary/20"
                  : item.status === "delivered"
                  ? " text-highlight bg-highlight/20"
                  : "text-primary bg-primary/20"
              }`}
            >
              <GrMap />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}
