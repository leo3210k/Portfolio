import Link from "next/link";

export default function Menu() {  
  return (
    <nav className="menu bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]">
      <ul>
        <Link href={{ pathname: "/", query: { name: '?addEffect=true' }}} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
          <li>Home</li>
        </Link>
        <Link href={{ pathname: "/about", query: { name: '?addEffect=true' }}} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
          <li>About</li>
        </Link>
        <Link href={{ pathname: "/projects", query: { name: '?addEffect=true' }}} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
          <li>Projects</li>
        </Link>
      </ul>
    </nav> 
  )
}