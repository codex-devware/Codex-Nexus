import { Link } from 'react-router-dom';

const UsersHeader = () => {
  return (
    <>
      <div className='py-6'>
        <div className='flex flex-wrap justify-between'>
          <div className=''>
            <h1 className='text-3xl font-outfit font-semibold'>Users</h1>
          </div>
          <div className=''>
            <Link
              to='/security/register'
              className='hover:translate-y-[-2px] darkButton duration-300 ease-in-out flex flex-wrap items-center gap-2 border-2 py-2 px-3 rounded-md font-outfit font-medium'
            >
              <span className='text-[#1E40AF]'></span> User Application
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersHeader;
