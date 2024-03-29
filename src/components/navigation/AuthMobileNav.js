
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

import '../../styles/home/Navbar.css';

export const AuthMobileNav = ({isMob,closeMenu}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        dispatch( startLogout() );
        navigate('/pub/login');
    };


  return (
    <nav className="navigation">
        <ul>
            <li>
                <Link  onClick={() => (isMob) && closeMenu() }  to="/pri/" className="link" aria-current="page" >Home</Link>
            </li>

            <li>
                <Link  onClick={() => (isMob) && closeMenu() }  to="/pri/user" className="link" >Mi Perfil</Link>
            </li>

            <li>
                <Link  onClick={() => (isMob) && closeMenu() } to="/pri/newProduct" className="link" >Vender Algo</Link>
            </li>

            <li>
                <Link  onClick={() => (isMob) && closeMenu() } to="/pri/newCategory" className="link" >Crear Categoria</Link>
            </li>

            <li>
                <Link  onClick={() => (isMob) && closeMenu() }  to="/pri/permission" className="link" >Obtener Permiso Venta</Link>
            </li>

            <li>
                <Link  onClick={() => (isMob) && closeMenu() }  to="/pri/howItWorks" className="link" >Como Funciona</Link>
            </li>
    

            <li >
                <button
                    type="button"
                    className="logout"
                    onClick={handleLogout}
                ><i className="bi bi-box-arrow-right"></i> Salir</button> 
            </li>
        </ul>
    </nav>
  )
}
