import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
// Add this import at the top of the file
import utilStyles from '../../components/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
      <div className="text-center">
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        
        <div className="text-page-green">
          <Date dateString={postData.date} />
        </div>
        </div>
        <div className ="py-12 px-16 tracking-tight">
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}