
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
            {/* <li>
                <Link  onClick={() => (isMob) && closeMenu() }  to="/pri/" className="link" aria-current="page" >Home</Link>
            </li> */}

            {/* <li>
                <Link  onClick={() => (isMob) && closeMenu() }  to="/user" className="link" >My Perfil</Link>
            </li> */}
            <li>
                <Link  onClick={() => (isMob) && closeMenu() }  to="/pub/login" className="link" >Autenticarse</Link>
            </li>

            <li>
                <Link  onClick={() => (isMob) && closeMenu() } to="/pub/register" className="link" >Registrarse</Link>
            </li>

            {/* <li>
                <Link  onClick={() => (isMob) && closeMenu() } to="/pri/newCategory" className="link" >Crear Categoria</Link>
            </li>

            <li>
                <Link  onClick={() => (isMob) && closeMenu() } to="/pri/newProduct" className="link" >Crear Producto</Link>
            </li> */}
    
            {/* <li >
                <button
                    type="button"
                    className="logout"
                    onClick={handleLogout}
                ><i className="bi bi-box-arrow-right"></i> Salir</button> 
            </li> */}
        </ul>
    </nav>
  )
}
