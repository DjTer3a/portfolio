/* This example requires Tailwind CSS v2.0+ */
import Head from 'next/head'
import Layout from '../components/Layouts'
import FooterComponent from '../components/common/footer'
import HeaderComponent from '../components/common/header'


const posts = [
    {
      title: 'ِAndroid Music App',
      href: '#',
      description:
        'Seeem Music App A music app for android with several different features. App was created with the help of fellow students as a project for our course.',
      filler:
      'Created using the following technologies:-',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      workingTime: '8 weeks',
      tech1: {
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      tech2:{
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      tech3:{
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      tech4:{
      },
      tech5:{
      },
      tech6:{
      },
    },
    {
      title: 'Portfolio Website',
      href: '#',
      description:
        'The website that you are looking at right now.',
      filler:
      'Created using the following technologies:-',
      imageUrl:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      workingTime: '3 weeks',
      
      tech1:{
        href: '#',
        imageUrl:
          'https://www.pikpng.com/pngl/m/204-2047555_datei-java-logo-svg-java-logo-svg-clipart.png',
      },
      tech2:{
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      tech3:{
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Studying in Turkey',
      href: '#',
      filler:
      'Created using the following technologies:-',
      description:
        'This website contains all the necessary steps, and information required to become a student in Turkey.',
      workingTime: '6 weeks',
      imageUrl:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      tech1:{
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      tech2:{
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      tech3:{
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      tech4:{
      },
      tech5:{
      },
      tech6:{
      },
    }
      
  ]
  
  export default function Example() {
    return (
      <div className="bg-gradient-to-b from-page-bluelight to-page-bluedarker overflow-hidden">
        <Head>
          <title>Portfolio</title>
        </Head>
        <Layout></Layout>
        <HeaderComponent></HeaderComponent>
        <div className="relative max-w-7xl mx-auto">
        <h1 className="text-9xl font-extrabold text-white sm:text-5xl md:text-9xl text-center">
          Work In Progress
              </h1>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none ">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between bg-page-bluedarker">
                  <div className="flex-1 ">
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-page-green">{post.title}</p>
                      <p className="mt-3 text-base text-white">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 mx-auto gap-10 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.tech1.href}>
                        <img className="h-10 w-10 rounded-full" src={post.tech1.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="flex-shrink-0">
                      <a href={post.tech2.href}>
                        <img className="h-10 w-10 rounded-full" src={post.tech2.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="flex-shrink-0">
                      <a href={post.tech3.href}>
                        <img className="h-10 w-10 rounded-full" src={post.tech3.imageUrl} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> 
        </div>
        <FooterComponent></FooterComponent>
      </div>
    )
  }
  