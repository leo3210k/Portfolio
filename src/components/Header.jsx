import Image from 'next/image'
import logo from '../../public/images/logos/Logo_2.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Github, Instagram, Linkedin, Pinterest, Twitter } from './Icons'
import { useState } from 'react'
import { MenuToggle } from "./MenuToggle";
import Menu from './Menu'
import animatedMenu from './animatedMenu'

const CustomLink = ({ href, title, className="" }) => {
  const router = useRouter();
  return(
    <Link href={{ pathname: href, query: { name: 'addEffect=true' }}} className={`${className} relative group`}>
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
  const [isOpen, setIsOpen] = useState(false)

  const scope = animatedMenu(isOpen);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="absolute inset-x-10 lg:inset-x-24 xl:inset-x-28 top-0 z-20">
      <nav className="flex items-center justify-between lg:px-8" aria-label="Global">
        <div className="flex">
          <span className="sr-only">Your Company</span>
          <Link href={{ pathname: "/", query: { name: '?addEffect=true' }}}>
            <Image src={logo} className="w-20 h-auto" alt="logo"/>
          </Link>
        </div>
        <div className="flex justify-center items-center" ref={scope}>
          <Menu/>
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
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
    </header>
  )
}