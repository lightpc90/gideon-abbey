import React from 'react'
import { Inter } from 'next/font/google'
import Nav from './nav/Nav'
import Footer from './footer/Footer'
import Header from './header/Header'
import { Container } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <Nav/>
        <Container css={{p: "$18"}}>
      {children}
    </Container>  
        <Footer/>
    </div>
  )
}

export default Layout