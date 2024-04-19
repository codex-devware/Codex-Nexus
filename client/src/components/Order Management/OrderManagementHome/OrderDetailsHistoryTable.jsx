import orderDetailsHistory from '../../../../public/orderDetails.json';
const tableHeader = [
  'product',
  'date',
  'status',
  'customer',
  'amount',
  'platform',
];
const OrderDetailsHistoryTable = ({ filter }) => {
  const data = orderDetailsHistory?.orderDetails.filter((item) =>
    filter === 'all' ? true : item.status === filter
  );
  const tdClass = 'py-3 flex justify-center items-center';
  return (
    <>
      <div className='overflow-x-auto border !border-t-0 rounded-b-md '>
        <table className='table-container table-auto min-w-full text-left text-sm font-light'>
          <thead className='table-container bg-[#ebebeb] dark:text-[#1E293B] font-medium'>
            <tr className='table-container grid grid-cols-6'>
              {tableHeader.map((item) => (
                <th scope='col' key={item} className={`capitalize ${tdClass}`}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='table-container'>
            {data.map((item) => (
              <tr
                key={item.id}
                className='table-container grid grid-cols-6 border-b cursor-pointer hover:bg-[#ebebeb58] dark:hover:bg-[#2d3e5b] duration-300 border-dashed'
              >
                <td className={`${tdClass} !justify-start pl-6`}>
                  <img
                    className='rounded-lg w-8 h-8 me-1  '
                    src={item.imgSrc}
                    alt=''
                  />
                  <span className='font-medium'>{item.itemName}</span>
                </td>
                <td className={`text-sm ${tdClass}`}>{item.date}</td>
                <td className={`text-sm font-medium ${tdClass}`}>
                  <button
                    className={`bg-[#F7E4DA] ${
                      item.status === 'completed'
                        ? 'bg-green-200 text-green-500'
                        : ''
                    }  ${
                      item.status === 'in-progress'
                        ? 'bg-orange-200 text-orange-500'
                        : ''
                    } ${
                      item.status === 'canceled'
                        ? 'bg-red-100 text-red-600'
                        : ''
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
    </>
  );
};

export default OrderDetailsHistoryTable;
