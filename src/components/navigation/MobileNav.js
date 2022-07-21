
import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/home/Navbar.css';

export const MobileNav = ({isMob,closeMenu}) => {

    const handleLogout = (e) => {
        e.preventDefault();
    };


  return (
    <nav className="navigation">
        <ul>
            <li>
                <Link  onClick={() => (isMob) && closeMenu() }  to="/" className="link" aria-current="page" >Home</Link>
            </li>
            
            <li>
                <Link  onClick={() => (isMob) && closeMenu() }  to="/pub/login" className="link" >Autenticarse</Link>
            </li>

            <li>
                <Link  onClick={() => (isMob) && closeMenu() } to="/pub/register" className="link" >Registrarse</Link>
            </li>

            <li>
                <Link  onClick={() => (isMob) && closeMenu() }  to="/pub/permission" className="link" >Obtener Permiso Venta</Link>
            </li>

            
        </ul>
    </nav>
  )
}
