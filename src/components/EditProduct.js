

import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import '../styles/CreateProduct.css';
import { removeError, removeMsgGreen, removeMsgRed, setMsgGreen, setMsgRed } from '../actions/ui';
import { useForm } from '../hooks/useForm';
import { AllCateSelections } from './AllCateSelections';
import { startUpdateProduct } from '../actions/userProduct';
import { startUploadImg } from '../actions/createCateOrProduct';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const EditProduct = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { categories } = useSelector( state => state.category);
    const { activeUserProduct } = useSelector( state => state.userProd);

    const {id} = activeUserProduct;

    const { products } = useSelector( state => state.product);
    const {msgGreen, msgRed, loading} = useSelector( state => state.ui);

    const [formValue, handleInputChange, reset] = useForm( {
      name: '',
      precio: '',
      amount: '',
      description: ''
    } );

    const { name, precio, amount, description } = formValue;

  /* This Laptop is new and present a good health battery 
  life, it will give you with cover protection and mica. 
  It also has 1 year of warranty. */

    const updateProduct = (e) => {
        e.preventDefault();

        const formValid = () => {
            if ( !name && !precio && !amount && !description ) {
                dispatch( setMsgRed('Debe de llenar algun campo antes de actualizar') );
                return false;
            }
            return true;
        };

        if ( formValid() ) {

            let data = {};

            if (name) {
                data.name = name;
            };

            if (precio) {
                data.precio = precio;
            };

            if (amount) {
                data.amount = amount;
            };

            if (description) {
                data.description = description;
            };

            console.log(data);

            dispatch( startUpdateProduct(id, data) )
                .then( resp => {
                    if (resp.ok){
                        dispatch( setMsgGreen('El Producto fue Actualizado'));
                        reset();
                        setTimeout(() => {
                            dispatch(removeMsgGreen());
                        }, 1800);
                    }
                })
                .catch( err => console.log(err));

        } else {
            setTimeout(() => {
                dispatch( removeMsgRed());
            }, 1900);
        }

    };

    const inputImg = useRef(null);
    const handleImgClick = () => {
        inputImg.current.click();
    };
    const handleImgChange = (e) => {
        const file = e.target.files; 

        if (file) {

            for ( let i = 0; i < 3; i++){

                if ( file[i]){

                    if ( file[i].size > 170000 ){
                        return Swal.fire('Nota', 'Debe subir fotos de un tamaño menor, puede usar Whatsapp para reducirla', 'warning');
                    };
                } else break;

            };
            console.log('All Photos are fulfill');
            console.log(file);
            dispatch( startUploadImg(id, 'products',file, products) )
              .then( resp => {
                  if (resp.ok){
                      dispatch(setMsgGreen('Posteo Exitoso'));
                      setTimeout(() => {
                          dispatch(removeMsgGreen());
                      }, 1700);
                      navigate('/pri/user');
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

  return (
    <div className="div-createProduct">

        <div className="header">
            <h1>Editar/Actualizar Producto</h1>
            <div className="Upload-Imgs">
                <i className="bi bi-camera-fill" onClick={handleImgClick} id="icon-cam"></i>
                <span>No mas de 3 Fotos</span>
            </div>
        </div>


        <form  className="content animate__animated animate__fadeIn animate__faster"
                onSubmit={updateProduct}
                type="submit"
        >
            {
                (msgGreen) && <div style={{color: 'green'}} /*className="alert-danger"*/ > { msgGreen } </div>
            }
            {
                (msgRed) && <div style={{color: 'red'}} /*className="alert-danger"*/ > { msgRed } </div>
            }
            <h6>Nombre</h6>
            <input
                type="text"
                name="name"
                placeholder="Nombre Producto"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
            />

            <h6>Precio</h6>
            <input
                type="text"
                name="precio"
                placeholder="Precio"
                autoComplete="off"
                value={precio}
                onChange={handleInputChange}
            />
          
            <h6>Cantidad</h6>
            <input
                type="number"
                name="amount"
                placeholder="1"
                autoComplete="off"
                value={amount}
                onChange={handleInputChange}
            />

            <h6>Describir Producto</h6>
            <textarea
                type="text"
                name="description"
                placeholder="Descripcion"
                autoComplete="off"
                value={description}
                onChange={handleInputChange}
            />


            <button
                type="submit"
                className="btn-createCate"
                onClick={updateProduct}
                disabled={loading}
            >Actualizar Producto</button>

        </form>

        {/* <button className="btnImg"
                onClick={handleImgClick}
        >Subir Imagen</button> */}

        <input type="file" multiple
               ref={inputImg}
               onChange={handleImgChange} 
            //    name="file"
               className="img"
        />
    </div>
  )
}
