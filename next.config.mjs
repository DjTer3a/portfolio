import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx','js'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  env: {
    NEXT_PUBLIC_SENDGRID_API_KEY: process.env.NEXT_PUBLIC_SENDGRID_API_KEY,
    NEXT_PUBLIC_MAILING_LIST: process.env.NEXT_PUBLIC_MAILING_LIST,
    NEXT_PUBLIC_FROM_EMAIL: process.env.NEXT_PUBLIC_FROM_EMAIL, 
    NEXT_PUBLIC_TO_EMAIL: process.env.NEXT_PUBLIC_TO_EMAIL,
    NEXT_PUBLIC_CAPTCHA: process.env.NEXT_PUBLIC_CAPTCHA,
    NEXT_PUBLIC_CAPTCHA_SECRET: process.env.NEXT_PUBLIC_CAPTCHA_SECRET,
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
