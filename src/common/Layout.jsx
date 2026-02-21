import React from 'react'
import Hrader from './Hrader'
import Footer from './Footer'
import Routelayout from "../routes/RutLayout"

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hrader />
      <main className="flex-1">
        <Routelayout />
      </main>
      <Footer />
    </div>
  )
}

export default Layout