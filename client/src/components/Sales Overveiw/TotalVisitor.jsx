import React from 'react'
import { FaPeopleGroup } from "react-icons/fa6";
import { LuArrowDownLeftFromCircle } from "react-icons/lu";

const TotalVisitor = () => {
  return (
    <>
        <div className="flex flex-wrap gap-14 font-outfit border p-5 rounded-xl hover:translate-y-[-2px] duration-300 ease-in-out cursor-pointer">
            <div className="flex flex-wrap gap-4">
                <div className="">
                <div className="bg-[#f1f3ff] p-3 rounded-lg">
                <span className='text-[#1E40AF]'><FaPeopleGroup fontSize={23}/></span>
                </div>
                </div>
                <div className="">
                    <p className='text-[16px]'>Total Visitor</p>
                    <h1 className='flex flex-wrap items-end gap-1'><span className='text-[#6B7280] text-sm'>$</span><h2 className=' font-medium text-2xl'>24,580</h2></h1>
                </div>
            </div>
            <div className="flex flex-wrap items-end">
                <div className="flex flex-wrap items-center border border-[#EE7214] text-[#FF004D] px-2 py-1 rounded-xl text-sm gap-1">
                    <span className='text-[13px]'><LuArrowDownLeftFromCircle/></span>
                    <span>20%</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default TotalVisitor