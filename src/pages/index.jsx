import '../app/globals.css'

import Header from '@/components/Header'
import Main from '@/components/Main'
import AnimatedText from '@/components/AnimatedText'

import { motion } from 'framer-motion'
import Image from 'next/image'
import profile from '../../public/images/profile/Leonardo_1.png'
import { ExternalLink } from '../components/Icons'
import Link from 'next/link'

export default function Index() {
  return (
    <div className="text-center bg-white">
      <Header />
      <Main>
        <div class="px-24 flex justify-around items-center py-32 sm:py-48 lg:py-24">
          <Image src={profile} className="w-4/12 h-auto" alt="profile"/>
          <div class="w-5/12 flex flex-col items-start">
            <AnimatedText text="Turning Vision Into Reality With Code And Design."
            className="text-4xl text-left font-bold tracking-tight text-gray-900 sm:text-7xl"/>
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
      </Main>
    </div>
  )
}