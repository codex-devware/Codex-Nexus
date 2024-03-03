import ManagementFooter from '@/components/Order Management/ManagementFooter';
import ManagementTopVar from '@/components/Order Management/ManagementTopVar';
import TableBody from '@/components/Order Management/TableBody';
import TableHeader from '@/components/Order Management/TableHeader';
import { useState } from 'react';
import orders from '../../../../public/orderHistory.json';

const OrderHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const OrdersData = orders.orderHistory;
  // Filtered and paginated data
  const filteredAndPaginatedData = OrdersData?.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Logic to calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndPaginatedData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Logic to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log('c', currentItems.length);
  return (
    <>
      <section data-aos='fade-up' className='bg-gray-50 p-3 sm:p-5 w-auto'>
        <div>
          <div className=' relative  overflow-hidden'>
            <h1 className='font-outfit text-[26px] font-bold mb-3'>
              Order History
            </h1>
            <ManagementTopVar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <div className=''>
              <div className='overflow-x-auto'>
                <table className='text-[14px] text-left text-gray-500 font-outfit w-[1000px] xl:w-full overflow-x-auto'>
                  <TableHeader />
                  {currentItems.length === 0 ? (
                    <div>
                      <h2 className='text-center text-2xl pt-3'>
                        No Order Found
                      </h2>
                    </div>
                  ) : (
                    <>
                      {currentItems?.map((items) => (
                        <TableBody key={items.id} items={items} />
                      ))}
                    </>
                  )}
                </table>
              </div>
            </div>
            <ManagementFooter
              OrdersData={OrdersData}
              indexOfFirstItem={indexOfFirstItem}
              indexOfLastItem={indexOfLastItem}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              paginate={paginate}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderHistory;
