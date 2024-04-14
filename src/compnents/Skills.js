import React from 'react' 
import MotionWrap from '../layouts/MotionWrap'
import FramerSlider from './FramerSlider'

const Skills = () => {
  return (
    <div>
      <FramerSlider />
    </div>
  )
}

export default MotionWrap(Skills, "skills")
