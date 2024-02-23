import Image from 'next/image'
import logo from '../../public/images/logos/Logo_2.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Github, Instagram, Linkedin, Pinterest, Twitter } from './Icons'
import { useState } from 'react'

const CustomLink = ({ href, title, className="" }) => {
  const router = useRouter();
  return(
    <Link href={{ pathname: href, query: { name: '?addEffect=true' }}} className={`${className} relative group`}>
      {title}

      <span className={`
      h-[1px] inline-block bg-black
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      underline-offset-4
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >&nbsp;</span>
    </Link>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState()

  const handleClick = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <header className="absolute inset-x-10 lg:inset-x-24 xl:inset-x-28 top-0 z-20">
      <nav className="flex items-center justify-between lg:px-8" aria-label="Global">
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image src={logo} className="w-20 h-auto" alt="logo"/>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"  
          onClick={handleClick}>
            <span className="sr-only">Open main menu</span>
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <CustomLink href="/" title="Home" className="text-gray-900" />
          <CustomLink href="/about" title="About" className="text-gray-900" />
          <CustomLink href="/projects" title="Projects" className="text-gray-900" />
        </div>
        <div className="hidden gap-x-8 lg:flex lg:justify-end flex-wrap">
          <Link href="/" target={"_blank"}>
            <Github className="w-6 h-auto hover:scale-125 transition duration-200" alt="logo"/>
          </Link>
          <Link href="/" target={"_blank"}>
            <Linkedin className="w-6 h-auto hover:scale-125 transition duration-200" alt="logo"/>
          </Link>
          <Link href="/" target={"_blank"}>
            <Instagram className="w-6 h-auto hover:scale-125 transition duration-200" alt="logo"/>
          </Link>
          <Link href="/" target={"_blank"}>
            <Twitter className="w-6 h-auto hover:scale-125 transition duration-200" alt="logo"/>
          </Link>
          <Link href="/" target={"_blank"}>
            <Pinterest className="w-6 h-auto hover:scale-125 transition duration-200" alt="logo"/>
          </Link>
        </div>
      </nav>
      <div className={`${isOpen ? 'hidden' : ''} lg:hidden`} role="dialog" aria-modal="true">
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={handleClick}>
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Projects</a>
              </div>
              <div className="py-6">
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}