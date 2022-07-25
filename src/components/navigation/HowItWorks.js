
import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { getTokenFromLocalStorage } from '../../helpers/getTokenFromLocalStorage';

export const HowItWorks = () => {

  return (
    <div className="container" style={{display: 'flex', flexDirection: 'column' ,width: '80vw'}}>
        <h1 style={{paddingTop: 25, color: '#006400'}}> Enunciado</h1>

        <h6 style={{display: 'flex' ,textJustify: 'center' ,marginBottom: 30, paddingLeft: 30}}> App de comercio Interno para la compra-venta de articulos varios.</h6>
        <h3 style={{color: '#38b000'}}> Pasos para VENDER</h3>
        <ul>
            <li>
                <h6>Registrarse con correo electronico y cualquier contrasena.</h6>
            </li>
            <li>
                <h6>Solicitar permiso venta al Administrador para comenzar a vender.</h6>
            </li>
            <li>
                <h6>Ya como vendedor Cree su Prducto y en Mi Perfil agrege hasta 3 fotos al articulo.</h6>
            </li>
            <li>
                <h6>El Permiso de venta es requerido para ahorrar y controlar espacio en almacenamiento.</h6>
            </li>

        </ul>

        <div style={{paddingBottom: 20}}>
            <Link to={ (getTokenFromLocalStorage()) ? '/pri/permission' : '/pub/permission' }
                style={{alignSelf: 'flex-start' ,color: '#4361ee', display: 'flex',paddingTop: 20, cursor: 'pointer',borderBottom: '1px solid black', fontSize: 20 }}
            >Obtener Permiso Venta</Link>
        </div>
    </div>
  )
}
