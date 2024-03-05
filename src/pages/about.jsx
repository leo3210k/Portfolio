import '../app/globals.css'

import Header from '@/components/Header'
import Main from '@/components/Main'
import Skills from '@/components/Skills'
import AnimatedText from '@/components/AnimatedText'

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
                Olá, sou Leo, desenvolvedor web e designer UI/UX apaixonado por criar designs bonitos, funcionais e
                e experiências digitais centradas no usuário. Com 4 anos de experiência na área. Estou sempre em busca de novidades e
                formas inovadoras de dar vida às visões dos meus clientes.
              </p>
              <p className="mt-4 text-base xl:text-lg text-left leading-6 text-gray-600">
                Acredito que design é mais do que apenas fazer as coisas parecerem bonitas – é resolver problemas e criar
                experiências intuitivas e agradáveis ​​para os usuários.
              </p>
              <p className="mt-4 text-base xl:text-lg text-left leading-6 text-gray-600">
                Quer esteja trabalhando em um site, aplicativo móvel ou outro produto digital, trago meu compromisso com a excelência em design
                e pensamento centrado no usuário para cada projeto em que trabalho. Estou ansioso pela oportunidade de trazer minhas habilidades e
                paixão pelo seu próximo projeto.
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