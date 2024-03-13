import '../app/globals.css'

import Header from '@/components/Header'
import Main from '@/components/Main'
import Skills from '@/components/Skills'
import AnimatedText from '@/components/utils/AnimatedText'

import { motion } from 'framer-motion'
import Image from 'next/image'
import profile from '../../public/images/profile/Leonardo_about.png'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function About() {
  return (
    <div className="text-center bg-white">
      <Head>
        <title>Sobre Mim</title>
      </Head>
      <Header />
      <Main>
        <div className="px-5 pt-20 sm:pt-28 lg:pt-40 flex flex-col justify-center items-center">
          <AnimatedText text="Entre Trilhas e Conquistas!"
          className="text-5xl xs:text-7xl lg:text-8xl text-center font-bold tracking-tight text-gray-900"/>
          <div className="mt-20 flex flex-col md:flex-row justify-around items-center gap-y-12">
            <div className="w-12/12 md:w-4/12 order-last md:order-none">
              <h2 className="text-xl xl:text-3xl text-left font-bold leading-8 text-gray-600">BIOGRAFIA</h2>
              <p className="mt-4 text-base xl:text-lg text-left leading-6 text-gray-600">
                Olá! Sou Leo, um apaixonado desenvolvedor web com uma missão clara: criar experiências digitais excepcionais através de código limpo, 
                estrutura sólida e um profundo foco no usuário.
              </p>
              <p className="mt-4 text-base xl:text-lg text-left leading-6 text-gray-600">
                Com uma vasta experiência em JavaScript e frameworks modernos como React, Vue e Next.js, desenvolvi uma habilidade refinada em traduzir conceitos e ideias em interfaces intuitivas e eficazes. Minha abordagem centrada no usuário não se limita apenas ao design, 
                mas permeia todo o processo de desenvolvimento, desde a concepção até a entrega final.
              </p>
              <p className="mt-4 text-base xl:text-lg text-left leading-6 text-gray-600">
                Ao navegar pelo meu portfólio, você encontrará uma variedade de projetos que ilustram minha paixão pelo design limpo, pela funcionalidade intuitiva e pela experiência do usuário em primeiro lugar. Estou sempre pronto para enfrentar novos desafios e adoro colaborar com clientes que 
                compartilham minha visão de excelência digital.
              </p>
              <p className="mt-4 text-base xl:text-lg text-left leading-6 text-gray-600">
                Se você está procurando um desenvolvedor web comprometido com a qualidade, a inovação e a satisfação do cliente, não procure mais. Estou aqui para transformar 
                suas ideias em realidade digital. Vamos criar algo incrível juntos!
              </p>
            </div>
            <div className="w-full md:w-5/12 xl:w-4/12 p-7 self-start rounded-2xl border-2 shadow-3xl">
              <Image src={profile} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-auto rounded-2xl bg-slate-950" alt="profile"/>
            </div>
            {/* <div className="grow">
              <dl className="h-full flex flex-col justify-between items-end text-center">
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-xl leading-7 text-gray-600">Satisfied Clients</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-7xl">44 +</dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-xl leading-7 text-gray-600">Projects Completed</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-7xl">50+</dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-xl leading-7 text-gray-600">Years Of Experience</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-7xl">4+</dd>
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