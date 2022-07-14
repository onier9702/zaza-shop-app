

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
// import Swal from 'sweetalert2';

import { useForm } from '../hooks/useForm';
import { removeError, setError } from '../actions/ui';
import '../styles/auth/Login.css';
import { startRegisterUser } from '../actions/auth';

export const RegisterScreen = () => {


    const dispatch = useDispatch();
    const {msg} = useSelector(state => state.ui);
    const navigate = useNavigate(); 

    const [formValue, handleInputChange] = useForm( {
        name: '',
        email: '',   // onier@gmail.com
        password: '',
        password2: '',
        mobile: '',
    } );

    const { name, email, mobile, password, password2 } = formValue;

    const registered = (e) => {
      e.preventDefault();

      if (formValid()){

            const data = {
                name,
                email,
                password,
                mobile
            }
            dispatch(startRegisterUser(data));
            dispatch(setError('Registro Exitoso'));
            setTimeout(() => {
                dispatch(removeError());
                navigate('/login');
            }, 1800);
        }
    }

    const formValid = () => {
        if(name.trim().length === 0 ){
            dispatch(setError('El nombre esta vacio'));
             return false;
        } else if (!(validator.isEmail(email))){
            dispatch(setError('El Correo es incorrecto'));
            return false;
        } else if (password !== password2 || password.length < 6){
            dispatch(setError('La contraseña debe coincidir y tener al menos 6 caracteres '));
            return false;
        } else if (mobile.trim().length === 0){
            dispatch(setError('El Numero Telefono esta vacio'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

  return (

    <>
            <div className="container">
                <h3 className="tittle">Registro</h3>
                <form   className="content animate__animated animate__fadeIn animate__faster"
                        onSubmit={registered}
                        type="submit"
                        >

                    {
                        (msg) && <div className="alert-danger" > { msg } </div>
                    }
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        autoComplete="off"
                        className="auth__input"
                        value={name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="correo@gmail.com"
                        autoComplete="off"
                        className="auth__input"
                        value={email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        // className="auth__input"
                        value={password}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="password2"
                        placeholder="Confirma"
                        // className="auth__input"
                        value={password2}
                        onChange={handleInputChange}
                    />
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="celular"
                        // className="auth__input"
                        value={mobile}
                        onChange={handleInputChange}
                    />
                    <button
                    type="submit"
                    className="btn-login"
                    onClick={registered}
                    // disabled={true}
                    >Registrarme</button>

                    <div className="link">
                    <Link to="/pub/login" className="link">Ir a Autenticarme</Link>
                    </div>
                </form>
            </div>
    </>
  )
}
