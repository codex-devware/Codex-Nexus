import ManagementTopVar from './ManagementTopVar';
import ManagementFooter from './ManagementFooter';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const OrderHistory = () => {
  const OrdersData = [
    {
      id: 1,
      orderCode: '2632',
      profile: 'https://i.ibb.co/XjjZqKL/03.jpg',
      name: 'Sourov Dey',
      paymentMethod: 'Cash',
      time: '07',
      type: 'Delivery',
      status: 'Delivered',
      amount: 2999,
    },
    {
      id: 2,
      orderCode: '2631',
      profile: 'https://avatars.githubusercontent.com/u/54439025?v=4',
      name: 'IKHTIAR UDDIN',
      paymentMethod: 'Paid',
      time: '09',
      type: 'Delivery',
      status: 'Delivered',
      amount: 4852,
    },
    {
      id: 3,
      orderCode: '2630',
      profile: 'https://avatars.githubusercontent.com/u/88099075?v=4',
      name: 'Mohammad Jubair',
      paymentMethod: 'Cash',
      time: '10',
      type: 'Delivery',
      status: 'Delivered',
      amount: 8562,
    },
  ];
  return (
    <>
      <section className='bg-gray-50 p-3 sm:p-5 w-auto'>
        <div className='mx-auto max-w-screen-xl px-4 lg:px-12'>
          <div className=' relative  overflow-hidden'>
            <h1 className='font-outfit text-[26px] font-bold mb-3'>
              Order History
            </h1>
            <ManagementTopVar />
            <div className=''>
              <div className=''>
                <table className='text-[14px] text-left text-gray-500 font-outfit'>
                  <TableHeader />
                  {OrdersData.map((items) => (
                    <TableBody key={items.id} items={items} />
                  ))}
                </table>
              </div>
            </div>
            <ManagementFooter />
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderHistory;
