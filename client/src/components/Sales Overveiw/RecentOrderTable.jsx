const RecentOrderTable = ({ searchValue }) => {
  const data = [
    {
      id: 1,
      imgSrc:
        'https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/1.png',
      itemName: 'Decorative Plants',
      date: '20 Sep - 03.00AM',
      amount: '$637.30',
      status: 'Success',
    },
    {
      id: 2,
      imgSrc: 'https://fabrilife.com/products/63bc2fb22e02f-square.jpg',
      itemName: 'Vip Shirt',
      date: '20 Sep - 03.00AM',
      amount: '$637.30',
      status: 'Failed',
    },
    {
      id: 3,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqTXcsVzqYbPIZZwAehtw3J_1ESw898WR7AJ2tnyIIA&s',
      itemName: 'Awesome Light',
      date: '20 Sep - 03.00AM',
      amount: '$637.30',
      status: 'Success',
    },
  ];
  const searchResult = data.filter((item) => {
    return Object.values(item).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchValue.toLowerCase())
    );
  });
  const tableColumns = [
    {
      id: 1,
      title: 'Recent Orders',
    },
    {
      id: 2,
      title: 'Orders Date',
    },
    {
      id: 3,
      title: 'Price',
    },
    {
      id: 4,
      title: 'Status',
    },
  ];
  return (
    <>
      <div className='overflow-x-auto'>
        <table className='table-container text-left text-sm font-light'>
          <thead className='bg-[#F4F7F9] font-medium'>
            <tr className='grid grid-cols-4 pl-16'>
              {tableColumns.map((item) => (
                <th className='py-4' key={item.id}>
                  {item.title}
                </th>
              ))}
            </tr>
          </thead>
        </table>
        <table className='table-container text-left text-sm font-light'>
          {searchResult.length > 0 ? (
            <tbody>
              {searchResult.map((item) => (
                <tr
                  key={item.id}
                  className='table-container pl-16 grid grid-cols-4 border-b border-dashed'
                >
                  <td className='py-4 flex items-center gap-3'>
                    <img
                      className='rounded-lg w-8 h-8'
                      src={item.imgSrc}
                      alt=''
                    />
                    <span className='font-medium'>{item.itemName}</span>
                  </td>
                  <td className='py-4 font-medium'>{item.date}</td>
                  <td className='py-4 font-medium'>{item.amount}</td>
                  <td className='py-4'>
                    {item.status === 'Success' ? (
                      <button className='bg-[#a6ee9d73] rounded-lg py-1 px-4 w-20 font-semibold text-[#159b36]'>
                        {item.status}
                      </button>
                    ) : (
                      <button className='bg-[#f7c6c6e3] rounded-lg py-1 px-4 w-20 font-semibold text-[#db5a5a]'>
                        {item.status}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <div className='text-center py-5 text-2xl font-bold'>
              No Product Found!
            </div>
          )}
        </table>
      </div>
    </>
  );
};

export default RecentOrderTable;
