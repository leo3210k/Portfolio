import AnimatedText from '@/components/AnimatedText'
import '../app/globals.css'

import Header from '@/components/Header'
import Main from '@/components/Main'

export default function Projects() {
  return (
    <div className="text-center bg-white">
      <Header />
      <Main>
        <div class="px-10 py-40 flex flex-col justify-center items-center">
          <AnimatedText text="Imagination Trumps Knowledge!"
          className="px-40 text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-8xl"/>
        </div>
      </Main>
    </div>
  )
}