import { Heart } from "./Icons";

export default function Footer({ children }) {
  return (
    <footer className="p-10 flex justify-around content-center border-t-2 border-gray-900">
      <span className="flex">
        Construído com Nextjs e &nbsp;&nbsp;
        <Heart className="w-6 h-auto text-red-700 animate-ping-slow" alt="logo"/>
      </span>
    </footer>
  )
}
