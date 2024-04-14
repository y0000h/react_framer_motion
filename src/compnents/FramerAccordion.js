import React, { useState } from 'react'
import './FramerAccordion.css'
import { motion } from 'framer-motion'

const FramerAccordion = () => {
  const data=[
    {
        id:1,
        title:"title 01",
        body:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Lati"
    },
    {
        id:2,
        title:"title 02",
        body:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Lati"
    },
    {
        id:3,
        title:"title 03",
        body:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Lati"
    }
  ]  
  const [ height, setHeight ]= useState(3);

  return (
    <div className='framer_accordion'>
       {
        data.map(item=>
            <>
                <h3 onClick={()=>setHeight(item.id)}>{item.title}</h3>
                <motion.div className='content'
                    initial={{ height : 0}}
                    animate={{ height : height === item.id ? 100 : 0 }}
                >
                    {item.body}
                </motion.div>
            </>
        )
       }
    </div>
  )
}

export default FramerAccordion
