import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import EditOrder from "./EditOrder";

const AllOrderPageTable = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [data, setData] = useState([
    {
      id: 1,
      imgSrc:
        "https://media.istockphoto.com/id/1178379920/photo/mens-black-blank-sweatshirt-template-from-two-sides-natural-shape-on-invisible-mannequin-for.jpg?s=612x612&w=0&k=20&c=PgHvTo9oTr0kQ2m5UKv6tDKJ-3f5h9raiBbRlNdnBU8=",
      itemName: "Wow Jacket",
      code: "#352",
      amount: "$415",
      status: "Delivered",
      isDeleted: false,
    },
    {
      id: 2,
      imgSrc:
        "https://blinkstore.in/wp-content/uploads/sites/29/2023/08/image-13-22.jpg",

      itemName: "Showaat Shirt",
      date: "20-01-2022",
      amount: "$156.44",
      status: "Pending",
      code: "#643",
      isDeleted: false,
    },
    {
      id: 3,
      imgSrc:
        "https://img.freepik.com/free-vector/front-basic-white-grey-bomber-jacket-isolated_1308-59980.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704844800&semt=ais",
      itemName: "Beam Shirt",
      date: "20-01-2027",
      amount: "$644.40",
      status: "Delivered",

      code: "#655",
      isDeleted: false,
    },
    {
      id: 4,
      imgSrc:
        "https://blinkstore.in/wp-content/uploads/sites/29/2023/08/image-13-22.jpg",
      itemName: "Hunk Pants",
      date: "20-01-2027",
      amount: "$956",
      status: "Pending",
      code: "#242",
      isDeleted: false,
    },
    {
      id: 5,
      imgSrc:
        "https://media.istockphoto.com/id/1178379920/photo/mens-black-blank-sweatshirt-template-from-two-sides-natural-shape-on-invisible-mannequin-for.jpg?s=612x612&w=0&k=20&c=PgHvTo9oTr0kQ2m5UKv6tDKJ-3f5h9raiBbRlNdnBU8=",
      itemName: "Mac T-Shirt",
      code: "#541",
      amount: "$451",
      status: "Delivered",
      isDeleted: false,
    },
  ]);

  const handleDeleted = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const [selectedItem, setSelectedItem] = useState(null);
  const handleEdit = (item) => {
    setSelectedItem(item);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedItem({
      ...selectedItem,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const updatedData = data.map((item) =>
      item.id === selectedItem.id ? selectedItem : item
    );
    setData(updatedData);
    setSelectedItem(null);
  };
  return (
    <>
      <div data-aos="fade-up" className="overflow-x-auto border rounded-md">
        <table className="table-auto min-w-full text-left text-sm font-light">
          <thead className="bg-white font-medium">
            <tr>
              <th scope="col" className="pl-6 pr-4 py-2.5"></th>
              <th scope="col" className="pr-3 py-2.5">
                Product
              </th>
              <th scope="col" className="px-6 py-2.5">
                Code
              </th>
              <th scope="col" className="px-6 py-2.5">
                Status
              </th>

              <th scope="col" className="px-6 py-2.5">
                Amount
              </th>
              <th scope="col" className="px-6 py-2.5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b cursor-pointer bg-white hover:bg-[#ebebeb] duration-300 border-dashed"
              >
                <td className="whitespace-nowrap pl-6 pr-4 py-4 font-medium"></td>
                <td className="whitespace-nowrap pr-6 py-4 flex items-center gap-3">
                  <img
                    className="rounded-lg w-8 h-8   "
                    src={item.imgSrc}
                    alt=""
                  />
                  <span className="font-medium">{item.itemName}</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  {item.code}
                </td>
                <td className="whitespace-nowrap  text-sm font-medium">
                  <button
                    className={`bg-[#F7E4DA] ${
                      item.status === "Delivered"
                        ? "bg-highlight/20 text-highlight"
                        : ""
                    }  ${
                      item.status === "Pending"
                        ? "bg-primary/20 text-primary"
                        : ""
                    } ${
                      item.status === "Canceled"
                        ? "bg-primary/50 text-primary"
                        : ""
                    }  rounded-md py-1 px-3 text-xs`}
                  >
                    {item.status}
                  </button>
                </td>
                <td className="whitespace-nowrap px-6 py-4">{item.amount}</td>{" "}
                <td className="whitespace-nowrap flex gap-3 px-6 py-4 ">
                  <svg
                    onClick={() => handleDeleted(item.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-9 px-2 py-2 rounded bg-primary/10 text-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>

                  <svg
                    onClick={(e) => {
                      handleEdit(item);
                      onOpen(e);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-9 px-2 py-2 rounded bg-blue/30 text-secondary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <EditOrder
        isOpen={isOpen}
        onOpen={onOpen}
        handleOnSubmit={handleOnSubmit}
        onOpenChange={onOpenChange}
        handleInputChange={handleInputChange}
      />
    </>
  );
};

export default AllOrderPageTable;
