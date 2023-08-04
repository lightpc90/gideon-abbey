import { Inter } from 'next/font/google'
import Head from 'next/head'
import Layout from '../components/Layout'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import Portfolio from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const siteProperties = {title: 'Gideon Abbey Portfolio', description: 'This is Gideon Abbey&apos;s portfolio website. He&apos;s a Web3/Software developer, follow the link to know more about him',  imageUrl: '/images/my pictures/OpenGraphMetaTag.png', pageUrl: 'www.gideonabbey.tech'}
  return (
    <>
      <Head>
                {/* Open Graph meta tags */}
        <meta property="og:title" content={siteProperties.title} />
        <meta property="og:description" content={siteProperties.description} />
        <meta property="og:image" content={siteProperties.imageUrl} />
        <meta property="og:url" content={siteProperties.pageUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags (optional but recommended) */}
        <meta name="twitter:title" content={siteProperties.title} />
        <meta name="twitter:description" content={siteProperties.description} />
        <meta name="twitter:image" content={siteProperties.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>



      <Layout>
        <About/>
        <Experience/>
        <Portfolio/>
        <Contact/>
      </Layout>
    </>
  )
}
