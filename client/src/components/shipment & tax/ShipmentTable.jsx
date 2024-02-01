//import UserAction from "./UserAction";

const ShipmentTable = ({children}) => {
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
        <table className='table-auto min-w-full text-left text-sm font-light'>
          <thead className='bg-[#F4F7F9] font-medium'>
            <tr>
              {tableHeader.map((el) => (
                <th scope='col' key={el} className='pl-6 pr-3 py-2.5'>
                  {el}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShipmentTable;
