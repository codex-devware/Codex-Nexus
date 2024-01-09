import React from 'react'
import RecentOrder from './RecentOrder'

const OrderChartTracker = () => {
  return (
    <>
    <section className='flex flex-wrap'>
        <div className="lg:w-[70%] w-full">
            <RecentOrder/>
        </div>
        <div className="lg:w-[30%] w-full"></div>
    </section>
    </>
  )
}

export default OrderChartTracker