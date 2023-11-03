import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '/home/mohamad/Desktop/Codi-grp2-frontend/front-end/src/Photos/Logo.png';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'
const Navbar = ()=>{
   const[collapse,setCollapsed] = useState(true)
   
   return (
      <header className='header'>
         <img src={Logo} alt='' className='Logo' />
         <div className='Navbar'>
         <div className="header_Links">
            <Link to="/" className="N-home">Home</Link>
            <Link to="/Companies" className="N-companies">Companies</Link>
            <Link to="/Categories" className="N-categories">Categories</Link>
            <Link to="/About" className="N-about">AboutUs</Link>
            <Link to="/contact" className="N-contact">ContactUs</Link>
            </div>
            <FontAwesomeIcon icon={collapse ? faBars : faXmark} className="header_icon" onClick={()=> setCollapsed(!collapse)}/>
         </div>
         {!collapse ? 
        <nav className="header_mobile_nav">
            <div className="header_mobile_ul">
            <Link to="/" className="N-home">Home</Link>
            <Link to="/Companies" className="N-companies">Companies</Link>
            <Link to="/Categories" className="N-categories">Categories</Link>
            <Link to="/About" className="N-about">AboutUs</Link>
            <Link to="/contact" className="N-contact">ContactUs</Link>
            </div>
        </nav>
        : null}

      </header>

   );
};

export default Navbar;

