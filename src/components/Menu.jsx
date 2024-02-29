import Link from "next/link";
import CustomLink from "./CustomLink";

export default function Menu() {  
  return (
    <nav className="menu bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]">
      <ul>
        <CustomLink href="/" title="Home" className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white" background="white" />
        <CustomLink href="/about" title="About" className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white" background="white" />
        <CustomLink href="/projects" title="Projects" className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white" background="white" />
      </ul>
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
  )
}