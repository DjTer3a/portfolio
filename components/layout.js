import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from './utils.module.css'
import Link from 'next/link'

import { CameraIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Portfolio', href: 'Portfolio' },
  { name: 'Blog', href: 'Blog' },
  // add blog
  { name: 'About', href: 'About' },
  { name: 'Contact', href: 'Contact' },
]
const footerNavigation = {
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/jfgiaat',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/not_really_sane/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/mostafa2001711',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/DjTer3a',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

const name = 'A Tedious Mess/Dev Life Blog'
export const siteTitle = 'A Tedious Mess'


export default function Layout({ children, home }) {
  return (
    
    <div className={styles.container}>
      
    <div className="bg-gradient-to-b from-page-bluelight to-page-bluedarker overflow-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
      <div className="relative pt-6 pb-16 sm:pb-24">
    <Popover>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="/">
                      <span className="sr-only">Workflow</span>
                      <img className=" h-16 utilStyles.borderCircle rounded-full" src="/profilepic.png" alt="Picture of the author" id = "logo"/>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="transition duration-500 ease-in-out hover:bg-page-white bg-page-bluelight rounded-md p-2 inline-flex items-center justify-center text-white hover:text-page-green hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 hover:bg-opacity-5">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:space-x-10">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-white hover:text-page-green">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                  <span className="inline-flex rounded-md shadow">
                    <a
                      href="/CV.pdf"
                      className="transition duration-500 ease-in-out inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-page-bluelight hover:bg-white hover:text-page-green hover:bg-opacity-5"
                    >
                      Download CV
                    </a>
                  </span>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-page-bluelight ring-1 ring-page-bluelight ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                    <a href="/">
                    <img className="h-16 utilStyles.borderCircle rounded-full" src="/profilepic.png" alt="Picture of the author" id = "logo"/>
                    
                   </a>

                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="transition duration-500 ease-in-out bg-page-bluelight rounded-md p-2 inline-flex items-center justify-center text-white hover:text-page-green hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 hover:bg-opacity-5" >
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className=" px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="transition duration-500 ease-in-out bg-page-bluelight block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:text-page-green hover:bg-opacity-5"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="/CV.pdf"
                    className="transition duration-500 ease-in-out bg-page-bluelight block w-full px-5 py-3 text-center font-medium text-white hover:bg-white hover:text-page-green hover:bg-opacity-5"
                  >
                    Download CV
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
        

        
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className="text-white">
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </div>
          </>
        ) : (
          <>
            <div className ="transition duration-500 ease-in-out inline-flex items-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-page-bluelight hover:bg-white hover:text-page-green hover:bg-opacity-5">
            <h2 className={utilStyles.headingLg}>
              <Link href="/Blog">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
            </div>
          </>
        )}
      </header>
      <div className ="text-white text-justify">
      <main>{children}</main>
      </div><footer className="" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <p className="text-white text-base">
                 Making the world a better place by bringing your vision to life.
              </p>
              <div className="flex space-x-6">
                {footerNavigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="transition duration-500 ease-in-out text-white hover:text-page-green">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
            <p className="text-base text-white xl:text-center">
              &copy; 2021 Mostafa Higazy. All rights reserved.
            </p>
        </div>
      </footer>
    </div>


    <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Ubuntu;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    



    </div>
  )
}