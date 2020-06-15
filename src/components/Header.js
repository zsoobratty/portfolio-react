import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
        <NavLink to='/contact'>Contact Me</NavLink>
    </header>
)

export default Header