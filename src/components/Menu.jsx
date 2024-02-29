import Link from "next/link";
import CustomLink from "./CustomLink";

export default function Menu() {  
  return (
    <nav className="menu bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]">
      <ul>
        <CustomLink href="/" title="Home" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
          <li>Home</li>
        </CustomLink>
        <CustomLink href="/about" title="About" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
          <li>About</li>
        </CustomLink>
        <CustomLink href="/projects" title="Projects" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
          <li>Projects</li>
        </CustomLink>
      </ul>
    </nav> 
  )
}