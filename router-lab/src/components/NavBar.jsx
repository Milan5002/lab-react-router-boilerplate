import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"white"}}>
      <Link to={"/"}>
      <h1>KALVIUM❤️</h1>
      </Link>

      <div style={{display:"flex",gap:"10px"}}>
      <Link to={"/about"}>
      <h2>About</h2>
      </Link>

      <Link to={"/contact"}>
      <h2>contact</h2>
      </Link>
     
      </div>
    </div>
  )
}

export default NavBar