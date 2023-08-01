import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import Portfolio from '../components/portfolio/Portfolio'
import Testimonials from '../components/testimonials/Testimonials'
import Contact from '../components/contact/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <About/>
        <Experience/>
        <Portfolio/>
        <Contact/>
      </Layout>
    </>
  )
}
