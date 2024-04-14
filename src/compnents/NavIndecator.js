import React from 'react'
import './NavIndecator.css'

const NavIndecator = () => {
  const nav = ["header", "work", "skills", "aboutme"]
  return (
    <ul className='Nav'>
      {
        nav.map(menu=>
            <li><a href={`#${menu}`}>{menu}</a></li>
        )
      }
    </ul>
  )
}

export default NavIndecator
