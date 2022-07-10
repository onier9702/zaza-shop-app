

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import Swal from 'sweetalert2';

import { useForm } from '../hooks/useForm';

import '../styles/auth/Login.css';
// import { startLogin } from '../../actions/auth';

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const {name} = useSelector( state => state.auth );
  // const {loading} = useSelector( state => state.ui );

  
  const [formValue, handleInputChange] = useForm( {
    email: '',
    password: '',
  } )

  const { email, password } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(startLogin(name ,email, password));
  }

  useEffect(() => {
    // Swal.fire('Nota', 'Para Cuba usar VPN','info');
  }, [])
  

  return (
    <>
      
          <div className="container">

            <h3 >Login</h3>
      
            <form className="content animate__animated animate__fadeIn animate__faster" 
                  onSubmit={handleSubmit}
            >
      
                <input  
                        type="text"
                        name="email"
                        placeholder="correo"
                        autoComplete="off"
                        // className="auth__input"
                        value={email}
                        onChange={handleInputChange}

      
                />
    
                <input  
                        type="password"
                        name="password"
                        placeholder="contraseña"
                        // className="auth__input"
                        value={password}
                        onChange={handleInputChange}

                />
                <button 
                        type="submit"
                        className="btn-login"
                        onClick={handleSubmit}
                        // disabled= {loading}
                >Entrar</button>
    
                <div className="link">
                  <Link to="/register" className="link">Registrarme</Link>
                </div>
            </form>

          </div>
      
    </>
  )
}
