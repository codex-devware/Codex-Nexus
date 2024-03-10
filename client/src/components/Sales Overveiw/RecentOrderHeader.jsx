const RecentOrderHeader = ({ title, isDeleted, onDelete, data, onSearch }) => {
  return (
    <>
      <div className='flex flex-wrap justify-between p-6'>
        <div className=''>
          <h1 className='text-xl font-semibold'>{title || 'Recent orders'}</h1>
        </div>
        <div className='flex flex-wrap items-center gap-6'>
          <div className='flex flex-wrap gap-2'>
            <p>Search: </p>
            <input
              onChange={(e) => onSearch(e.target.value)}
              className='border text-xs p-1 w-28 rounded-md focus:outline-[#1E40AF]'
              type='text'
            />
          </div>
          <div className=''>
            {isDeleted ? (
              <button
                className={`${
                  data?.length > 0 ? 'bg-red-500 text-white' : 'bg-slate-400'
                } py-1 px-2 rounded-lg text-xs font-semibold`}
                onClick={onDelete}
              >
                Bulk Delete
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentOrderHeader;
