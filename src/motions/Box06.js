import React from 'react'
import './Box01.css'
import { motion } from 'framer-motion'

const Box06 = () => {
  return (
    <div>
      <div className='outbox'>
        <motion.div className='box'
            // drag
            // drag='x'
            drag='y'
        >
            드래그
        </motion.div>
      </div>
    </div>
  )
}

export default Box06
