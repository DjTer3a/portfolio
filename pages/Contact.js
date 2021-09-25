/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          'warm-gray': colors.warmGray,
          teal: colors.teal,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import Head from 'next/head'
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import Layout from '../components/Layouts'
import HeaderComponent from "../components/common/header";
import FooterComponent from "../components/common/footer";

const offices = [
  { id: 1, Language: 'Arabic', proficiency: ['Native Proficiency'] },
  { id: 2, Language: 'English', proficiency: ['Bilingual Proficiency'] },
  { id: 3, Language: 'Turkish', proficiency: ['Professional Working Proficiency'] },
  { id: 4, Language: 'French', proficiency: ['Basic Proficeincy'] },
]


export default function Example() {

      // 2. Hold a message in state to handle the response from our API.
      const [message, setMessage] = useState("");

      function sendEmail(e){
      e.preventDefault();
      emailjs.sendForm("service_ngb4ul3",
      "template_x7psu6w",
      e.target,
      "user_UI3imnhySFgrWOQAphitg").then(res=>{
        console.log(res);
      }).catch(err=>console.log(err),
      setMessage(err=>console.log(err))
      );
      e.target.reset()

      

      setMessage(
        "You have made contact! 🎉 We will get back to you ASAP."
      );
}
  return (
    <div className="min-h-screen bg-gradient-to-b from-page-bluelight to-page-bluedarker">
      <Head>
      <title>Contact</title>
      </Head>
      <Layout></Layout>
      <HeaderComponent></HeaderComponent>
      <main className="overflow-hidden">
        {/* Header */}
        <div className="bg-warm-page-yellow">
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
          <div className="py-5 lg:py-5">
            <div className="z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-page-green sm:text-5xl lg:text-6xl">
                Get in touch
              </h1>
              <p className="mt-6 text-xl text-white max-w-3xl">
                Send me a message using the contact form below, and I will get in contact with you as soon as possible.
              </p>
            </div>
          </div>
        </div>
        {/* Contact section */}
        <section className="relative" aria-labelledby="contact-heading">
          <div className="absolute w-full h-1/2 bg-warm-page-yellow" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative shadow-xl">
              <h2 id="contact-heading" className="sr-only">
                Contact me
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                <div className="relative overflow-hidden py-10 px-6 sm:px-10 xl:p-12">
                  {/* Decorative angle backgrounds */}
                  <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-page-green">Contact information</h3>
                  <p className="mt-6 text-base text-teal-50 max-w-3xl">
                    You can also contact me directly using any of the links below or using the links at the bottom of every page.
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-teal-50">
                      <PhoneIcon className="flex-shrink-0 w-6 h-6 text-teal-200" aria-hidden="true" />
                      
                      <span className="transition duration-500 ease-in-out text-white hover:text-page-green ml-3">
                        <a href="tel:+90 (552) 724-9616">+90 (552) 724-9616</a>
                      </span>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-teal-50">
                      <MailIcon className="flex-shrink-0 w-6 h-6 text-teal-200" aria-hidden="true" />
                      <span className="transition duration-500 ease-in-out text-white hover:text-page-green ml-3">
                        <a  href="mailto:sasa2001711@gmail.com">sasa2001711@gmail.com</a>
                      </span>
                    </dd>
                  </dl>
                  <ul role="list" className="mt-8 flex space-x-12">
                    <li>
                      <a className="transition duration-500 ease-in-out text-white hover:text-page-green" href="https://www.facebook.com/jfgiaat">
                        <span className="sr-only">Facebook</span>
                        <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className="transition duration-500 ease-in-out text-white hover:text-page-green" href="https://www.instagram.com/not_really_sane/">
                        <span className="sr-only">Instagram</span>
                        <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className="transition duration-500 ease-in-out text-white hover:text-page-green" href="https://twitter.com/mostafa2001711">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact form */}
                
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-page-green">Send me a message</h3>
                  <form action="?" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  onSubmit={sendEmail}
                  >
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-page-green">
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          required
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="py-3 px-4 block w-full shadow-sm text-page-green focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-page-green">
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          required
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="py-3 px-4 block w-full shadow-sm text-page-green focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-page-green">
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          required
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          className="py-3 px-4 block w-full shadow-sm text-page-green focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label htmlFor="phone" className="block text-sm font-medium text-page-green">
                          Phone
                        </label>
                        <span id="phone-optional" className="text-sm text-white">
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="py-3 px-4 block w-full shadow-sm text-page-green focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                          aria-describedby="phone-optional"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-page-green">
                        Subject
                      </label>
                      <div className="mt-1">
                        <input
                          required
                          type="text"
                          name="subject"
                          id="subject"
                          className="py-3 px-4 block w-full shadow-sm text-page-green focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label htmlFor="message" className="block text-sm font-medium text-page-green">
                          Message
                        </label>
                        <span id="message-max" className="text-sm text-white">
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          required
                          id="message"
                          name="message"
                          maxLength="500"
                          rows={4}
                          className="py-3 px-4 block w-full shadow-sm text-page-green focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md"
                          aria-describedby="message-max"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className="text-page-green">
                    {message}
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <div className="mt-2 w-full inline-flex items-left justify-left px-6 py-3 border border-transparent rounded-md">
                    <div class="g-recaptcha" data-sitekey="6LeQV3ocAAAAAFXFhijeNHKFWMaeq7LVGYileFwO"></div></div>
                    <br/> 
                      <button
                        type="submit"
                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white transition duration-500 ease-in-out bg-page-bluelight hover:bg-page-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact grid */}
        <section aria-labelledby="offices-heading">
          <div className="max-w-7xl mx-auto py-20 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 id="offices-heading" className="text-3xl font-extrabold text-page-green">
              Languages Spoken
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {offices.map((office) => (
                <div key={office.id}>
                  <h3 className="text-lg font-medium text-page-green">{office.Language}</h3>
                  <p className="mt-2 text-base text-white">
                    {office.proficiency.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterComponent></FooterComponent>
    </div>
  )
}
