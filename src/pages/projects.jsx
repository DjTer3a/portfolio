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
import myedspaceLogo from '@/images/logos/myedspace.png'
import opskitLogo from '@/images/logos/opskitLogo.svg'
import freelanceLogo from '@/images/logos/freelance.webp'

const projects = [
  {
    name: 'MyEdSpace LMS',
    description:
      'Engineered the LMS backend on Symfony and Laravel with OpenAPI-documented APIs serving 5,000+ daily active users. Built video attendance tracking across 200+ course videos, overhauled React content tooling (40% faster processing), integrated Intercom, and implemented custom Stripe installment logic while cutting page load times 35%.',
    link: { href: 'https://www.myedspace.co.uk/', label: 'myedspace.co.uk' },
    logo: myedspaceLogo,
  },
  {
    name: 'Opskit',
    description:
      'Architected real-time data-visualization dashboards with React, D3.js, GraphQL, TailwindCSS, and Amplify, spanning 50+ operational metrics for mine operators. Delivered three scalable products that accelerated data processing 60% across cross-functional teams.',
    link: { href: '#', label: 'internal platform' },
    logo: opskitLogo,
  },
  {
    name: 'LEA Growing People',
    description:
      'Built an onboarding system (Next.js, Node.js, Express, Firebase) that cut onboarding time 80% for hundreds of monthly new users, and a coaching platform serving hundreds of clients. Authored docs adopted by 90% of users, reducing support tickets 40%.',
    link: { href: '#', label: 'internal platform' },
    logo: leaLogo,
  },
  {
    name: 'UFPE',
    description:
      'Web3 NFT marketplace on IPFS, MongoDB, Next.js, and Hardhat/Truffle — 1,408 football collectibles and 2,000+ mints. Built as a freelance MVP.',
    link: { href: 'https://www.ufpe.club/', label: 'ufpe.club' },
    logo: ufpeLogo,
  },
  {
    name: 'AI Story Generator',
    description:
      'Children’s story app on Django, Next.js, and AWS (EBS, RDS, IAM, Route53) that generates custom illustrated stories on demand for early adopters.',
    link: { href: '#', label: 'freelance' },
    logo: freelanceLogo,
  },
  {
    name: 'MyServerDubai',
    description:
      'Mobile-first hosting site for dedicated, VPS, and managed servers from Dubai — MERN and TALL stacks, built with a team at BlessHost for Kasovy OÜ.',
    link: {
      href: 'https://www.myserverdubai.com/',
      label: 'myserverdubai.com',
    },
    logo: myserverdubai,
  },
  {
    name: 'Meta Locker',
    description:
      'One of seven web3 WordPress plugins later migrated to a monorepo — cutting build times 30% across 3,000+ installations. Reduces churn and lifts conversion in Web3.',
    link: {
      href: 'https://metaplugins.io/plugins/meta-locker',
      label: 'metaplugins.io',
    },
    logo: metaLockerLogo,
  },
  {
    name: 'Meta Auth',
    description:
      'One-click 2FA through a browser wallet. Part of the same seven-plugin web3 suite shipped for a stealth startup.',
    link: {
      href: 'https://metaplugins.io/plugins/meta-authentication',
      label: 'metaplugins.io',
    },
    logo: metaAuthLogo,
  },
  {
    name: 'Meta Age',
    description:
      'One-click age verification through any browser wallet. Shipped as part of the web3 WordPress plugin suite.',
    link: {
      href: 'https://metaplugins.io/plugins/meta-age',
      label: 'metaplugins.io',
    },
    logo: metaAgeLogo,
  },
  {
    name: 'BilHeal',
    description:
      'Proposed web app for Bilkent University’s Health Center, easing interaction between patients and staff. Group project for Object-Oriented Software Engineering.',
    link: { href: 'https://bilheal.com/', label: 'bilheal.com' },
    logo: bilhealLogo,
  },
  {
    name: 'Kapibaro',
    description:
      'Programming language for IoT devices, built with Lex and Yacc as a group project for Programming Languages.',
    link: { href: 'https://github.com/DjTer3a/Kapibaro', label: 'github.com' },
    logo: bilkentLogo,
  },
  {
    name: 'SEEEM',
    description:
      'Feature-rich music app built with Java and Firebase. Group project for Introduction to Programming II.',
    link: { href: 'https://github.com/DjTer3a/Kapibaro', label: 'github.com' },
    logo: bilkentLogo,
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
          content="Selected work across edtech, ops tooling, and web3 — LMS backends, real-time dashboards, coaching platforms, and more."
        />
      </Head>
      <SimpleLayout
        title="Platforms I’ve shipped across edtech, ops, and web3."
        intro="These are the products I’m most proud of — LMS backends serving thousands of daily users, real-time ops dashboards, coaching platforms, and web3 tooling. A few are public; others were internal. If something looks interesting, the code or a walkthrough is a message away."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
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
