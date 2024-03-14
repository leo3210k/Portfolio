import React from "react"
import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { useRouter } from "next/router"

export default function TransitionEffect() {
  const router = useRouter()

  useEffect(() => {
    router.replace(router.route, undefined, { shallow: true });
  }, [router.asPath])

  const [isThereQuery, setQuery] = useState(router.query.name);

  return ( 
    <>
      {isThereQuery ? 
        <>
          <motion.div className="absolute top-0 bottom-0 right-full w-screen h-screen z-50 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          initial={{x: "100%", width: "100%"}}
          animate={{x :"0%", width: "0%"}}
          transition={{duration: 0.8, ease: "easeInOut"}}
          />
          <motion.div className="absolute top-0 bottom-0 right-full w-screen h-screen z-40 bg-indigo-600"
          initial={{x: "100%", width: "100%"}}
          animate={{x :"0%", width: "0%"}}
          transition={{delay: 0.2, duration: 0.8, ease: "easeInOut"}}
          />
          <motion.div className="absolute top-0 bottom-0 right-full w-screen h-screen z-30 bg-gray-900"
          initial={{x: "100%", width: "100%"}}
          animate={{x :"0%", width: "0%"}}
          transition={{delay: 0.4, duration: 0.8, ease: "easeInOut"}}
          />
        </>
      : ""}
    </>
  )
}