
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getUserProfileData, setLoginUser } from '../actions/auth';
import { startUploadImg } from '../actions/createCateOrProduct';
import { removeMsgGreen, removeMsgRed, setMsgGreen, setMsgRed } from '../actions/ui';
import { setAllOwnProducts } from '../actions/userProduct';

import '../styles/auth/UserProfile.css';
import { AllOwnProds } from './Home/AllOwnProds';
// import { MyOwnProducts } from './Home/MyOwnProducts';

export const MyProfile = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogged, setIsLogged] = useState(false);
  const [fullForm, setFullForm] = useState(false);
  const { msgGreen, msgRed } = useSelector( state => state.ui);
  const {name, role, email, mobile, tarjeta_CUP, tarjeta_USD, address, uid, img} = useSelector( state => state.auth);

  // All Own Products
  const { products } = useSelector(state => state.product);
  const arrOwnProds = products.filter( prod => prod.user.name === name );
  dispatch( setAllOwnProducts(arrOwnProds) );

  useEffect(() => {
    
    const idUser = localStorage.getItem('uid');
    if ( !uid ) {

      dispatch( getUserProfileData(idUser) )
        .then( resp => {
  
          if (resp.ok) {
            setIsLogged(true);
            dispatch( setLoginUser(resp.user) );
   
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
    navigate('/pri/editUser');
  };

  // Uploading User Image
  const imgUploadRef = useRef(null);

  const handleUploadUserImg = () => {
    imgUploadRef.current.click();
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file){
      dispatch(startUploadImg(uid, 'users' ,file, []))
        .then( resp => {
          if (resp.ok){
            dispatch( setMsgGreen('Imagen de Usuario posteada correctamente'));
            setTimeout(() => {
              dispatch(removeMsgGreen());
            }, 1700);
          } else {
            dispatch( setMsgRed(resp.msg));
                    setTimeout(() => {
                        dispatch(removeMsgRed());
                    }, 1700);
          }
        })
        .catch( err => console.log(err));
    };
  };

  // Click See User Products
  const handleSeeUserProds = () => {
    if (role === 'USER_ROLE'){
      return Swal.fire('Atentamente', 'Debe contactar Administrador para darle permiso de vendedor y pueda tener sus productos', 'warning');
    }
    navigate('/pri/myOwnProducts');

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
        {
            (msgGreen) && <div style={{color: 'blue'}} > { msgGreen } </div>
        }
        {
            (msgRed) && <div style={{color: 'red'}} > { msgRed } </div>
        }
        <div className="isFullForm" >
          {
            (fullForm) && <h6 style={{color: 'red'}}>Perfil Incompleto</h6>
                // ? 
                // : <h6 style={{color: 'blue'}}>Perfil Completado al 100%</h6>
          }
          <input type="file"
                 onChange={handleImgChange}
                 ref={imgUploadRef}
                 style={{display: 'none'}}
          />
          <i className="bi bi-camera-fill" onClick={handleUploadUserImg}></i>
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

      <div onClick={handleSeeUserProds} className="divButtonSeeProducts">
        <button type="button" className="btn btn-info">Ver mis Productos</button>
      </div>
      

    </div>
  )
}
