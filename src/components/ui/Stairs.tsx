import { motion } from "framer-motion"

// variants
const staiAnimation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] }
}

const totatlSteps = 6

const reverseIndex = (index: number) => {
    return totatlSteps - index - 1; 
}

const Stairs = () => {
  return (
      <>
          {[...Array(totatlSteps)].map((_, index) => {
              return (
                  <motion.div 
                      key={index}
                      variants={staiAnimation}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.4, ease: "easeInOut", delay: reverseIndex(index) * 0.1 }} 
                      className="w-full h-full bg-slate-950 relative"
                  />
          )})}
    </>
  )
}

export default Stairs