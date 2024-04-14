import React from 'react'
import './Box01.css'
import { motion } from 'framer-motion'

const Box07 = () => {
  return (
    <div>
      <div className='outbox'>
        <motion.div className='box'
            drag 
            whileDrag={{ scale : 1.2 }}
            dragConstraints={{
                right:20,
                left:-20,
                top:-20,
                bottom:20,
            }}
        >
            드래그 위치 제한
        </motion.div>
      </div>
    </div>
  )
}

export default Box07
