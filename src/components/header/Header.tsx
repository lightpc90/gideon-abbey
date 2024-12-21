import React from 'react'
import Link from 'next/link'
import Nav from '../nav/Nav'
import { Button } from '../ui/button'
import MobileNav from '../mobileNav/MobileNav'

const Header = () => {
    return (
        <header className='py-8 xl:py-12'>
            <div className='container mx-auto flex items-center justify-between ' >
                <Link href={'/'} className='flex items-center gap-2 text-3xl font-semibold'>
                    {/* logo */}
                    <h1>Gideon</h1>
                    <span className='text-accent'>.</span>
                </Link>
                {/* desktop navigation */}
                <div className='hidden gap-4 xl:flex items-center'>
                <Nav />
                <Link href={'/contact'}>
                    <Button>Get in touch</Button>
                </Link>
                </div>

                {/* mobile nav */}
                <div className='xl:hidden'>
                    <MobileNav/>
                </div>
            </div>
        </header>
    )
}

export default Header