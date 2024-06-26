import { motion } from "framer-motion"

export default function Skills() {
  const Skill = ({name, x, y}) => {

    return(
      <motion.div className="flex justify-center items-center text-sm md:text-base rounded-full font-semibold bg-none sm:bg-gray-900  
      text-gray-900 sm:text-white px-4 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 sm:shadow-xl cursor-pointer absolute"
        whileHover={{scale: 1.05}}
        initial={{x: 0, y: 0}}
        whileInView={{x: x, y: y}}
        transition={{duration: 1.5}}
        viewport={{once: true}}>
          {name}
      </motion.div>
    )
  }

  return (
    <div className="mt-40 md:mt-64 mb-10 flex flex-col">
      <h1 className="text-7xl md:text-8xl font-bold tracking-tight text-gray-900">Skills</h1>
      <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen flex justify-center items-center rounded-full 
      bg-circularLight sm:bg-smCircularLight md:bg-mdCircularLight lg:bg-lgCircularLight">
        <motion.div className="flex justify-center items-center rounded-full font-semibold bg-gray-900 text-white
        p-2 md:p-4 lg:p-8 shadow-xl cursor-pointer"
        whileHover={{scale: 1.05}}>
          Web
        </motion.div>
        <Skill name="HTML" x="-32vw" y="2vw"/>
        <Skill name="CSS" x="-5vw" y="-10vw"/>
        <Skill name="Javascript" x="23vw" y="6vw"/>
        <Skill name="ReactJS" x="0vw" y="13vw"/>
        <Skill name="NextJS" x="-28vw" y="-15vw"/>
        <Skill name="Vue" x="20vw" y="-14vw"/>
        <Skill name="Mysql" x="32vw" y="-5vw"/>
        <Skill name="Electron" x="0vw" y="-21vw"/>
        <Skill name="Postgresql" x="-25vw" y="18vw"/>
        <Skill name="Tailwind CSS" x="18vw" y="18vw"/>
        <Skill name="Bootstrap" x="-16vw" y="6vw"/>
      </div>
    </div>
  )
}