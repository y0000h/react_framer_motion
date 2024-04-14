import React from 'react'


const SectionTemp = ({ children }) => {
  const section = {
        height: "100vh"
  }

  // indecator 
  
  return (
    <div style={section}>
      { children }
    </div>
  )
}

export default SectionTemp
