import { useState } from "react";
import usersData from "../../../public/userData.json";
import ManagementFooter from "../Order Management/ManagementFooter";
import UserAction from "./UserAction";
const UsersTable = () => {
  const [updatedData, setUpdatedData] = useState(usersData?.users || []);
  const handleFilter = (id) => {
    const filterData = updatedData.filter((user) => user.id !== id);
    setUpdatedData(filterData);
  };
  const handleBlocked = (id) => {
    const filterData = updatedData.filter((user) =>
      user.id === id ? (user.status = "blocked") : user
    );
    setUpdatedData(filterData);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Logic to calculate indexes of items to be displayed
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = updatedData.slice(indexOfFirstItem, indexOfLastItem);

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
                  {item.status === "active" ? (
                    <button className="bg-[#a6ee9d73] rounded-lg py-1 px-4 w-20 font-normal text-[#159b36]">
                      {item.status}
                    </button>
                  ) : (
                    <button className="bg-[#f7c6c6e3] rounded-lg py-1 px-2 w-20 font-normal text-[#db5a5a]">
                      {item.status}
                    </button>
                  )}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <UserAction
                    handleFilter={handleFilter}
                    onBlocked={handleBlocked}
                    id={item.id}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ManagementFooter
        indexOfFirstItem={indexOfFirstItem}
        OrdersData={updatedData}
        indexOfLastItem={indexOfLastItem}
        currentPage={currentPage}
        paginate={paginate}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};

export default UsersTable;
