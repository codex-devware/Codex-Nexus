import supplierImg from '../../assets/mdKawsar.png';
import RecentOrderHeader from '../Sales Overveiw/RecentOrderHeader';
import TopSuppliersChart from './TopSuppliersChart';
const SuppliersManagement = () => {
  const data = [
    {
      id: 1,
      skuId: 'unique123',
      productName: 'Computer',
      supplierImg: supplierImg,
      supplierName: 'Md Kawsar',
      supplyDate: 'Jan 23, 2024',
      mail: 'md.kawsar.developer@gmail.com',
      phone: '01580380982',
    },
    {
      id: 2,
      skuId: 'unique123',
      productName: 'Computer',
      supplierImg: supplierImg,
      supplierName: 'Md Kawsar',
      supplyDate: 'Jan 23, 2024',
      mail: 'md.kawsar.developer@gmail.com',
      phone: '01580380982',
    },
    {
      id: 3,
      skuId: 'unique123',
      productName: 'Computer',
      supplierImg: supplierImg,
      supplierName: 'Md Kawsar',
      supplyDate: 'Jan 23, 2024',
      mail: 'md.kawsar.developer@gmail.com',
      phone: '01580380982',
    },
  ];
  return (
    <>
      <RecentOrderHeader title={'Suppliers Management'} />
      <div className='overflow-x-auto'>
        <table className='table-auto min-w-full text-left text-sm font-light'>
          <thead className='bg-[#F4F7F9] font-medium'>
            <tr>
              <th scope='col' className='px-6 py-2.5'>
                SKU ID
              </th>
              <th scope='col' className='pr-3 py-2.5'>
                Products Name
              </th>

              <th scope='col' className='px-6 py-2.5'>
                Suppliers
              </th>
              <th scope='col' className='px-6 py-2.5'>
                Supply Date
              </th>

              <th scope='col' className='px-6 py-2.5'>
                Mail
              </th>
              <th scope='col' className='px-6 py-2.5'>
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className='border-b border-dashed'>
                <td className='whitespace-nowrap px-6 py-4 font-medium'>
                  {item.skuId}
                </td>
                <td className='whitespace-nowrap px-6 py-4 font-medium'>
                  {item.productName}
                </td>
                <td className='whitespace-nowrap pr-6 py-4 flex items-center gap-3'>
                  <img
                    className='rounded-lg w-10 h-10'
                    src={item.supplierImg}
                    alt=''
                  />
                  <span className='font-medium'>{item.supplierName}</span>
                </td>

                <td className='whitespace-nowrap px-6 py-4 font-medium'>
                  {item.supplyDate}
                </td>
                <td className='whitespace-nowrap px-6 py-4 font-medium'>
                  {item.mail}
                </td>
                <td className='whitespace-nowrap px-6 py-4 font-medium'>
                  {item.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='my-20'>
        <TopSuppliersChart />
      </div>
    </>
  );
};

export default SuppliersManagement;
