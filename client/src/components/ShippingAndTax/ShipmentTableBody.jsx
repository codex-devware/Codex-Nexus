import { GrMap } from 'react-icons/gr';

export default function ShipmentTableBody({ shipmentTable }) {
  return (
    <>
      {shipmentTable.map((item) => (
        <tr key={item.id} className='capitalize border-b border-dashed'>
          <td className='capitalize whitespace-nowrap px-6 py-4 flex items-center gap-3'>
            {item.idNumber}
          </td>

          <td className='capitalize whitespace-nowrap px-6 py-4 font-medium'>
            <span
              className={`${
                item.status === 'in transit'
                  ? 'bg-blue-300 text-white'
                  : item.status === 'delivered'
                  ? 'text-white bg-green-300'
                  : 'bg-red-300 text-white'
              } rounded-lg py-1 px-4 w-20 font-normal`}
            >
              {item.status}
            </span>
          </td>
          <td className='capitalize whitespace-nowrap px-7 py-4 font-medium'>
            {item.customer}
          </td>
          <td className='whitespace-nowrap px-7 py-4 capitalize'>
            {item.contact}
          </td>
          <td className='capitalize whitespace-nowrap px-6 py-4'>
            {item.pickup}
          </td>
          <td className='capitalize whitespace-nowrap px-6 py-4'>
            {item.delivery}
          </td>
          <td className='capitalize whitespace-nowrap px-6 py-4'>
            {item.trunk}
          </td>
          <td className='capitalize text-center whitespace-nowrap px-6 py-4'>
            {item.weight}
          </td>
          <td className='flex justify-center capitalize text-center whitespace-nowrap px-6 py-4'>
            <button
              className={`size-5 bg-gray-100 rounded  w-20 flex justify-center items-center hover:bg-gray-200 duration-150 py-4 ${
                item.status === 'in transit'
                  ? 'text-blue-500 '
                  : item.status === 'delivered'
                  ? ' text-green-500'
                  : 'text-red-500 '
              }`}
            >
              <GrMap />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}
