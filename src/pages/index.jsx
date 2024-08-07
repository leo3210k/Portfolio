import '../app/globals.css'

import { Analytics } from "@vercel/analytics/react"
import Header from '@/components/Header'
import Main from '@/components/Main'
import AnimatedText from '@/components/utils/AnimatedText'

import { motion } from 'framer-motion'
import Image from 'next/image'
import profile from '../../public/images/profile/Leonardo_homepage.png'
import { ExternalLink } from '../components/utils/Icons'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function Index() {
  return (
    <div className="text-center bg-white">
      <Head>
        <title>Página Inicial</title>
      </Head>
      <Header />
      <Main>
        <div className="mx-auto flex flex-col md:flex-row sm:justify-center lg:justify-around items-center gap-y-7 mt-8 md:mt-72 lg:mt-44 xl:mt-20 mb-10 md:mb-0 landscape:mb-10">
          <Image src={profile} className="w-9/12 md:hidden lg:block lg:w-4/12 h-auto" alt="profile"/>
          <div className="sm:w-11/12 lg:w-5/12 flex flex-col lg:items-start">
            <AnimatedText text="Dando Vida às Ideias com Código."
            className="text-4xl sm:text-6xl xl:text-7xl sm:text-center lg:text-left font-bold tracking-tight text-gray-900 "/>
            <p className="mt-6 text-base sm:text-lg sm:text-center lg:text-left sm:leading-8 text-gray-600">
            Como um desenvolvedor front-end qualificado, me dedico a transformar ideias em aplicações web inovadoras. 
            Explore meus projetos mais recentes, mostrando minha experiência em React.js e desenvolvimento web.
            </p>
            <div className="mt-6 sm:mt-10 flex items-center justify-center gap-x-6">
              <Link href="/cv/cv.pdf" locale={false} target={"_blank"} className="flex items-center gap-x-2 rounded-lg bg-indigo-600 px-4 py-2 md:px-7 md:py-3 text-lg md:text-xl font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Currículo
                <ExternalLink alt="profile"/>
              </Link>
              <Link href="mailto:leocoelho.pi@gmail.com" target={"_blank"} className="text-lg md:text-xl leading-6 text-gray-900 underline underline-offset-1">Contato</Link>
            </div>
          </div>
        </div>
      </Main>
      <Footer />  
      <Analytics/>
    </div>
  )
}