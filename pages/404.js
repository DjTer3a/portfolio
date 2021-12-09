/* This example requires Tailwind CSS v2.0+ */
import Head from 'next/head'
import Layout from '../components/Layouts'
import FooterComponent from "../components/common/footer";

export default function Example() {
  return (
    <main
      className="min-h-screen bg-cover bg-top sm:bg-top"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1631031651060-424d82e511de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
      }}
    >
      <Head>
      <title>404</title>
      </Head>
      <Layout></Layout>
      
      
      <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
        <p className="text-sm font-semibold text-white uppercase tracking-wide">404 error</p>
        <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Not every road leads to a destination, but don't let it discourage you from taking every road.
        </h1>
        <p className="mt-2 text-lg font-medium text-white">
          It looks like the page you’re looking for doesn't exist.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-page-bluelight hover:text-page-green bg-opacity-25 hover:bg-opacity-75 hover:bg-white"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </main>
  )
}