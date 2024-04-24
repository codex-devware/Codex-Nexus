import { useState } from 'react';
import CustomerStatics from './CustomerStatics';
import OrderDetailsHistoryTable from './OrderDetailsHistoryTable';

import OrderDetailsHistoryTop from './OrderDetailsHistoryTop';
import OrderManaSalesOverview from './OrderManaSalesOverview';

const OrderDetailsHistory = () => {
  const [filter, setFilter] = useState('all');
  return (
    <section className='flex flex-wrap gap-2 px-4'>
      <div data-aos='fade-up' className='lg:w-[100%] w-full'>
        <div className='font-outfit w-full'>
          <OrderDetailsHistoryTop setFilter={setFilter}/>
          <OrderDetailsHistoryTable filter={filter}/>
        </div>
      </div>

      <div
        data-aos='fade-up'
        className='lg:w-[48%] mx-auto mt-6 rounded-md mb-6 darkChart  shadow-md border-dashed border-[1px] w-full'
      >
        <CustomerStatics />
      </div>

      <div
        data-aos='fade-down'
        className='lg:w-[48%] mx-auto mt-6 rounded-md mb-6 darkChart shadow-md border-dashed border-[1px] w-full'
      >
        <OrderManaSalesOverview />
      </div>
    </section>
  );
};

export default OrderDetailsHistory;
