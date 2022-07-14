

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Swal from 'sweetalert2';

import { useForm } from '../hooks/useForm';

import '../styles/auth/Login.css';
import { startLogin } from '../actions/auth';
import { removeError, setError } from '../actions/ui';
// import { startLogin } from '../../actions/auth';

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {msg, loading} = useSelector( state => state.ui );

  
  const [formValue, handleInputChange] = useForm( {
    email: '',
    password: '',
  } )

  const { email, password } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
   
    dispatch(startLogin(formValue))
      .then( resp => {

        if (resp.ok){
          dispatch(setError(resp.message));
          setTimeout(() => {
            dispatch(removeError());
            navigate('/pri/user');
          }, 1500);

        } else {
          Swal.fire('Error', resp.message, 'error');
        };
      })
      .catch( err => Swal.fire('Error', err , 'error'));
  }
 

  return (
    <>
      
          <div className="container">

            <h3 >Login</h3>
      
            <form className="content animate__animated animate__fadeIn animate__faster" 
                  onSubmit={handleSubmit}
            >
      
                {
                  (msg) && <div className="alert-danger" > { msg } </div>
                }

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
                        disabled= {loading}
                >Entrar</button>
    
                <div className="link">
                  <Link to="/pub/register" className="link">Registrarme</Link>
                </div>
            </form>

          </div>
      
    </>
  )
}
