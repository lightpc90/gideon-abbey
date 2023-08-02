import React from 'react'
import { Inter } from 'next/font/google'
import Nav from './nav/Nav'
import Footer from './footer/Footer'
import Header from './header/Header'
import { Container } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <Nav/>
        {children} 
        <Footer/>
    </>
  )
}

export default Layout