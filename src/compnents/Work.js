import React from 'react' 
import MotionWrap from '../layouts/MotionWrap'
import FramerAccordion from './FramerAccordion'

const Work = () => {
  return (
    <div>
      <FramerAccordion />
    </div>
  )
}

export default MotionWrap(Work, "work")
