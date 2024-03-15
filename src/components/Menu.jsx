import Link from "next/link";
import { Github, Instagram_2, Linkedin, Pinterest, Twitter } from './utils/Icons';
import CustomLink from "./utils/CustomLink";

export default function Menu() {  
  return (
    <nav className="menu flex flex-col bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]">
      <ul className="space-y-2">
        <CustomLink href="/" title="Início" className="mx-4 block px-3 py-2 text-base font-semibold leading-7 p-2 bg-white rounded-xl" text_color="text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" background="gradient-to-tr from-[#ff80b5] to-[#9089fc]" />
        <CustomLink href="/about" title="Sobre mim" className="mx-4 block px-3 py-2 text-base font-semibold leading-7 p-2 bg-white rounded-xl" text_color="text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" background="gradient-to-tr from-[#ff80b5] to-[#9089fc]" />
        <CustomLink href="/projects" title="Projetos" className="mx-4 block px-3 py-2 text-base font-semibold leading-7 p-2 bg-white rounded-xl" text_color="text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" background="gradient-to-tr from-[#ff80b5] to-[#9089fc]" />
      </ul>
      <div className="mx-4 flex justify-around self-center gap-x-8 gap-y-4 flex-wrap">
          <Link href="https://github.com/leo3210k" className="p-2 rounded-xl bg-white" target={"_blank"}>
            <Github className="w-6 h-auto hover:scale-125 transition duration-200" alt="logo"/>
          </Link>
          <Link href="https://www.linkedin.com/in/leonardo-coêlho-9599b9200" className="p-2 rounded-xl bg-white" target={"_blank"}>
            <Linkedin className="w-6 h-auto hover:scale-125 transition duration-200" alt="logo"/>
          </Link>
          <Link href="https://www.instagram.com/leocoelho.pi/" className="p-2 rounded-xl bg-white" target={"_blank"}>
            <Instagram_2 className="w-6 h-auto hover:scale-125 transition duration-200" alt="logo"/>
          </Link>
        </div>
    </nav> 
  )
}