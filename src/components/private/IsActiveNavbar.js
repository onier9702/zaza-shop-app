import { React, useState } from 'react';
import { PrivNavbar } from './PrivNavbar';

export const IsActiveNavbar = () => {


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
            (active) && <PrivNavbar isMob={true} closeMenu={closeMenu}/>
        }
    </div>
      
  )
}