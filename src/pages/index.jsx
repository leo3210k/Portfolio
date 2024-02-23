import '../app/globals.css'

import Header from '@/components/Header'
import Main from '@/components/Main'
import AnimatedText from '@/components/AnimatedText'

import { motion } from 'framer-motion'
import Image from 'next/image'
import profile from '../../public/images/profile/Leonardo_1.png'
import { ExternalLink } from '../components/Icons'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function Index() {
  return (
    <div className="text-center bg-white">
      <Header />
      <Main>
        <div class="mx-auto flex flex-col md:flex-row sm:justify-center lg:justify-around items-center sm:mt-80 lg:mt-48 xl:mt-24">
          <Image src={profile} className="md:hidden lg:block w-4/12 h-auto" alt="profile"/>
          <div class="sm:w-11/12 lg:w-5/12 flex flex-col lg:items-start">
            <AnimatedText text="Turning Vision Into Reality With Code And Design."
            className="text-4xl sm:text-6xl xl:text-7xl sm:text-center lg:text-left font-bold tracking-tight text-gray-900 "/>
            <p class="mt-6 text-lg sm:text-center lg:text-left leading-8 text-gray-600">
              As a skilled front-end developer, I am dedicated to turning ideas into innovative web applications. 
              Explore my latest projects, showcasing my expertise in React.js and web development.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/cv/cv.pdf" locale={false} target={"_blank"} class="flex items-center gap-x-2 rounded-md bg-indigo-600 px-7 py-3 text-xl font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Resume
                <ExternalLink alt="profile"/>
              </Link>
              <Link href="mailto:leocoelho.pi@gmail.com" target={"_blank"} class="text-xl leading-6 text-gray-900 underline underline-offset-1">Contact</Link>
            </div>
          </div>
        </div>
      </Main>
      <Footer />  
    </div>
  )
}