/* This example requires Tailwind CSS v2.0+ */
import Head from 'next/head'
import Layout from '../components/Layouts'
import FooterComponent from '../components/common/footer'
import HeaderComponent from '../components/common/header'


const posts = [
    {
      title: 'ِAndroid Music App',
      href: 'https://github.com/DjTer3a/g1a_project',
      description:
        'This app was created with the help of fellow students as a project for our computer science course. The app contains many features, and gave us experience in Android development, and solidified our grasp of MVC principles. Tools, such as Firebase and Android Studio helped us unleash the full potential of this app.',
      imageUrl:
        '/SEEEM.webp',
    },
    {
      title: 'Portfolio Website',
      href: '/',
      description:
        'The website you are looking at right now is created with love using NextJS and styled using TailwindCSS.',
      imageUrl:
        '/portfoliowebsite.gif',
      
    },
    {
      title: 'Studying in Turkey(Work In Progress)',
      href: '/test',
      description:
        'This website contains all the necessary steps and information required to become a student in Turkey. Built using Laravel and TailwindCSS.',
      
      imageUrl:
        '/wip2.gif',
    },
    {
      title: 'To-Do List Web Application(Work In Progress)',
      href: '/test',
      description:
        'This web application is a Full-Stack To-Do List built using the MERN stack and adheres to CRUD principles.',
      
      imageUrl:
        '/wip3.gif',
    },
    {
      title: 'NoteBook App (Work In Progress)',
      href: '/test',
      description:
        'This web application is a Full-Stack  NoteBook app using React and Firebase.',
      imageUrl:
        '/wip4.gif',
    },
    {
      title: 'Your Website',
      href: '/test',
      description:
        'This could be your website. The possibilities are endless, just like your imagination.',
      imageUrl:
        '/website.gif',
    },
  ]
  
  export default function Example() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-page-bluelight to-page-bluedarker overflow-hidden">
        <Head>
          <title>Portfolio</title>
        </Head>
        <Layout></Layout>
        <HeaderComponent></HeaderComponent>
        <div className="relative max-w-7xl mx-auto">
        <div className="text-center leading-8 tracking-tight text-page-green text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <h3>
              Projects
            </h3>
          </div>
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
                  
                </div>
              </div>
            ))}
          </div> 
        </div>
        <FooterComponent></FooterComponent>
      </div>
    )
  }
  