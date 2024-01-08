import React from 'react'
import OverveiwHeader from './OverveiwHeader'
import SalesRevenueTracker from './SalesRevenueTracker'
import OrderChartTracker from './OrderChartTracker'

const SalesOverveiw = () => {
  return (
    <>
        <section className='mx-auto max-w-screen-xl px-4 lg:px-12'>
            <OverveiwHeader/>
            <SalesRevenueTracker/>
            <OrderChartTracker/>
        </section>
        
    </>
  )
}

export default SalesOverveiw