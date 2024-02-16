import { motion } from "framer-motion"

export default function AnimatedText({ text, className=""}) {
  const quote = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      }
    }
  }

  const singelWord = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    }
  }

  return (
    <motion.h1 className={`${className}`}
    variants={quote}
    initial="initial"
    animate="animate">
      {
        text.split(" ").map((word, index) => 
          <motion.span key={word+'-'+index} className="inline-block"
          variants={singelWord}>
            {word}&nbsp;
          </motion.span>
        )
      }
    </motion.h1>
  )
}