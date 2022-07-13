
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserProfileData } from '../actions/auth';

import '../styles/auth/UserProfile.css';

export const MyProfile = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogged, setIsLogged] = useState(false);
  const [fullForm, setFullForm] = useState(false);

  const { name,
    uid,
    role, email,
    mobile,
    img,
    tarjeta_CUP,
    tarjeta_USD,
    address
  } = useSelector( state => state.auth);
  
  useEffect(() => {
    
    const idUser = localStorage.getItem('uid');
    if ( !uid ) {

      dispatch( getUserProfileData(idUser) )
        .then( resp => {
  
          if (resp.ok) {
            setIsLogged(true);
          } else {
            setIsLogged(false);
          }
  
        })
        .catch( err => console.log(err))
    } else {
      setIsLogged(true);
    };
      
      
    }, [uid ,setIsLogged, dispatch]);
    
    useEffect(() => {
      
      let userVariables = [name, role, email, mobile, tarjeta_CUP, tarjeta_USD, address];
      
      for ( let variab of userVariables ) {
        if ( !variab ){
          setFullForm(true);
          break;
        }
      };  
    
    }, [setFullForm, name, uid, role, email, mobile, img, tarjeta_CUP, tarjeta_USD, address]);
  


  const handleEditUserAccount = () => {

    navigate('/editUser');

  };

  if ( !isLogged ){
    return (
      <div className="div-not-logged">
        <div className="cuadro-info-not-logged" >
          <h4> Usted debe registrarse en la aplicacion o si ya lo hizo debe autenticarse </h4>
        </div>
      </div>
    )
  }

  return (
    <div className="div-profile">
      <div className="div-color" >
        
        <div className="header" >
          <h1>Mi Perfil</h1>
          <i onClick={handleEditUserAccount} className="bi bi-pencil-square" id="edit-icon"></i>
        </div>
        <hr/>

        <div className="isFullForm" >
          {
            (fullForm) && <h6 style={{color: 'red'}}>Perfil Incompleto</h6>
                // ? 
                // : <h6 style={{color: 'blue'}}>Perfil Completado al 100%</h6>
          }
        </div>

        <div className="div-img-user" >
          {
            (img) && <img src={img} alt="img-user" />
          }
        </div>


        <div className="div-user-info">

          <ul >

            <li>
              <div className="div-icon" >
                <i style={{color: 'green'}} className="bi bi-check2-all"></i>
              </div>

              <div className="div-h5-p">
                <h4> Nombre: </h4>
                <p>{name}</p>
              </div>
            </li>

            <li>
              <div className="div-icon" >
                <i style={{color: 'green'}} className="bi bi-check2-all"></i>
              </div>

              <div className="div-h5-p">
                <h5> Correo: </h5>
                <p>{email}</p>
              </div>
            </li>

            <li>
              <div className="div-icon" >
                <i style={{color: 'green'}} className="bi bi-check2-all"></i>
              </div>

              <div className="div-h5-p">
                <h5> Rol: </h5>
                <p>{role}</p>
              </div>
            </li>

            <li>
              <div className="div-icon" >
                <i style={{color: 'green'}} className="bi bi-check2-all"></i>
              </div>

              <div className="div-h5-p">
                <h5> Celular: </h5>
                <p>{mobile}</p>
              </div>
            </li>

            <li>
              <div className="div-icon" >
                {
                  <i style={(tarjeta_CUP) ? {color: 'green'} : {color: ''}} className="bi bi-check2-all"></i>
                }
              </div>

              <div className="div-h5-p">
                <h5>Tarjeta_CUP:</h5>
                <p>{tarjeta_CUP}</p>
              </div>
            </li>

            <li>
              <div className="div-icon" >
                {
                  <i style={(tarjeta_USD) ? {color: 'green'} : {color: ''}} className="bi bi-check2-all"></i>
                }
              </div>

              <div className="div-h5-p">
                <h5>Tarjeta_USD:</h5>
                <p>{tarjeta_USD}</p>
              </div>
            </li>

            <li>
              <div className="div-icon" >
                {
                  <i style={(address) ? {color: 'green'} : {color: ''}} className="bi bi-check2-all"></i>
                }
              </div>

              <div className="div-h5-p">
                <h5>Direccion:</h5>
                <p>{address}</p>
              </div>
            </li>

          </ul>

        </div>
      </div>
    </div>
  )
}
