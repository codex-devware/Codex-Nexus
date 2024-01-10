import React from 'react'
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const ActivityHeader = () => {
  return (
    <>
        <div className="pt-6 font-outfit border-b w-full">
            <div className="flex flex-wrap sm:justify-between justify-center gap-2 sm:gap-0 items-center pb-6">
                <div className=""><h1 className='text-2xl font-outfit font-semibold'>User Activity Log</h1></div>
                <div className="flex items-center gap-5 bg-slate-100 px-3 py-1 rounded-xl">
                    <div className="flex items-center gap-3">
                        <div className=""><MdOutlineWatchLater/></div>
                        <div className="flex flex-col">
                            <span className='text-sm'>Last 7 Days</span>
                            <span className='text-xs'>Compared To</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex text-xs">
                            <span>02 Jan 2024</span>
                            <span>-</span>
                            <span>08 Jan 2024</span>
                        </div>
                        <div className="">
                            <IoIosArrowDown fontSize={13}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b">
                <div className="border-b flex items-center w-[10rem] gap-2 border-[#a1a1a1]">
                    <button className=''>Live Activity Log</button>
                    <span className='text-xs px-2 py-1 text-white bg-red-600 rounded-full'>3</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default ActivityHeader