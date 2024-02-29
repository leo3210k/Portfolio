import Link from "next/link";
import CustomLink from "./CustomLink";

export default function Menu() {  
  return (
    <nav className="menu bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]">
      <ul>
        <CustomLink href="/" title="Home" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white" background="white" />
        <CustomLink href="/about" title="About" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white" background="white" />
        <CustomLink href="/projects" title="Projects" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white" background="white" />
      </ul>
    </nav> 
  )
}