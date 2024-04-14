import React, { useState } from 'react'
import './Box01.css'
import { motion } from 'framer-motion'

// vairents 사용하는 이유는
// 여러개 변수안에 중복된 이름을 배치할 수 있다.
// 이름짖기 편리함

const Box11 = () => {
    const boxVarients = {
        xPos: { x: [100, -100, 200, -300,] }
    }
    const [isMove, setIsMove] = useState(false)
    const [isRotate, setIsRotate] = useState(false)
    return (
        <div>
            <div className='outbox'>
                <motion.div className='box'
                    animate={{ x : isMove ? 100 : 0}}

                    onClick={()=>setIsMove(!isMove)}
                   
                >
                    state box
                </motion.div>
            </div>
            <div className='outbox'>
                <motion.div className='box'
                    animate={{ rotate : isRotate ? 45 : 0}}

                    onClick={()=>setIsRotate(!isRotate)}
                   
                >
                    state box
                </motion.div>
            </div>
        </div>
    )
}

export default Box11
