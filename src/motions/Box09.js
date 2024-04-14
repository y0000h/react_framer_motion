import React from 'react'
import './Box01.css'
import { motion } from 'framer-motion'

// vairents 사용하는 이유는
// 여러개 변수안에 중복된 이름을 배치할 수 있다.
// 이름짖기 편리함

const Box09 = () => {
    const boxVarients = {
        visible : {
            transition : {
                delay : 2,
                when:"beforeChildren"
                // staggerChildrens : 1

            }
        }
    }
    const loadVarients = {
        hidden : {
            x : -50,
            opacity : 0,
            scale : 0.2
        },
        visible : {
            x : 0,
            opacity : 1,
            delayChildren : 1
        }
    }
  return (
    <div>
      <div className='flexOutbox'
            varients={ boxVarients }
      >
        {
            [1,2,3].map(num=>
                <motion.div className='box'
                    key={num}
                    initial="hidden"
                    varients={loadVarients}
                    animate="visible"
                >
                    varient
                </motion.div>
            )
        }
      </div>
    </div>
  )
}

export default Box09
