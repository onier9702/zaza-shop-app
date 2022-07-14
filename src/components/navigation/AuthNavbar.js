

import React, { useState } from 'react';

import { MobileNav } from './MobileNav';
import '../../styles/home/Navbar.css';
import { AuthMobileNav } from './AuthMobileNav';

export const AuthNavbar = () => {

    const [active, setActive] = useState(false);

    const closeMenu = () => setActive(false);

    const handleClick = (e) => {
        e.preventDefault();
        setActive(!active);
    };


  return (

    <div className="navigation-div">
    
        {
            (active) ?  <i onClick={handleClick} className="bi bi-x-circle" ></i>  :  <i onClick={handleClick} className="bi bi-list" ></i>  
        }
        {
            (active) && <AuthMobileNav isMob={true} closeMenu={closeMenu}/>
        }
    </div>
      
  )
}
