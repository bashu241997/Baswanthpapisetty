import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Routelayout from "../routes/RutLayout"

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routelayout />
      </main>
      <Footer />
    </div>
  )
}

export default Layout