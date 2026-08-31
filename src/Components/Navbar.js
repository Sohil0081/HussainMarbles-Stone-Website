import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="left">
            <div className="logo"><h2>Marble</h2></div>
        </div>
        
        <div className="right">
            <a href="/">Products</a>
            <a href="/">Projects</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
        </div>

      </div>
    </>
  )
}

export default Navbar
