const ManagementFooter = ({
  indexOfFirstItem,
  OrdersData,
  indexOfLastItem,
  currentPage,
  paginate,
  itemsPerPage,
}) => {
  return (
    <>
      <nav
        className="flex flex-col  md:flex-row gap-4 justify-between items-start md:items-center space-y-3 md:space-y-0 py-4"
        aria-label="Table navigation"
      >
        {/* Pagination info */}
        <span className="text-sm font-normal text-gray-500 darkButton  border-2 border-gray-300 px-2 py-2 rounded-md">
          Showing
          <span className="font-semibold text-gray-900 ml-2 mr-2">
            {indexOfFirstItem + 1}-
            {indexOfLastItem > OrdersData?.length
              ? OrdersData?.length
              : indexOfLastItem}
          </span>
          of
          <span className="font-semibold text-gray-900 ml-2">
            {OrdersData?.length}
          </span>
        </span>

        {/* Pagination buttons */}
        <ul className="inline-flex items-stretch -space-x-px gap-2 rounded-md">
          {/* Previous button */}
          <li>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center justify-center h-full py-1.5 px-3 ml-0 darkButton text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Previous</span>
              &lt;
            </button>
          </li>

          {/* Pagination numbers */}
          {Array.from({
            length: Math.ceil(OrdersData?.length / itemsPerPage),
          }).map((_, index) => (
            <li key={index}>
              <button
                onClick={() => paginate(index + 1)}
                className={`flex items-center justify-center text-sm py-2 px-3 leading-tight  ${
                  currentPage === index + 1
                    ? "text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700"
                    : "text-gray-500 bg-white border darkButton border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}

          {/* Next button */}
          <li>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(OrdersData?.length / itemsPerPage)
              }
              className="flex items-center justify-center h-full py-1.5 px-3 leading-tight darkButton text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Next</span>
              &gt;
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ManagementFooter;
