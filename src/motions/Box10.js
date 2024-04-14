import React from 'react'
import './Box01.css'
import { motion } from 'framer-motion'

// varients 사용하는 이유는 
// 여러개 변수안에 중복된 이름을 배치할 수 있다. 
// 이름짖기 편리함 

const Box10 = () => {
  const boxVarients={
    xPos : { x : [100, -100, 200, -300, ] }
  }  
 
  return (
    <div>
      <div className='flexOutbox'>
         <motion.div className='box' 
            variants={boxVarients}
            // animate={{ x : 100 }}
            // animate={{ x : [100, -100, 200, -300, ] }}
            animate="xPos"
            >
               varient 
         </motion.div>
      </div>
    </div>
  )
}

export default Box10
