import { useState } from "react";
import ManagementFooter from "../Order Management/ManagementFooter";
import UserAction from "./UserAction";

const UsersTable = () => {
  const data = [
    {
      id: 1,
      imgSrc: "https://avatars.githubusercontent.com/u/121354343?v=4",
      Name: "Sourov Dey",
      userName: "sourovdey",
      date: "09/01/2024",
      email: "developer.sourovdey@gmail.com",
      role: "Admin",
      lastActive: "12 min ago",

      status: "Active",
    },
    {
      id: 2,
      imgSrc: "https://avatars.githubusercontent.com/u/54439025?v=4",
      Name: "IKHTIAR UDDIN",
      userName: "ikhtiarbabor",
      date: "09/01/2024",
      email: "ikhtiarbabor@gmail.com",
      role: "Editor",
      lastActive: "10 min ago",
      status: "Active",
    },
    {
      id: 3,
      imgSrc: "https://avatars.githubusercontent.com/u/96495318?v=4",
      Name: "Md Kawsar",
      userName: "KawsarCoder",
      date: "09/01/2024",
      email: "md.kawsar.developer@gmail.com",
      role: "Subscriber",
      lastActive: "22 min ago",
      status: "Deactive",
    },
    {
      id: 4,
      imgSrc: "https://avatars.githubusercontent.com/u/88099075?v=4",
      Name: "Mohammad Jubair",
      userName: "jubair-jx",
      date: "09/01/2024",
      email: "jubair.official97@gmail.com",
      role: "Author",
      lastActive: "32 min ago",
      status: "Active",
    },
    {
      id: 5,
      imgSrc: "https://avatars.githubusercontent.com/u/73684377?v=4",
      Name: "Pappu Dey",
      userName: "coderpappu",
      date: "09/01/2024",
      email: "pappudeydeveloper@gmail.com",
      role: "Admin",
      lastActive: "52 min ago",
      status: "Deactive",
    },
    {
      id: 6,
      imgSrc: "https://avatars.githubusercontent.com/u/114326603?v=4",
      Name: "Nasifa Talukder",
      userName: "NasifaTalukder",
      date: "09/01/2024",
      email: "developer.nasifa@gmail.com",
      role: "Contributor",
      lastActive: "03 min ago",
      status: "Deactive",
    },
    {
      id: 7,
      imgSrc: "https://avatars.githubusercontent.com/u/88099075?v=4",
      Name: "Mohammad Jubair",
      userName: "jubair-jx",
      date: "09/01/2024",
      email: "jubair.official97@gmail.com",
      role: "Author",
      lastActive: "32 min ago",
      status: "Active",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Logic to calculate indexes of items to be displayed
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="overflow-x-auto font-outfit">
        <table className="table-auto min-w-full text-left text-sm font-light">
          <thead className="bg-[#F4F7F9] font-medium">
            <tr>
              <th scope="col" className="pl-6 pr-4 py-2.5">
                Name
              </th>
              <th scope="col" className="pr-3 py-2.5">
                Register Date
              </th>
              <th scope="col" className="px-6 py-2.5">
                Email
              </th>
              <th scope="col" className="px-6 py-2.5">
                Account Type
              </th>
              <th scope="col" className="px-6 py-2.5">
                Last Active
              </th>
              <th scope="col" className="px-6 py-2.5">
                Status
              </th>
              <th scope="col" className="px-6 py-2.5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((item) => (
              <tr key={item.id} className="border-b border-dashed">
                <td className="whitespace-nowrap px-6 py-4 flex items-center gap-3">
                  <img className="rounded-lg w-10" src={item.imgSrc} alt="" />
                  <div className="flex flex-col">
                    <span className="font-medium">{item.Name}</span>
                    <span className="">{item.userName}</span>
                  </div>
                </td>
                <td className="whitespace-nowrap  py-4 font-medium">
                  <span>{item.date}</span>
                </td>

                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {item.email}
                </td>
                <td className="whitespace-nowrap px-7 py-4 font-medium">
                  {item.role}
                </td>
                <td className="whitespace-nowrap px-7 py-4">
                  {item.lastActive}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {item.status === "Active" ? (
                    <button className="bg-[#a6ee9d73] rounded-lg py-1 px-4 w-20 font-normal text-[#159b36]">
                      {item.status}
                    </button>
                  ) : (
                    <button className="bg-[#f7c6c6e3] rounded-lg py-1 px-2 w-20 font-normal text-[#db5a5a]">
                      {item.status}
                    </button>
                  )}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center">
                  <UserAction />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ManagementFooter
        indexOfFirstItem={indexOfFirstItem}
        OrdersData={data}
        indexOfLastItem={indexOfLastItem}
        currentPage={currentPage}
        paginate={paginate}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};

export default UsersTable;
