import React from 'react'
import './Box01.css'
import { motion } from 'framer-motion'

const Box01 = () => {
  return (
    <motion.div className='box'
        // style={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity : 1 }}
        transition={{ duration: 5, delay: 2}}
    >
      Box01
    </motion.div>
  )
}

export default Box01
