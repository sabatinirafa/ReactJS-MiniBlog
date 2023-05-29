import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/about'}>Sobre</NavLink>
    </div>
  )
}

export default Navbar