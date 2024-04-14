import React from 'react'
import './Box01.css'
import { motion } from 'framer-motion'

const Box08 = () => {
    const boxVarient={
        opacity_ani:{
            opacity : 1,
        },
        opacity_init:{
            opacity : 0,
        },
        duration : {
            duration : 2
        }
    }

    const rotateVarient = {
        rotate_45 : {
            rotate : 45
        },
        rotate_135 : {
            rotate : 135
        }
    }
  return (
    <div>
      <div className='outbox'>
        {/* <motion.div className='box'
            initial={ boxVarient.opacity_init }
            animate={ boxVarient.opacity_ani }
            transition={ boxVarient.duration }
        >
            varient
        </motion.div> */}

        <motion.div className='box'
            variants={ boxVarient }
            initial="opacity_init" 
            whileHover="opacity_ani" 
        >
            varient
        </motion.div>
        <motion.div className='box'
            variants={ rotateVarient } 
            animate= "rotate_45"
            whileTap="rotate_135"
        >
            varient
        </motion.div>
      </div>
    </div>
  )
}

export default Box08
