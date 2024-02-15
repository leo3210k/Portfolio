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
        <div class="px-24 flex justify-around items-center pt-40">
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-4xl text-left font-bold tracking-tight text-gray-900 sm:text-8xl">
              Passion Fuels Purpose!
            </h1>
            <div className="mt-10 flex">
              <div className="w-5/12">
                <h2 class="text-xl text-left font-medium leading-8 text-gray-600">BIOGRAPHY</h2>
                <p class="mt-6 text-lg text-left leading-8 text-gray-600">
                  Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                  and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and 
                  innovative ways to bring my clients' visions to life.
                </p>
                <p class="text-lg text-left leading-8 text-gray-600">
                  I believe that design is about more than just making things look pretty – it's about solving problems and creating 
                  intuitive, enjoyable experiences for users.
                </p>
                <p class="text-lg text-left leading-8 text-gray-600">
                  Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence 
                  and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and 
                  passion to your next project.
                </p>
                <p class="text-lg text-left leading-8 text-gray-600">
                  As a skilled front-end developer, I am dedicated to turning ideas into innovative web applications. 
                  Explore my latest projects, showcasing my expertise in React.js and web development.
                </p>
              </div>
              <div className="w-3/12 h-auto p-7 rounded-2xl border-x-2 shadow-3xl">
                <Image src={profile} className="rounded bg-slate-950" alt="profile"/>
              </div>
            </div>
            {/* <div class="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/cv/cv.pdf" locale={false} target={"_blank"} class="flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Resume
                <ExternalLink alt="profile"/>
              </Link>
              <Link href="mailto:leocoelho.pi@gmail.com" target={"_blank"} class="text-sm font-semibold leading-6 text-gray-900 underline underline-offset-1">Contact</Link>
            </div> */}
          </div>
        </div>
      </Main>
    </div>
  )
}