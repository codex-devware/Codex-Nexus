const OrderDetailsHistoryTop = ({ setFilter }) => {
  const btnClass = 'px-2 py-2 text-xs rounded-md border shadow';
  return (
    <div className='font-outfit w-full'>
      <div className=' shadow border dark:border-0 rounded-t-lg !border-b-0'>
        <div className='flex flex-wrap justify-between p-6'>
          <div className=''>
            <h1 className='text-md font-semibold'>Order Details</h1>
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <button
              onClick={() => setFilter('all')}
              className={`bg-slate-50 text-gray-700  ${btnClass}`}
            >
              All Orders
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`bg-slate-50 text-green-500 ${btnClass}`}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter('in-progress')}
              className={`text-orange-400 bg-slate-50 ${btnClass}`}
            >
              In-Progress
            </button>
            <button
              onClick={() => setFilter('canceled')}
              className={`text-red-500 bg-slate-50 ${btnClass}`}
            >
              Canceled
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsHistoryTop;
