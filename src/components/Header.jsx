import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/images/logos/Logo_2.png'
import Link from 'next/link'
import { Github, Instagram_1, Linkedin, Pinterest, Twitter } from './utils/Icons'
import { MenuToggle } from "./utils/MenuToggle";
import Menu from './Menu'
import AnimatedMenu from './AnimatedMenu'
import CustomLink from './utils/CustomLink'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scope = AnimatedMenu(isOpen);

  return (
    <header className="absolute inset-x-10 lg:inset-x-24 xl:inset-x-28 top-0 z-20">
      <nav className="flex items-center justify-between lg:px-8" aria-label="Global">
        <div className="flex">
          <span className="sr-only">Your Company</span>
          <Link href={{ pathname: "/", query: { name: 'addEffect=true' }}}>
            <Image src={logo} className="w-20 h-auto" alt="logo"/>
          </Link>
        </div>
        <div className="flex lg:hidden justify-center items-center" ref={scope}>
          <Menu/>
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <CustomLink href="/" title="Início" text_color="text-gray-900" background="black" />
          <CustomLink href="/about" title="Sobre mim" text_color="text-gray-900" background="black" />
          <CustomLink href="/projects" title="Projetos" text_color="text-gray-900" background="black" />
        </div>
        <div className="hidden gap-x-8 lg:flex lg:justify-end flex-wrap">
          <Link href="https://github.com/leo3210k" target={"_blank"}>
            <Github className="w-7 h-auto hover:scale-125 transition duration-200" alt="logo"/>
          </Link>
          <Link href="https://www.linkedin.com/in/leonardo-coêlho-9599b9200" target={"_blank"}>
            <Linkedin className="w-7 h-auto hover:scale-125 transition duration-200" alt="logo"/>
          </Link>
          <Link href="https://www.instagram.com/leocoelho.pi/" target={"_blank"}>
            <Instagram_1 className="w-7 h-auto hover:scale-125 transition duration-200" alt="logo"/>
          </Link>
        </div>
      </nav>
    </header>
  )
}