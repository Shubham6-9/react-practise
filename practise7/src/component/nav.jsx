import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const [dark, setDark] = useState(false)

    return (
        <nav id="navbar">
            <Link to="/" style={{ border: "1px solid", padding: "5px", margin: "0px 10px", textDecoration: "none", color: "black" }}>View</Link>
            <Link to="/add" style={{ border: "1px solid", padding: "5px", margin: "0px 10px", textDecoration: "none", color: "black" }}>Add</Link>
            <Link to="/del" style={{ border: "1px solid", padding: "5px", margin: "0px 10px", textDecoration: "none", color: "black" }}>Delete</Link>
        </nav>
    )
}

export default Nav