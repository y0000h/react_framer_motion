import React from 'react'
import './Box01.css'
import { motion } from 'framer-motion'

const Box04 = () => {
  return (
    <div>
      <div className='outbox'>
        <motion.div className='box'
            initial={{ rotate : 0 }}
            // animate={{ rotate : 360 }}
            whileHover={{ rotate : 55 }}
        >

        </motion.div>
      </div>
    </div>
  )
}

export default Box04
