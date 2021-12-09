import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image';
import profilepic from '../../public/profilepic.webp'

export default function Header () {   
  const navigation = [
    { name: 'Portfolio', href: '/Portfolio' },
    { name: 'Blog', href: '/Blog' },
    { name: 'About', href: '/About' },
    { name: 'Contact', href: '/Contact' },
  ] 
  return (
    <div className="relative pt-6 pb-16 sm:pb-24">
    <Popover>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                <span className="sr-only">Workflow</span>
                <Image  src={profilepic} height={65} width={65} alt="Picture of the author" id = "logo"/>
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
                <Image  src={profilepic} height={65} width={65} alt="Picture of the author" id = "logo"/>
                
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
  )
}