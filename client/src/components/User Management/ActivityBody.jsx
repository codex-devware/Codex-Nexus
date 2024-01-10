import React from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaCircleDot } from "react-icons/fa6";

const ActivityBody = () => {

    const saleData = [
    {
        title: 'New Sale',
        color: '#ff5959',
        icon: <MdOutlineShoppingBag fontSize={20} />,
        time: '5 Min Ago',
        message: 'Exciting news! Customer John Doe just made a purchase. Order #12345 has been successfully placed',
    },
    {
        title: 'New Account Activity',
        color: '#616161',
        icon: <MdManageAccounts fontSize={20} />,
        time: '10 Min Ago',
        message: 'New account activity detected. User Jane Smith has registered successfully.',
    },
];
  return (
    <>
        <section className='font-outfit'>
            <div className="flex items-center gap-4 my-5 justify-center">
                <span className='h-[2px] rounded-xl w-40 bg-gradient-to-r from-white via-gray-300 to-[#7c7c7c]'></span>
                <span>Today</span>
                <span className='h-[2px] rounded-xl w-40 bg-gradient-to-r from-[#7c7c7c] via-gray-300 to-white'></span>
            </div>
            <div className="w-full">
                
                <div className="flex flex-col gap-2">
                    {saleData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between bg-[#f0f0f0] p-3 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className={`bg-[${item.color}] p-3 rounded-full`}>
                                <span className='text-white '>{item.icon}</span>
                            </div>
                            <div className="">
                                <div className="flex items-center gap-3">
                                    <span className='text-base font-semibold'>{item.title}</span>
                                    <span className="flex items-center gap-1">
                                        <span className='p-1 rounded-full bg-[#444444]'></span>
                                        <span className='text-xs'>{item.time}</span>
                                    </span>
                                </div>
                                <span>{item.message}</span>
                            </div>
                        </div>
                        <div className="">
                            <span className={`text-[${item.color}]`}><FaCircleDot/></span>
                        </div>
                    </div>
          
                ))}
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default ActivityBody