import React from 'react'
import Navbar from './Navbar'
import { useSelector } from "react-redux";


const Header = () => {
  const name = useSelector((state) => state.auth.displayName);
  return (
    <div>
      <nav>
    <div className="nav-wrapper" style={{
        "backgroundColor":"#1565c0"
    }}>
   <span style={{"margin":"2rem"}}>{name}</span>
    <Navbar />
    
    
    </div>
  </nav>
    </div>
  )
}

export default Header
