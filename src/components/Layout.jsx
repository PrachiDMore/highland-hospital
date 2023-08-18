import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon" />
        <title>{title}</title>
      </Head>
      <section className='w-screen min-h-screen'>
        <Navbar />
        {children}
        <Footer />
      </section>
    </>
  )
}

export default Layout