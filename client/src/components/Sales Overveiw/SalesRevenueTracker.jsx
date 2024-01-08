import React from 'react'
import TotalSales from './TotalSales'
import TotalRevenue from './TotalRevenue'
import TotalVisitor from './TotalVisitor'

const SalesRevenueTracker = () => {
  return (
    <>
        <section className='flex flex-wrap justify-around items-center mt-8'>
            <TotalSales/>
            <TotalRevenue/>
            <TotalVisitor/>
        </section>
    </>
  )
}

export default SalesRevenueTracker