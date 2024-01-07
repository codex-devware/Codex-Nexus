import { MdOutlineWatchLater } from 'react-icons/md';
import { FaDotCircle } from 'react-icons/fa';

const OrderHistory = () => {
  return (
    <>
      <section className='bg-gray-50 p-3 sm:p-5'>
        <div className='mx-auto max-w-screen-xl px-4 lg:px-12'>
          <div className=' relative  overflow-hidden'>
            <h1 className='font-outfit text-[26px] font-bold mb-3'>
              Order History
            </h1>
            <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 py-4'>
              <div className='w-full md:w-1/2'>
                <form className='flex items-center'>
                  <label htmlFor='simple-search' className='sr-only'>
                    Search
                  </label>
                  <div className='relative w-full'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                      <svg
                        aria-hidden='true'
                        className='w-5 h-5 text-gray-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <input
                      type='text'
                      id='simple-search'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#3b82f6] outline-[#3b82f6] focus:border-[#3b82f6] block w-full pl-10 p-2 '
                      placeholder='Search'
                      required=''
                    />
                  </div>
                </form>
              </div>
              <div className='w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0'>
                <button
                  type='button'
                  className='flex items-center justify-center text-white bg-[#1d4ed8] hover:bg-[#1e40af] focus:ring-4 focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-4 py-2 focus:outline-none'
                >
                  <svg
                    className='h-3.5 w-3.5 mr-2'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      clipRule='evenodd'
                      fillRule='evenodd'
                      d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
                    />
                  </svg>
                  Add product
                </button>
                <div className='flex items-center space-x-3 w-full md:w-auto'>
                  <button
                    id='actionsDropdownButton'
                    data-dropdown-toggle='actionsDropdown'
                    className='w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#1d4ed8] focus:z-10 focus:ring-4 focus:ring-gray-200'
                    type='button'
                  >
                    <svg
                      className='-ml-1 mr-1.5 w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path
                        clipRule='evenodd'
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      />
                    </svg>
                    Actions
                  </button>
                  <div
                    id='actionsDropdown'
                    className='hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow '
                  >
                    <ul
                      className='py-1 text-sm text-gray-700 '
                      aria-labelledby='actionsDropdownButton'
                    >
                      <li>
                        <a
                          href='#'
                          className='block py-2 px-4 hover:bg-gray-100 '
                        >
                          Mass Edit
                        </a>
                      </li>
                    </ul>
                    <div className='py-1'>
                      <a
                        href='#'
                        className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100'
                      >
                        Delete all
                      </a>
                    </div>
                  </div>
                  <button
                    id='filterDropdownButton'
                    data-dropdown-toggle='filterDropdown'
                    className='w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#1d4ed8] focus:z-10 focus:ring-4 focus:ring-gray-200'
                    type='button'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                      className='h-4 w-4 mr-2 text-gray-400'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Filter
                    <svg
                      className='-mr-1 ml-1.5 w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path
                        clipRule='evenodd'
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      />
                    </svg>
                  </button>
                  <div
                    id='filterDropdown'
                    className='z-10 hidden w-48 p-3 bg-white rounded-lg shadow'
                  >
                    <h6 className='mb-3 text-sm font-medium text-gray-900'>
                      Choose brand
                    </h6>
                    <ul
                      className='space-y-2 text-sm'
                      aria-labelledby='filterDropdownButton'
                    >
                      <li className='flex items-center'>
                        <input
                          id='apple'
                          type='checkbox'
                          value=''
                          className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-[#2563eb] focus:ring-[#3b82f6]  focus:ring-2'
                        />
                        <label
                          htmlFor='apple'
                          className='ml-2 text-sm font-medium text-gray-900'
                        >
                          Apple (56)
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='overflow-x-scroll'>
              <div className=' min-w-[1080px]'>
                <table className='w-full text-[14px] text-left text-gray-500 font-outfit'>
                  <tr>
                    <td className=''>
                      <table className=' w-full  text-black  font-semibold'>
                        <tr className='grid grid-cols-9 border-2 rounded-lg bg-white'>
                          <th scope='col' className='px-4 py-3'>
                            Id
                          </th>
                          <th
                            scope='col'
                            className='px-4 py-3 col-start-2 col-end-4'
                          >
                            Name
                          </th>
                          <th scope='col' className='px-4 py-3'>
                            Payment
                          </th>
                          <th scope='col' className='px-4 py-3'>
                            Time
                          </th>
                          <th scope='col' className='px-4 py-3'>
                            Type
                          </th>
                          <th scope='col' className='px-4 py-3'>
                            Status
                          </th>
                          <th scope='col' className='px-4 py-3'>
                            Total
                          </th>
                          <th scope='col' className='px-4 py-3'>
                            <span className=''>Actions</span>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td className=''>
                      <table className=' my-3 w-full overflow-hidden'>
                        <tr className='grid grid-cols-9 border-2 rounded-lg bg-white'>
                          <td className='px-4 py-3'>#2632</td>
                          <td className='px-4 py-3 col-start-2 col-end-4'>
                            <span className='flex flex-wrap items-center'>
                              <img
                                className='w-[26px] mr-1 rounded-full'
                                src='https://i.ibb.co/XjjZqKL/03.jpg'
                                alt='photo'
                              />
                              <span>Sourov dey</span>
                            </span>
                          </td>
                          <td className='px-4 py-3'>Cash</td>
                          <td className='px-4 py-3'>
                            <span className='flex flex-wrap items-center'>
                              <MdOutlineWatchLater />
                              <span className='ml-1'>07 min</span>
                            </span>
                          </td>
                          <td className='px-4 py-3'>Delivery</td>
                          <td className='px-4 py-3 text-[#F0AA18]'>
                            <span className='flex flex-wrap items-center'>
                              <FaDotCircle />
                              <span className='ml-1'>Delivered</span>
                            </span>
                          </td>
                          <td className='px-4 py-3'>$2999</td>
                          <td className='px-4 py-3 flex items-center justify-start'>
                            <button
                              id='apple-imac-27-dropdown-button'
                              data-dropdown-toggle='apple-imac-27-dropdown'
                              className='inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none '
                              type='button'
                            >
                              <svg
                                className='w-5 h-5'
                                aria-hidden='true'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                              </svg>
                            </button>
                            <div
                              id='apple-imac-27-dropdown'
                              className='hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow'
                            >
                              <ul
                                className='py-1 text-sm text-gray-700'
                                aria-labelledby='apple-imac-27-dropdown-button'
                              >
                                <li>
                                  <a
                                    href='#'
                                    className='block py-2 px-4 hover:bg-gray-100 '
                                  >
                                    Show
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href='#'
                                    className='block py-2 px-4 hover:bg-gray-100'
                                  >
                                    Edit
                                  </a>
                                </li>
                              </ul>
                              <div className='py-1'>
                                <a
                                  href='#'
                                  className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100'
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <nav
              className='flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 py-4'
              aria-label='Table navigation'
            >
              <span className='text-sm font-normal text-gray-500'>
                Showing
                <span className='font-semibold text-gray-900 '>1-10</span>
                of
                <span className='font-semibold text-gray-900'>1000</span>
              </span>
              <ul className='inline-flex items-stretch -space-x-px'>
                <li>
                  <a
                    href='#'
                    className='flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
                  >
                    <span className='sr-only'>Previous</span>
                    <svg
                      className='w-5 h-5'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    aria-current='page'
                    className='flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 '
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                  >
                    <span className='sr-only'>Next</span>
                    <svg
                      className='w-5 h-5'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderHistory;
