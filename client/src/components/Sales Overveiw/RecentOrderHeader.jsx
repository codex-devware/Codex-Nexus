import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';

const RecentOrderHeader = ({ title, isDeleted, onDelete }) => {
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
              className='border w-28 rounded-md focus:outline-[#1E40AF]'
              type='text'
            />
          </div>
          <div className=''>
            {isDeleted ? (
              <button onClick={onDelete}>Apply Delete</button>
            ) : (
              <span>
                <PiDotsThreeOutlineVerticalFill />
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentOrderHeader;
