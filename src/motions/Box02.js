import React from 'react'
import './Box01.css'
import { motion } from 'framer-motion'

const Box02 = () => {
  return (
    <motion.div className='box' 
        initial={{ x: 0 }}
        animate={{ x : 100 }}
        transition={{ duration: 2, delay: 2}}
    >
      Box02
    </motion.div>
  )
}

export default Box02
