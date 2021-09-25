/* This example requires Tailwind CSS v2.0+ */

import Typewriter from 'typewriter-effect';
import Head from 'next/head'
import Layout from '../components/Layouts'
import HeaderComponent from "../components/common/header";
import FooterComponent from "../components/common/footer";

export default function Example() {
  return (
    <div className="bg-gradient-to-b from-page-bluelight to-page-bluedarker">
      <Head>
        <title>Home Page</title>
      </Head>
    <Layout></Layout>
    <HeaderComponent></HeaderComponent>
      <div className="relative overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
         <div className=" sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block ">Ask me to build your</span>
                <span className="block mt-6 mx-auto max-w-7xl px-4 sm:mt-6 sm:px-6 text-page-green">
                <Typewriter
                  options={{
                    strings: ['Professional Website','Personal Website', 'Android App', ],
                    autoStart: true,
                    loop: true,
                  }}/>
                  </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Hi I am Mostafa. I build elegant and functional websites and applications for ,
                Small Businesses, Independent Creators, and anyone who needs a website.
                Show the world what you are really about using cutting-edge technologies such as:- 
                Nextjs, Vercel, Laravel, and TailwindCSS.
              </p>
            </div>
          </div>
          </div>

        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <img
              className="relative rounded-lg shadow-lg"
              src="/123.PNG"
              alt="screenshot"
            />
          </div>
        </div>
      </div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-white text-xl font-semibold tracking-wide">
            Hire me on:-
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
            <a href="https://www.fiverr.com/mostafahigazy">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-20" src="/fiverr.png" alt="Fiverr" />
              </div>
            </a>
            <a href="https://www.upwork.com/o/profiles/users/~012a4278b6b59e6072/">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="/upwork.png"
                alt="UpWork"
              />
            </div>
            </a>
            <a href="/Contact">
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="/directly.png"
                alt="Directly"
              />
            </div>
            </a>
            <a href="https://www.linkedin.com/in/mostafa-higazy-577576132">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="/linkedin.png" alt="LinkedIn" />
            </div>
            </a>
          </div>
        </div>
        <FooterComponent></FooterComponent>
    </div>
  )
}
