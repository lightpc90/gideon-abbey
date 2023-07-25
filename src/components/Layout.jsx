import React from 'react'
import { Inter } from 'next/font/google'
import Nav from './nav/Nav'
import Footer from './footer/Footer'

const inter = Inter({ subsets: ['latin'] })

const Layout = ({children}) => {
  return (
    <div>
        <Nav/>
        <main
      className={` min-h-screen items-center ${inter.className}`}
    >
      {children}
    </main>  
        <Footer/>
    </div>
  )
}

export default Layout