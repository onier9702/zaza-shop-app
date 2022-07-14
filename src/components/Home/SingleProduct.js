
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../../styles/home/SingleProduct.css';

export const SingleProduct = () => {

    const {activeProduct} = useSelector(state => state.product);
    const { name, _id, user, category, precio, description, amount, img } = activeProduct;

    // const { name: nameUser, _id: idUser } = user;  // User info

    const { name: nameCategory, _id: idCategory } = category;  // Category info

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    };

    const handleBuyProduct = (e) => {
        e.preventDefault();
        console.log('Buy a Iphone');
        // Redirect to Buying a Product
    }


    if (!name) {
        return <h3>Debe regresar a la pagina anterior y seleccionar un Producto</h3>
    }

  return (
    <div className="single-product">
        <i className="bi bi-arrow-left-short" onClick={handleReturn} ></i>
        <div className="info-product">
            <h3>{name}</h3>

            <img src={img} alt="img-single" />
            <span>{`Precio: ${precio}`}</span>
            <span>{`Categoria: ${nameCategory}`}</span>
            <span>{`Quedan: ${amount} de este producto`}</span>
            <span>{`Descripcion: ${description}`}</span>

            <button type="button" className="btn btn-success" onClick={handleBuyProduct} >Ir a Comprar</button>

        </div>
    </div>
  )
}
