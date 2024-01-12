import { HiDotsHorizontal } from "react-icons/hi";

const AllOrderPageTable = () => {
  const data = [
    {
      id: 1,
      imgSrc:
        "https://media.istockphoto.com/id/1178379920/photo/mens-black-blank-sweatshirt-template-from-two-sides-natural-shape-on-invisible-mannequin-for.jpg?s=612x612&w=0&k=20&c=PgHvTo9oTr0kQ2m5UKv6tDKJ-3f5h9raiBbRlNdnBU8=",
      itemName: "Wow Jacket",
      code: "#352",
      amount: "$415",
      status: "Delivered",
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
    },
    {
      id: 5,
      imgSrc:
        "https://media.istockphoto.com/id/1178379920/photo/mens-black-blank-sweatshirt-template-from-two-sides-natural-shape-on-invisible-mannequin-for.jpg?s=612x612&w=0&k=20&c=PgHvTo9oTr0kQ2m5UKv6tDKJ-3f5h9raiBbRlNdnBU8=",
      itemName: "Mac T-Shirt",
      code: "#541",
      amount: "$451",
      status: "Delivered",
    },
  ];
  return (
    <>
      <div className="overflow-x-auto border rounded-md">
        <table className="table-auto min-w-full text-left text-sm font-light">
          <thead className="bg-[#ebebeb] font-medium">
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
                className="border-b cursor-pointer hover:bg-[#ebebeb] duration-300 border-dashed"
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
                        ? "bg-green-200 text-green-500"
                        : ""
                    }  ${
                      item.status === "Pending"
                        ? "bg-orange-200 text-orange-500"
                        : ""
                    } ${
                      item.status === "Canceled"
                        ? "bg-red-100 text-red-600"
                        : ""
                    }  rounded-md py-1 px-3 text-xs`}
                  >
                    {item.status}
                  </button>
                </td>

                <td className="whitespace-nowrap px-6 py-4">{item.amount}</td>
                <td className="whitespace-nowrap px-6 py-4 ">
                  <HiDotsHorizontal className="bg-gray-500 h-8 w-8 rounded-md text-white text-sm px-2 py-2" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllOrderPageTable;
