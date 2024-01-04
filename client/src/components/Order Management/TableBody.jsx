import React from 'react'
import { MdOutlineWatchLater } from 'react-icons/md';
import { FaDotCircle } from 'react-icons/fa';

const TableBody = ({ items }) => {
  const { orderCode, profile, name, paymentMethod,time,type,status,amount } = items;
  return (
    <>
    <tr>
        <td className=''>
          <table className=' mb-3 w-full text-[#4a4a4a] overflow-hidden'>
            <tr className='grid grid-cols-9 border-2 rounded-lg bg-white items-center'>
              <td className='px-4 py-3 font-semibold'>#{orderCode}</td>
              <td className='px-4 py-3 col-start-2 col-end-4'>
                <span className='flex flex-wrap items-center font-semibold'>
                  <img
                    className='w-[30px] mr-2 rounded-full'
                    src={profile}
                    alt='photo'
                  />
                  <span>{name}</span>
                </span>
              </td>
              <td className='px-4 py-3'>{paymentMethod}</td>
              <td className='px-4 py-3'>
                <span className='flex flex-wrap items-center'>
                  <MdOutlineWatchLater />
                  <span className='ml-1'>{time} min</span>
                </span>
              </td>
              <td className='px-4 py-3'>{type}</td>
              <td className='px-4 py-3 text-[#F0AA18]'>
                <span className='flex flex-wrap items-center'>
                  <FaDotCircle />
                  <span className='ml-1'>{status}</span>
                </span>
              </td>
              <td className='px-4 py-3'>${amount}</td>
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
    </>
  )
}

export default TableBody