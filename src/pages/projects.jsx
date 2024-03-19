import '../app/globals.css'

import Header from '@/components/Header'
import Main from '@/components/Main'
import Project from '@/components/Project'
import AnimatedText from '@/components/utils/AnimatedText'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function Projects() {
  return (
    <div className="text-center bg-white">
      <Head>
        <title>Projetos</title>
      </Head>
      <Header />
      <Main>
        <div className="px-10 pt-20 sm:pt-28 lg:pt-40 flex flex-col justify-center items-center">
          <AnimatedText text="Construindo Pontes entre Ideias e Inovação!"
          className="lg:ps-36 lg:pe-36 md:pb-10 lg:pb-20 text-5xl xs:text-7xl lg:text-8xl text-center font-bold tracking-tight text-gray-900"/>
          <div className="w-full">
            <Project title="Oriental Food" description="Um site para um restaurante de comida oriental" 
            technologies="Html, Css."
            image_1="/images/projects/oriental-food-desktop.jpeg"
            image_2="/images/projects/oriental-food-mobile.jpeg"
            demo="https://oriental-food.vercel.app/" 
            github="https://github.com/leo3210k/Oriental_Food" 
            />
            <Project title="Studio Ghibli" description="A minecraft themed login page" 
            technologies="Javascript, Html, Css."
            image_1="/images/projects/studio-ghibli-desktop.jpeg"
            image_2="/images/projects/studio-ghibli-mobile.jpeg"
            demo="https://studio-ghibli-coral.vercel.app/" github="https://github.com/leo3210k/StudioGhibli" 
            order={true}
            />
            <Project title="Log Mine" description="A minecraft themed login page" 
            technologies="Javascript, Html, Css."
            image_1="/images/projects/log-mine-desktop.jpeg"
            image_2="/images/projects/log-mine-mobile.jpeg"
            demo="https://log-mine.vercel.app/" github="https://github.com/leo3210k/LogMine" 
            order={false}
            />
          </div>
        </div>
      </Main>
      <Footer />
    </div>
  )
}