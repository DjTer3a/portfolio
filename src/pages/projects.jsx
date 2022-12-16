import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import profileLogo from '@/images/logos/profile.png'
import leaLogo from '@/images/logos/learound.png'
import myserverdubai from '@/images/logos/myserverdubai.png'
import ufpeLogo from '@/images/logos/ufpeLogo.webp'
import bilhealLogo from '@/images/logos/bilheal.png'
import metaLockerLogo from '@/images/logos/meta-locker.svg'
import metaAuthLogo from '@/images/logos/meta-auth.svg'
import metaAgeLogo from '@/images/logos/meta-age.svg'
import bilkentLogo from '@/images/logos/bilkent_logo.png'

const projects = [
  {
    name: 'MyServerDubai',
    description:
      'MyServerDubai provides dedicated hosting servers, VPS hosting servers and managed hosting servers from Dubai\'s data center. Created with a team of developers for Kasovy OÜ.',
    link: { href: 'https://www.myserverdubai.com/', label: 'myserverdubai.com' },
    logo: myserverdubai,
  },
  {
    name: 'UFPE',
    description:
      'With a grand total of 1408 stylishly designed football cards featuring hand-picked players, UFPE is the hottest place to get your hands on unique, must-have collectibles of turbo-charged attackers, impenetrable defenders, and goalkeepers with lightning fast reflexes. Created as an MVP for a client as a freelancer.',
    link: { href: 'https://www.ufpe.club/', label: 'ufpe.club' },
    logo: ufpeLogo,
  },
  {
    name: 'Lea Digital Platform',
    description:
      'A platform for connecting clients and coaches through a centralized platform. Created for Lea Growing People as the Lead full-stack developer.',
    link: { href: '#', label: 'internal tool(for now)' },
    logo: leaLogo,
  },
  {
    name: 'Meta Locker',
    description:
      'Reduce churn and increase conversion rates in the emerging Web3.0 market. Contributed to the Meta Locker project as a wordpress plugin developer.',
    link: { href: 'https://metaplugins.io/plugins/meta-locker', label: 'metaplugins.io' },
    logo: metaLockerLogo,
  },
  {
    name: 'Meta Auth',
    description:
      'Reduce the friction of 2FA for your users with a one click browser wallet solution. Contributed to the Meta Auth project as a wordpress plugin developer.',
    link: { href: 'https://metaplugins.io/plugins/meta-authentication', label: 'metaplugins.io' },
    logo: metaAuthLogo,
  },
  {
    name: 'Meta Age',
    description:
      'One click age verification through any browser wallet. Contributed to the Meta Age project as a wordpress plugin developer.',
    link: { href: 'https://metaplugins.io/plugins/meta-age', label: 'metaplugins.io' },
    logo: metaAgeLogo,
  },
  {
    name: 'Restaurant Reviews',
    description:
      'A website for finding and rating restaurants created using the MERN stack.',
    link: { href: 'https://github.com/DjTer3a/MERN_RestaurantsReviews', label: 'github.com' },
    logo: profileLogo,
  },
  {
    name: 'BilHeal',
    description:
      'BilHeal is a proposed web app for Bilkent University\'s Health Center that aims to ease the interaction between patients and the health centre\'s staff. It was created as a group project for the Object-Oriented Software Engineering course.',
    link: { href: 'https://bilheal.com/', label: 'bilheal.com' },
    logo: bilhealLogo,
  },
  {
    name: 'Kapibaro',
    description:
      'Kapibaro is a programming langauge for IOT devices created using Lex & Yacc tools. It was created as a group project for the Programming Languages course.',
    link: { href: 'https://github.com/DjTer3a/Kapibaro', label: 'github.com' },
    logo: bilkentLogo,
  },
  {
    name: 'SEEEM',
    description:
      'SEEEM is a feature-rich music app created using Java and Firebase. It was created as a group project for the Introduction to Programming II course.',
    link: { href: 'https://github.com/DjTer3a/Kapibaro', label: 'github.com' },
    logo: bilkentLogo,
  },
  {
    name: 'Greenhouse Monitoring System',
    description:
      'Greenhouse Monitoring System is an app that monitors greenhouses using connected virtual sensors created using React Native. A hobby project (still in development).',
    link: { href: '#', label: 'W.I.P.' },
    logo: profileLogo,
  },
  {
    name: 'NoteScrapper',
    description:
      'Insert a link and get all the pdfs included on the webpage as a zip file created using python. A hobby project (still in development).',
    link: { href: '#', label: 'W.I.P.' },
    logo: profileLogo,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}



export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Mostafa Higazy</title>
        <meta
          name="description"
          content="Projects that I have worked on with others or created myself."
        />
      </Head>
      <SimpleLayout
        title="Projects that I have worked on with others or created myself."
        intro="I’ve worked on tons of little projects over the years but these are the most notable ones. Some of them are available on github, so if you see something that piques your interest, check out the code, and do not hesitate to reach out for feedback."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-light shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-700 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
