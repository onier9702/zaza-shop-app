
import React from 'react';

import '../styles/auth/EditUserProfile.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../actions/ui';
import { useForm } from '../hooks/useForm';
import { startUpdateUserProfile } from '../actions/auth';
import { useNavigate } from 'react-router-dom';


export const EditUserAccount = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {msg, loading} = useSelector(state => state.ui);
    const {uid} = useSelector(state => state.auth);

    const [formValue, handleInputChange] = useForm( {
        password: '',
        password2: '',
        mobile: '',
        tarjeta: '',
        tipotarjeta: '',
        address: ''
    } )

    const {  mobile, password, password2, tarjeta, address, tipotarjeta } = formValue;
    
    const edit = (e) => {
        e.preventDefault();

        const formValid = () => {
            
            if (password){
                if (password !== password2 || password.length < 6){
                    dispatch(setError('La contraseña debe coincidir y tener al menos 6 caracteres '));
                    return false;
                };
            };

            if (mobile){
                if (mobile.trim().length < 8){
                    dispatch(setError('El Numero Telefono es incorrecto'));
                    return false;
                };
                
            };
            if (tarjeta){
                if (tarjeta.trim().length < 19){
                    dispatch(setError('La tarjeta tiene un formato incorrecto, intente con este formato xxxx-xxxx-xxxx-xxxx'));
                    return false;
                };
            };
            dispatch(removeError());
            return true;
        }

        if (formValid()){
            let editedData = {};
            if (mobile) {
                editedData.mobile = mobile;
            };

            if (password) {
                editedData.password = password;
            };

            if (tarjeta) {
                if (tipotarjeta.length === 0 || tipotarjeta === 'CUP'){
                    editedData.tarjeta_CUP = tarjeta;
                } else {
                    editedData.tarjeta_USD = tarjeta;
                };
            };
            if (address) {
                editedData.address = address;
            };
        
            // console.log(editedData);
            dispatch( startUpdateUserProfile(uid, editedData) )
                .then( resp => {

                    if ( resp.ok ){
                        dispatch( setError('Actualizado con exito'));
                        setTimeout(() => {
                            dispatch(removeError());
                            navigate('/priv/user');
                        }, 1200);
                    }

                })
                .catch( err => console.log(err));

        } else {
            setTimeout(() => {
                dispatch(removeError());
            }, 2300);

        };

        dispatch(removeError());

    };

  return (
    <div className="div-editUserAccount">
        <h2>Actualizar/Editar Perfil</h2>
        <form  className="content animate__animated animate__fadeIn animate__faster"
                onSubmit={edit}
                type="submit"
                >
                {
                    (msg) && <div className="alert-danger" > { msg } </div>
                }
                <h6>Contraseña</h6>
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
                <h6>Repita Contraseña</h6>
                <input
                    type="password"
                    name="password2"
                    placeholder="Confirma"
                    autoComplete="off"
                    value={password2}
                    onChange={handleInputChange}
                />
                <h6>Telefono</h6>
                <input
                    type="tel"
                    name="mobile"
                    placeholder="Celular"
                    autoComplete="off"
                    value={mobile}
                    onChange={handleInputChange}
                />
                <h6>Tarjeta Recibir Pago</h6>
                <input
                    type="text"
                    name="tarjeta"
                    placeholder="Targeta"
                    autoComplete="off"
                    value={tarjeta}
                    onChange={handleInputChange}
                />
                <label for="tipotarjeta">Tipo Tarjeta</label>
                <select onChange={handleInputChange} className="form-select" aria-label="Default select example" name="tipotarjeta" value={tipotarjeta}>
                  <option value="CUP">CUP</option>
                  <option value="USD">USD</option>
                </select>
                <h6>Direccion</h6>
                <input
                    type="text"
                    name="address"
                    placeholder="Direccion"
                    autoComplete="off"
                    value={address}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn-login"
                    onClick={edit}
                    disabled={loading}
                >Enviar</button>
        </form>
    </div>
  )
}
