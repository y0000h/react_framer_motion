import React, { useState } from 'react'
import './FramerSlider.css'
import { motion } from 'framer-motion'

const FramerSlider = () => {
  const data = [
    {
        id:1, 
        path: ""
    },
    {
        id:2, 
        path: ""
    },
    {
        id:3, 
        path: ""
    },
  ]

  const [move, setMove] = useState(0);
   
  return (
    <div className='framer_slider'>
      <motion.div className='img_box'
            animate={{ x : move * -300 }}
            drag="x"
            dragConstranints={{
                right:300,
                left:0
            }}
      >
         {
            data.map(item=>
                <div className='img' key={data.id}>image{item.id}</div>    
            )
         }
      </motion.div>
      <ul className='indecator'>
        {
            data.map((item, index)=>
                <li className='' key={data.id}
                    onClick={()=>setMove(index)}
                >{item.id}</li>    
            )
        }
      </ul>

      <div className='btn_group'>
        <button onClick={()=> setMove( move > 0 ? move-1 : 0 ) }>prev</button>
        <button 
            onClick={()=> setMove( move < data.length - 1 ? move+1 : data.length - 1) }
        >  next
        </button>
      </div>
    </div>
  )
}

export default FramerSlider
