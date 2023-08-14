import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <section className='w-screen min-h-screen'>
        <Navbar />
        {children}
      </section>
    </>
  )
}

export default Layout