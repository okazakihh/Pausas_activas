import React from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from "react-redux";



const Header = () => {
  const name = useSelector((state) => state.auth.displayName);
  const photo = useSelector((state) => state.auth.photoURL);
  console.log("soy la fotooo", name )
  return (
    <div>
      <nav>
    <div className="nav-wrapper" style={{
        "backgroundColor":"#1565c0"
    }}>

     
   <b style={{"margin":"2rem", "font-fontWeight":"400", "fontSize":"1.5rem"}}>{name}</b>
    <Navbar />
    
    
    </div>
  </nav>
  
    </div>
  )
}

export default Header
