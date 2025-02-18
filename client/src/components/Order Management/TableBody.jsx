import { FaDotCircle } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import TableAction from "./TableAction";
const TableBody = ({ items }) => {
  const {
    orderCode,
    profile,
    name,
    paymentMethod,
    time,
    type,
    status,
    amount,
  } = items;
  return (
    <>
      <tr className="w-[1000px]">
        <td className="w-[1000px]">
          <table className=" mb-3 w-full text-[#4a4a4acb] ">
            <tr className="grid grid-cols-9 border-3 rounded-lg bg-white items-center">
              <td className="px-4 py-3 font-semibold">#{orderCode}</td>
              <td className="px-4 py-3 col-start-2 col-end-4">
                <span className="flex flex-wrap items-center font-semibold">
                  <img
                    className="w-[30px] mr-2 rounded-full"
                    src={profile}
                    alt="photo"
                  />
                  <span>{name}</span>
                </span>
              </td>
              <td className="px-4 py-3">{paymentMethod}</td>
              <td className="px-4 py-3">
                <span className="flex flex-wrap items-center">
                  <MdOutlineWatchLater />
                  <span className="ml-1">{time} min</span>
                </span>
              </td>
              <td className="px-4 py-3">{type}</td>
              <td
                className={`${
                  status.toLocaleLowerCase() === "delivered"
                    ? "text-highlight"
                    : status.toLocaleLowerCase() === "collected"
                    ? "text-secondary"
                    : status.toLocaleLowerCase() === "canceled"
                    ? "text-primary"
                    : "bg-accent"
                } px-4 py-3`}
              >
                <span className="flex items-center">
                  <FaDotCircle />
                  <span className="ml-1">{status}</span>
                </span>
              </td>
              <td className="px-4 py-3">${amount}</td>
              <td className="px-4 py-3 flex items-center justify-start">
                <div className="relative">
                  <TableAction />
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr> 
    </>
  );
};

export default TableBody;
