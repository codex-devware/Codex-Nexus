import React from 'react'
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const ActivityHeader = () => {
  return (
    <>
        <div className="py-6 font-outfit">
            <div className="flex flex-wrap justify-between">
                <div className=""><h1 className='text-3xl font-outfit font-semibold'>User Activity Log</h1></div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-3">
                        <div className=""><MdOutlineWatchLater/></div>
                        <div className="flex flex-col">
                            <span>Last 7 Days</span>
                            <span>Compared To</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex">
                            <span>02 Jan 2024</span>
                            <span>-</span>
                            <span>08 Jan 2024</span>
                        </div>
                        <div className="">
                            <IoIosArrowDown/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ActivityHeader