import Image from 'next/image'
import icon from '../../public/images/svgs/github.svg'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Main({ title, description, technologies, image_1, image_2, demo="", github="", order=false }) {
  return (
    <motion.div className="h-[70vh] xs:h-[80vh] sm:h-[90vh] md:h-screen flex flex-col lg:flex-row justify-evenly items-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 1 }}
    viewport={{ once: true }}>
      <div className={`relative self-center ${order ? 'lg:order-last' : ''}`}>
        <Image src={`${image_1}`} width={800} height={800} className="rounded-xl shadow-2xl" alt="project-desktop"/>
        <Image src={`${image_2}`} width={200} height={200} className="absolute w-3/12 rounded-xl top-14 xs:top-20 sm:top-32 -right-6 xs:-right-10 shadow-2xl" alt="project-mobile"/>
      </div>
      <div className={`lg:w-3/12 ${order ? 'lg:mr-32' : 'lg:ml-32'} flex flex-col justify-center items-center lg:items-baseline gap-y-1 text-left landscape:mt-10`}>
        <h1 className="text-2xl xs:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{ title }</h1>
        <h2 className="text-center md:text-justify font-medium text-gray-900">{ description }</h2>
        <span className="mt-2 italic text-center md:text-justify font-normal text-gray-600">{ technologies }</span>
        <div className="mt-5 flex gap-x-6">
          <Link href={github} target="_blank">
            <Image src={icon} className="w-10 hover:scale-110 transition duration-200" alt="icon"/>
          </Link>
          <Link href={demo} target="_blank" className="flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 xs:text-lg text-center font-semibold text-white shadow-sm hover:scale-110 transition duration-200 focus-visible:outline">
            Visitar Projeto
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
