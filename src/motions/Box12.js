import React, { useState } from 'react'
import './Box12.css'
import { motion } from 'framer-motion'

// varients 사용하는 이유는 
// 여러개 변수안에 중복된 이름을 배치할 수 있다. 
// 이름짖기 편리함 

const Box12 = () => {
  const boxVarients={
    xPos : { x : [100, -100, 200, -300, ] }
  }  
  const [ isMove, setIsMove ] = useState(false)
  const [ isRotate, setIsRotate ] = useState(false)
  return (
    <div>
        <div className='scroll_trigger'>
            <motion.div className='scroll_trigger_box' 
                initial={{ opacity: 0, scale:0 }}
                whileInView={{ opacity:1, scale: 1}}
            />
        </div>
        <div className='scroll_trigger'>
            <motion.div className='scroll_trigger_box'
                initial={{ opacity: 0, scale:0 }}
                whileInView={{ opacity:1, scale: 1}}
                viewport={{ once:true }}
            />
        </div>
        <div className='scroll_trigger'>
            <motion.div className='scroll_trigger_box'
                initial={{ x: -300 }}
                whileInView={{ x:0}}
                transition={{ duration : 1}}
            />
        </div>
        <div className='scroll_trigger'>
            <motion.div className='scroll_trigger_box' 
                initial={{ y: 200, opacity:0 }}
                whileInView={{ y:0, opacity : 1}}
                viewport={{ amount: 0.90}}
                // 화면이 표시가 얼마큼 되었을 때 나타날 것인가
            />
        </div>
        <div className='scroll_trigger'>
            <motion.div className='scroll_trigger_box' 
                initial={{ y: 200, opacity:0 }}
                whileInView={{ y:0, opacity : 1}}
                transition={{ duration : 1}}
            />
        </div>
    </div>
  )
}

export default Box12
