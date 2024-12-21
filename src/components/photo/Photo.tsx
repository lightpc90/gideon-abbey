'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Photo = () => {
  return (
      <div className='w-full h-full relative'>
          <motion.div>
              <div className='w-[298px] h-[298px] rounded-full overflow-hidden xl:w-[498px] xl:h-[498px]  '>
                  <Image src={`/images/profPix.png`} alt="Gideon Abbey" width={500} height={500} priority quality={100}
                      className={`object-cover object-center w-full h-full`} />
              </div> 
          </motion.div>
    </div>
  )
}

export default Photo