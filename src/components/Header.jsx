import Image from 'next/image'
import logo from '../../public/images/logos/Logo_2.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Github, Instagram, Linkedin, Pinterest, Twitter } from './Icons'
import { useState } from 'react'
import { MenuToggle } from "./MenuToggle";
import Menu from './Menu'
import animatedMenu from './AnimatedMenu'
import CustomLink from './CustomLink'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scope = animatedMenu(isOpen);

  return (
    <header className="absolute inset-x-10 lg:inset-x-24 xl:inset-x-28 top-0 z-20">
      <nav className="flex items-center justify-between lg:px-8" aria-label="Global">
        <div className="flex">
          <span className="sr-only">Your Company</span>
          <Link href={{ pathname: "/", query: { name: '?addEffect=true' }}}>
            <Image src={logo} className="w-20 h-auto" alt="logo"/>
          </Link>
        </div>
        <div className="flex lg:hidden justify-center items-center" ref={scope}>
          <Menu/>
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <CustomLink href="/" title="Home" className="text-gray-900" background="black" />
          <CustomLink href="/about" title="About" className="text-gray-900" background="black" />
          <CustomLink href="/projects" title="Projects" className="text-gray-900" background="black" />
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
    </header>
  )
}