import React from 'react' 
import MotionWrap from '../layouts/MotionWrap'
import FramerTab from './FramerTab'

const Header = () => {
  return (
    <div>
       <FramerTab />
    </div>
  )
}

export default MotionWrap(Header, "header")
