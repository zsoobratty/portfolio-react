import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioPage = () => (
    <div>
        <h2>Here's what I've been up to:</h2>
        <Link to='/portfolio/1'>Item 1</Link>
        <Link to='/portfolio/2'>Item 2</Link>
    </div>
)

export default PortfolioPage