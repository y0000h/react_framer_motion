import React from 'react'
import './Box01.css'
import { motion } from 'framer-motion'

const Box03 = () => {
    return (
        <>
            <motion.div className='box'
                // style={{ opacity: 0 }}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 3, delay: 2 }}
            >
                Box03
            </motion.div>
            <motion.button className='box'
                // style={{ opacity: 0 }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 3, delay: 2 }}
            >
                Box04
            </motion.button>
            <motion.div className='box'
                // style={{ opacity: 0 }}
                initial={{ y: 100, x: 0 }}
                animate={{ y: 0, x: 100 }}
                transition={{ duration: 3, delay: 2 }}
            >
                Box05
            </motion.div>
        </>
    )
}

export default Box03
