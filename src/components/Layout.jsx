import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <section className='w-screen min-h-screen'>
        <Navbar />
        {children}
        <Footer/>
      </section>
    </>
  )
}

export default Layout