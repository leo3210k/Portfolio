import Image from 'next/image'
import profile from '../../public/images/profile/Leonardo_1.png'
import { ExternalLink } from './Icons'
import Link from 'next/link'

export default function Main() {
  return (
    <div class="relative isolate px-6 pt-6 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      <div class="px-24 flex justify-around items-center py-32 sm:py-48 lg:py-24">
        <Image src={profile} className="w-4/12 h-auto" alt="profile"/>
        <div class="w-5/12 flex flex-col items-start">
          <h1 class="text-4xl text-left font-bold tracking-tight text-gray-900 sm:text-6xl">
            Turning Vision Into Reality With Code And Design.
          </h1>
          <p class="mt-6 text-lg text-left leading-8 text-gray-600">
            As a skilled front-end developer, I am dedicated to turning ideas into innovative web applications. 
            Explore my latest projects, showcasing my expertise in React.js and web development.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/cv/cv.pdf" locale={false} target={"_blank"} class="flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Resume
              <ExternalLink alt="profile"/>
            </Link>
            <Link href="mailto:leocoelho.pi@gmail.com" target={"_blank"} class="text-sm font-semibold leading-6 text-gray-900 underline underline-offset-1">Contact</Link>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </div>
  )
}
