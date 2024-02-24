import '../app/globals.css'

import Header from '@/components/Header'
import Main from '@/components/Main'
import Skills from '@/components/Skills'
import AnimatedText from '@/components/AnimatedText'

import { motion } from 'framer-motion'
import Image from 'next/image'
import profile from '../../public/images/profile/Leonardo_about.png'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="text-center bg-white">
      <Header />
      <Main>
        <div class="px-20 pt-40 flex flex-col justify-center items-center">
          <AnimatedText text="Passion Fuels Purpose!"
          className="text-7xl lg:text-8xl text-center font-bold tracking-tight text-gray-900"/>
          <div className="mt-20 flex justify-around items-center">
            <div className="w-4/12">
              <h2 class="text-xl xl:text-3xl text-left font-bold leading-8 text-gray-600">BIOGRAPHY</h2>
              <p class="mt-4 text-base xl:text-lg text-left leading-6 text-gray-600">
                Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and 
                innovative ways to bring my clients' visions to life.
              </p>
              <p class="mt-4 text-base xl:text-lg text-left leading-6 text-gray-600">
                I believe that design is about more than just making things look pretty – it's about solving problems and creating 
                intuitive, enjoyable experiences for users.
              </p>
              <p class="mt-4 text-base xl:text-lg text-left leading-6 text-gray-600">
                Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence 
                and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and 
                passion to your next project.
              </p>
            </div>
            <div className="w-5/12 lg:w-4/12 p-7 self-start rounded-2xl border-2 shadow-3xl">
              <Image src={profile} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-auto rounded-2xl bg-slate-950" alt="profile"/>
            </div>
            {/* <div class="grow">
              <dl class="h-full flex flex-col justify-between items-end text-center">
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-xl leading-7 text-gray-600">Satisfied Clients</dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-7xl">44 +</dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-xl leading-7 text-gray-600">Projects Completed</dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-7xl">50+</dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-xl leading-7 text-gray-600">Years Of Experience</dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-7xl">4+</dd>
                </div>
              </dl>
            </div> */}
          </div>
        </div>
        <Skills />
      </Main>
      <Footer />
    </div>
  )
}