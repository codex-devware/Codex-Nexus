//import UserAction from "./UserAction";

const ShipmentTableHead = ({ children }) => {
  const tableHeader = [
    'ID Number',
    'Status',
    'Customer',
    'Contact',
    'Pickup',
    'Delivery',
    'Trunk',
    ' Weight,kg',
    'tracking details',
  ];
  return (
    <>
      <div className='overflow-x-auto font-outfit rounded-xl border-dashed'>
        <table className='table-auto table-container text-left text-sm font-light'>
          <thead className='bg-[#F4F7F9] font-medium grid grid-cols-9 table-container darkTableHeader'>
            {tableHeader.map((el) => (
              <th scope='col' key={el} className='py-2.5'>
                {el}
              </th>
            ))}
          </thead>
        </table>
        <table className='table-container'>
          <tbody className='table-container'>{children}</tbody>
        </table>
      </div>
    </>
  );
};

export default ShipmentTableHead;
