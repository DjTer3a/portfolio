import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../components/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export default function Home({ allPostsData }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-page-bluelight to-page-bluedarker overflow-hidden">  
    <Layout home>
      <Head>
      <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}><div className="text-center">
        

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <div className ="transition duration-500 ease-in-out px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-page-bluelight hover:bg-white hover:text-page-green hover:bg-opacity-5">
            <Link href={`/Blog/${id}`}>
              <li className={utilStyles.listItem} key={id}>
                <a>{title}</a>
              
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li></Link>
            </div>
          ))}
        </ul></div>
      </section>
            
    </Layout></div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}