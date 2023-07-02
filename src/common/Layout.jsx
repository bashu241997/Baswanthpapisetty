import React from 'react'
import Hrader from './Hrader'
import Footer from './Footer'
import Routelayout from "../routes/RutLayout"

const Layout = () => {
  return (
    <div className="container min-h-screen flex flex-col justify-between mx-auto sm:px-6 px-4">
    <Hrader />
    <Routelayout />
    <Footer />
  </div>
  )
}

export default Layout