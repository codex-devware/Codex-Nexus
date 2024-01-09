import React from 'react'
import UsersTable from './UsersTable'
import UsersHeader from './UsersHeader'
import ManagementFooter from '../Order Management/ManagementFooter'

const Users = () => {
  return (
    <>
        <section className=''>
            <UsersHeader/>
            <UsersTable/>
            <ManagementFooter/>
        </section>
    </>
  )
}

export default Users