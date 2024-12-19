import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import Experience from '@/components/experience/Experience'
import Portfolio from '@/components/portfolio/Portfolio'
import type { Metadata } from 'next'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

export const metadata: Metadata = {
    title: 'My Portfolio',
}

export default function Page() {
    return <main>
        <Header />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
    </main>
}