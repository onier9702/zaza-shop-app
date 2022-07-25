
import React, { useRef } from 'react';

import '../../styles/home/GetPermission.css';

export const GetPermission = () => {

    const ancor = useRef(null);

    const click = () => {

        ancor.current.click();
    };

    const handleChange = (e) => {

    };


  return (
    <div className="getPermission">
        <div className="divIcon-whatsapp">
            <h1>Permiso Venta</h1>
            <div className="cuadro">
                <i className="bi bi-whatsapp" id="icon-whatsapp" onClick={click}></i>
                <a  href="https://wa.me/message/UYJLE22XHH7UP1" 
                    target="_blank" 
                    onChange={handleChange}
                    ref={ancor} 
                    style={{display: 'none'}} 
                />
            </div>
        </div>

        <div className="admin">
            <img src={'https://res.cloudinary.com/reino/image/upload/v1658493480/zv1zf9hmgbp1hs8hpbye.jpg'} alt="admin" />
            <h3 >Desarrollador Administrador de la App</h3>
        </div>

        <h5>Debe:</h5>
        <ol >
            <li >
                <p>  Registrarse y tener su cuenta de la app.</p>
            </li>
            <li>
                <p>  Iniciar Sesion.</p>
            </li>

            <li>
                <p>  Contactar con Administrador al Whatsapp para obtener Permiso Vendedor. </p>
            </li>
        </ol>


    </div>
  )
}
