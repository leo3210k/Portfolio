import { Heart } from "./utils/Icons";

export default function Footer({ children }) {
  return (
    <footer className="px-10 py-6 flex justify-around content-center border-t-2 border-gray-900">
      <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      <span className="flex">
        Construído com Nextjs e &nbsp;&nbsp;
        <Heart className="w-6 h-auto text-red-700 animate-ping-slow" alt="logo"/>
      </span>
    </footer>
  )
}
