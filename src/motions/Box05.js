import React from 'react'
import './Box01.css'
import { motion } from 'framer-motion'

const Box05 = () => {
  return (
    <div>
      <div className='outbox'>
        <motion.div className='box'
            initial={{ scale : 1 }}
            // animate={{ rotate : 360 }}
            // whileHover={{ scale : 1.2 }}
            whileTap={{ scale: 1.2 }}
        >
            scale 제스쳐
        </motion.div>
      </div>
    </div>
  )
}

export default Box05
