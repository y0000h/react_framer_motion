import React, { useState } from 'react'
import './FramerTab.css'
import { motion } from 'framer-motion'

const FramerTab = () => {
  const [show, setShow] = useState(1);
  return (
    <div className='framer_tab'>
        <ul>
            {
                [1,2,3].map((li)=>
                    <li onClick={()=>setShow(li)} key={li}
                        className={ show === li ? "active" : null }
                        // initial={{ background : "white"}}
                        // animate={{ background : show === li ? "black" : "white"}}
                    >
                        btn{li}
                    </li>
                )
            }
        </ul>
        <div className='framer_contents'>
            {
                [1,2,3].map((content)=>
                <motion.div key={content}
                        initial={{ opacity : 0 }}
                        animate={{ opacity : content === show ? 1 : 0 }}
                >
                    { content }. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </motion.div>)
            }
        </div>
    </div>
  )
}

export default FramerTab
