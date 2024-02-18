import { motion } from "framer-motion"

export default function TransitionEffect() {
 return (
  <>
    <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
    initial={{x: "100%", width: "100%"}}
    animate={{x :"0%", width: "0%"}}
    transition={{duration: 0.8, ease: "easeInOut"}}
    />
    <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-indigo-600"
    initial={{x: "100%", width: "100%"}}
    animate={{x :"0%", width: "0%"}}
    transition={{delay: 0.2, duration: 0.8, ease: "easeInOut"}}
    />
    <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-gray-900"
    initial={{x: "100%", width: "100%"}}
    animate={{x :"0%", width: "0%"}}
    transition={{delay: 0.4, duration: 0.8, ease: "easeInOut"}}
    />
  </>
  )
}