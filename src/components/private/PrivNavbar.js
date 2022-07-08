
import React from 'react'
import { Link } from 'react-router-dom'


export const PrivNavbar = ({isMob,closeMenu}) => {

    const handleLogout = (e) => {
        e.preventDefault();
        console.log('Logout');
    };
    
  return (
    <nav className="navigation">
        <ul >
            <li>
                <Link  onClick={() => (isMob) && closeMenu() }  to="/private/" className="link" aria-current="page" >Mi Perfil</Link>
            </li>
            <li>
                <Link  onClick={() => (isMob) && closeMenu() }  to="/private/newProduct" className="link" >Crear Producto</Link>
            </li>
            <li>
                <Link  onClick={() => (isMob) && closeMenu() }  to="/private/newCategory" className="link" >Crear Categoria</Link>
            </li>

            <li>
                <Link  onClick={() => (isMob) && closeMenu() } to="/private/home" className="link" >Inicio</Link>
            </li>
    
            <li >
                <button
                    type="button"
                    className="logout"
                    onClick={handleLogout}
                ><i class="bi bi-box-arrow-right"></i> Salir</button>
            </li>
        </ul>
    </nav>
  )
}
