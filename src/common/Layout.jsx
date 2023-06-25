import React from 'react'
import Hrader from './Hrader'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className="container min-h-screen flex flex-col justify-between mx-auto px-4">
    <Hrader />
    <main>{children}</main>
    <Footer />
  </div>
  )
}

export default Layout