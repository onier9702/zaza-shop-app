
import React, { useState } from 'react';

import { MobileNav } from './MobileNav';
import '../../styles/home/Navbar.css';

export const ChooseNav = () => {

    const [active, setActive] = useState(false);

    const closeMenu = () => setActive(false);

    const handleClick = (e) => {
        e.preventDefault();
        setActive(!active);
    };


  return (

    <div className="navigation-div">
    
        {
            (active) ?  <i onClick={handleClick} class="bi bi-x-circle" ></i>  :  <i onClick={handleClick} className="bi bi-list" ></i>  
        }
        {
            (active) && <MobileNav isMob={true} closeMenu={closeMenu}/>
        }
    </div>
      
  )
}
