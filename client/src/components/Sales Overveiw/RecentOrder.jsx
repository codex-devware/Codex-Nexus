import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import recentOrdersData from '../../../public/recentOrders.json';
import ManagementFooter from '../Order Management/ManagementFooter';
import RecentOrderHeader from './RecentOrderHeader';
import RecentOrderTable from './RecentOrderTable';
const RecentOrder = () => {
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSearch = (searchText) => {
    setSearchValue(searchText);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Logic to calculate indexes of items to be displayed
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = recentOrdersData.recentOrders.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className='font-outfit w-full'>
        <div data-aos='fade-up' className='shadow-lg rounded-lg'>
          <RecentOrderHeader onSearch={handleSearch} title={'Recent Order'} />
          <RecentOrderTable searchValue={searchValue} />
          <div className='px-6'>
            <ManagementFooter
              currentPage={currentPage}
              indexOfFirstItem={indexOfFirstItem}
              indexOfLastItem={indexOfLastItem}
              itemsPerPage={itemsPerPage}
              paginate={paginate}
              currentItems={currentItems}
              OrdersData={recentOrdersData.recentOrders}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentOrder;
