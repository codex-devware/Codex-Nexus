const TableHeader = () => {
  return (
    <>
      <tr>
        <td className="">
          <table className=" w-full  text-black mb-3 font-semibold">
            <tr className="grid grid-cols-9 border-2 rounded-lg bg-white">
              <th scope="col" className="px-4 py-3">
                Id
              </th>
              <th scope="col" className="px-4 py-3 col-start-2 col-end-4">
                Name
              </th>
              <th scope="col" className="px-4 py-3">
                Payment
              </th>
              <th scope="col" className="px-4 py-3">
                Time
              </th>
              <th scope="col" className="px-4 py-3">
                Type
              </th>
              <th scope="col" className="px-4 py-3">
                Status
              </th>
              <th scope="col" className="px-4 py-3">
                Total
              </th>
              <th scope="col" className="px-4 py-3">
                <span className="">Actions</span>
              </th>
            </tr>
          </table>
        </td>
      </tr>
    </>
  );
};

export default TableHeader;
