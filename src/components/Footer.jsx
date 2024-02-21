import { Copyright, Heart } from "./Icons";

export default function Footer({ children }) {
  return (
    <footer class="p-10 flex justify-around content-center border-t-2 border-gray-900">
      <span className="flex">Built with Nextjs and &nbsp;<Heart className="w-6 h-auto text-red-700" alt="logo"/></span>
    </footer>
  )
}
