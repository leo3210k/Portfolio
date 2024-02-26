import '../app/globals.css'

import Header from '@/components/Header'
import Main from '@/components/Main'
import Project from '@/components/Project'
import AnimatedText from '@/components/AnimatedText'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

export default function Projects() {
  return (
    <div className="text-center bg-white">
      <Header />
      <Main>
        <div class="px-10 pt-40 flex flex-col justify-center items-center">
          <AnimatedText text="Imagination Trumps Knowledge!"
          className="lg:ps-65 lg:pe-65 pb-20 text-7xl lg:text-8xl text-center font-bold tracking-tight text-gray-900"/>
          <div className="w-full">
            <Project title="Podcasts" description="No auth needed podcasts web app" 
            technologies="React, Typescript, Next.js, Styled Jsx, SWR."
            github="link" demo="link"
            image_1="/images/projects/oriental-food-desktop.jpeg"
            image_2="/images/projects/oriental-food-mobile.jpeg"
            />
            <Project title="Podcasts" description="No auth needed podcasts web app" 
            technologies="React, Typescript, Next.js, Styled Jsx, SWR."
            github="link" demo="link"
            image_1="/images/projects/oriental-food-desktop.jpeg"
            image_2="/images/projects/oriental-food-mobile.jpeg"
            order={true}
            />
            <Project title="Podcasts" description="No auth needed podcasts web app" 
            technologies="React, Typescript, Next.js, Styled Jsx, SWR."
            github="link" demo="link"
            image_1="/images/projects/oriental-food-desktop.jpeg"
            image_2="/images/projects/oriental-food-mobile.jpeg"
            />
            <Project title="Podcasts" description="No auth needed podcasts web app" 
            technologies="React, Typescript, Next.js, Styled Jsx, SWR."
            github="link" demo="link"
            image_1="/images/projects/oriental-food-desktop.jpeg"
            image_2="/images/projects/oriental-food-mobile.jpeg"
            order={true}
            />
          </div>
        </div>
      </Main>
      <Footer />
    </div>
  )
}