import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/profile.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Mostafa Higazy</title>
        <meta
          name="description"
          content="I’m Mostafa Higazy, a full-stack engineer based between Abu Dhabi and Cairo. I ship web platforms end-to-end across edtech, ops tooling, and web3."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Mostafa Higazy. I live between Abu Dhabi and Cairo, where I
              ship full-stack web platforms.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’m a full-stack engineer with 8+ years taking products from
                idea to production — Laravel and Symfony backends, React and
                Next.js frontends, and AWS infrastructure. I care about
                performant, scalable systems that hold up under real use.
              </p>
              <p>
                Most recently I engineered an LMS backend at MyEdSpace on
                Symfony and Laravel, with OpenAPI-documented APIs serving 5,000+
                daily active users. I built video attendance tracking across
                200+ course videos, overhauled content tooling in React (40%
                faster processing), integrated Intercom, and implemented custom
                Stripe installment logic while cutting page load times 35%.
              </p>
              <p>
                Before that, at Opskit, I architected real-time
                data-visualization dashboards — React, D3.js, GraphQL,
                TailwindCSS, Amplify — covering 50+ operational metrics for mine
                operators, and delivered three scalable products that
                accelerated data processing 60%.
              </p>
              <p>
                At LEA Growing People I built an onboarding system (Next.js,
                Node.js, Express, Firebase) that cut onboarding time 80% for
                hundreds of monthly new users, and a coaching platform whose
                docs were adopted by 90% of users and reduced support tickets
                40%.
              </p>
              <p>
                Earlier I shipped seven web3 WordPress plugins — later migrated
                to a monorepo, cutting build times 30% across 3,000+
                installations — a web3 NFT marketplace that facilitated 2,000+
                mints, and an AI story generator on Django, Next.js, and AWS. I
                started at BlessHost designing mobile-first sites on the MERN
                and TALL stacks.
              </p>
              <p>
                I work across JavaScript and TypeScript on the frontend (React,
                Next.js, TailwindCSS, Alpine.js, Livewire, D3.js); PHP, Node.js,
                and Python on the backend (Laravel, Symfony, Express, Django);
                and AWS, Vercel, Cloudflare, plus SQL, GraphQL, MongoDB,
                Firebase, Supabase, and DynamoDB in production.
              </p>
              <p>
                I hold a BSc in Computer Science from the University of London
                (First Class Honours, 3.77 CGPA), after transferring from
                Computer Engineering at Bilkent University.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/mostafa2001711"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://github.com/DjTer3a"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/mostafa-dev/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:mostafa@higazy.dev"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-800 pt-8 dark:border-zinc-700/40"
              >
                mostafa@higazy.dev
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
