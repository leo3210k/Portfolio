import Link from "next/link";
import { useRouter } from "next/router";

export default function CustomLink({ href, title, className="",text_color="", background }) {
  const router = useRouter();

  return(
    <Link href={{ pathname: href, query: { name: 'addEffect=true' }}} className={`${className} relative group`}>
      <li className="inline text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]">
        {title}
        <span className={`
        h-[1px] inline-block
        absolute left-0 -bottom-0.5 bg-${background}
        group-hover:w-full transition-[width] ease duration-300
        underline-offset-4
        ${router.asPath === href ? "w-full" : "w-0"}
        `}
        >&nbsp;</span>
      </li>
    </Link>
  )
}