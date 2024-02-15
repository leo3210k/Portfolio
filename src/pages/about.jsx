import '../app/globals.css'

import Header from '@/components/Header'
import Main from '@/components/Main'

import Image from 'next/image'
import profile from '../../public/images/profile/Leonardo_about.png'

export default function About() {
  return (
    <div className="text-center bg-white">
      <Header />
      <Main>
        <div class="px-10 pt-40 flex flex-col justify-center items-center">
          <h1 class="text-4xl text-left font-bold tracking-tight text-gray-900 sm:text-8xl">
            Passion Fuels Purpose!
          </h1>
          <div className="mt-20 px-16 flex">
            <div className="w-4/12">
              <h2 class="text-xl text-left font-medium leading-8 text-gray-600">BIOGRAPHY</h2>
              <p class="mt-4 text-base text-left leading-6 text-gray-600">
                Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and 
                innovative ways to bring my clients' visions to life.
              </p>
              <p class="mt-4 text-base text-left leading-6 text-gray-600">
                I believe that design is about more than just making things look pretty – it's about solving problems and creating 
                intuitive, enjoyable experiences for users.
              </p>
              <p class="mt-4 text-base text-left leading-6 text-gray-600">
                Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence 
                and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and 
                passion to your next project.
              </p>
            </div>
            <div className="p-7 mx-auto rounded-2xl border-2 shadow-3xl">
              <Image src={profile} className="rounded-2xl bg-slate-950" alt="profile"/>
            </div>
            <div class="max-w-7xl px-6 lg:px-8">
              <dl class="h-full mx-auto  flex flex-col justify-between gap-x-8 text-center">
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
            </div>
          </div>
        </div>
      </Main>
    </div>
  )
}