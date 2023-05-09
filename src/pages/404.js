/* This example requires Tailwind CSS v2.0+ */
import Head from 'next/head'
import Link from 'next/link'

export default function Example() {
  return (
    <main className="min-h-screen">
      <Head>
        <title>404</title>
      </Head>

      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-800 dark:text-zinc-100">
          404 error
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Not every road leads to a destination, but don’t let it discourage you
          from taking every road.
        </h1>
        <p className="mt-2 text-lg font-medium text-zinc-800 dark:text-zinc-100">
          It looks like the page you’re looking for doesn’t exist.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className=" hover:text-page-green inline-flex items-center rounded-md border border-transparent bg-opacity-25 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-500 hover:bg-opacity-75 dark:text-zinc-100"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </main>
  )
}
