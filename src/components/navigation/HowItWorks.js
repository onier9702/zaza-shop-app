
import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { getTokenFromLocalStorage } from '../../helpers/getTokenFromLocalStorage';

export const HowItWorks = () => {

  return (
    <div className="container" style={{display: 'flex', flexDirection: 'column' ,width: '80vw'}}>
        <h1 style={{paddingTop: 25, color: '#006400'}}> Enunciado</h1>

        <h6 style={{display: 'flex' ,textJustify: 'center' ,marginBottom: 30, paddingLeft: 30}}> App de comercio Interno para poder encontrar de una manera facil algun producto que necesitemos y poder vender online nuestros productos</h6>
        <h3 style={{color: '#38b000'}}> Pasos</h3>
        <ul>
            <li>
                <h6>Registrarse y Tener su cuenta con su correo y la contrasena que desee</h6>
            </li>
            <li>
                <h6>Para VENDER debe obtener Permiso de Venta con el ADMINISTRADOR quien se lo otorgara</h6>
            </li>
            <li>
                <h6>Este Permiso es requerido porque solo tenemos 1Gb de Fotos a Subir ya que es Servidor Gratis y no se le Cobra a nadie por Vender</h6>
            </li>
            <li>
                <h6>Una vez Tenga el ROL de VENDEDOR puede crear su Producto y luego ir a SU PERFIL y subirle al menos 3 FOTOS</h6>
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
