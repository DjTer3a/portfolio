/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Head from 'next/head'
import { CameraIcon } from '@heroicons/react/solid'
import Layout from '../components/Layouts'
import HeaderComponent from "../components/common/header";
import FooterComponent from "../components/common/footer";

export default function Example() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-page-bluelight to-page-bluedarker overflow-hidden">
    <Head>
      <title>About</title>
      </Head>
      <Layout></Layout>
      <HeaderComponent></HeaderComponent>
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h3 className="mt-2 text-6xl leading-8 font-extrabold tracking-tight text-page-green sm:text-6xl">
              Meet Mostafa
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="/profilepic2.webp"
                    alt="Mostafa looking cool.t"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon className="flex-none w-5 h-5 text-page-green" aria-hidden="true" />
                  <span className=" text-page-green ml-2">Photograph by Waqas Bukhari</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-2xl text-white">
              A Computer Engineering Student who started coding at an early age and fell in love with web development. 
              Experienced and skilled in Laravel, PHP, ReactJS, Next.js, Node.js, Vue.js, MySql, Java, Kotlin, ReactNative, 
              and GitHub. Full Stack Web Developer, Full Stack Andriod developer with Excellent communication and leadership skills.
              </p>
            </div>
            <div className="text-lg mt-5 prose prose-indigo text-white mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
              Experienced and skilled in Laravel, PHP, ReactJS, Nextjs, Nodejs, Vuejs, MySql, 
              Java, Kotlin, ReactNative, and GitHub. Full Stack Web Developer, 
              Full Stack Andriod developer with Excellent communication and leadership skills.
              </p>
              <p>
              I believe in:-
              </p>
              <ul text-lg role="list">
                <li>Spreading ideas as an essential tool to change the world.</li>
                <li>Building the best product at an affordable cost.</li>
                <li>Creating a better everyday life for every customer.</li>
                <li>Helping people and businesses generate passive income.</li>
              </ul>
              <p>
              Passionate about Music, Movies, Science, Cycling, Running, Fitness, Diet, and Programming. 
              If you would like to build your application/website around any of these topics, a special discount is waiting for you.
              </p>
              <p>
              My mission is :-
              To make the world a better place by bringing your vision to life.
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  )
}
