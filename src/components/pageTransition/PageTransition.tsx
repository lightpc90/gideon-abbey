"use client";
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation";

import React from 'react'

const PageTransition = ({ children }:{children: React.ReactNode}) => {
  return (
      <AnimatePresence>
          <div key={usePathname()}>
              <motion.div
                  initial={{ opacity: 1 }}
                  animate={{
                      opacity: 0, 
                      transition: {delay: 1, duration: 0.4, ease: "easeOut"}
                  }}
                  className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
              />    
          {children}
          </div>
    </AnimatePresence>
  )
}

export default PageTransition