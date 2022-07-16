
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { findActiveSeller } from '../../actions/owner';
import { getTokenFromLocalStorage } from '../../helpers/getTokenFromLocalStorage';

import '../../styles/home/SingleProduct.css';

export const SingleProduct = () => {

    const dispatch = useDispatch();
    const {activeProduct} = useSelector(state => state.product);
    const {sellers} = useSelector(state => state.owner);

    const { name, id, user, category, precio, description, amount, img } = activeProduct;


    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    };

    const handleBuyProduct = () => {
        // e.preventDefault();        
        console.log('Buy a Iphone inside carousel products');
        dispatch( findActiveSeller(user._id, sellers) );
        
        ( getTokenFromLocalStorage() ) ? navigate('/pri/buyProduct') : navigate('/pub/buyProduct');
        
    };

    if (!name) {
        ( getTokenFromLocalStorage ) ? navigate('/pri/') : navigate('/pub/');
    }

  return (
    <div className="single-product">
        <i className="bi bi-arrow-left-short" onClick={handleReturn} ></i>
        <div className="info-product">
            <h3>{name}</h3>

            <img src={img} alt="img-single" />
            <span>{`Precio: ${precio}`}</span>
            <span>{`Categoria: ${category.name}`}</span>
            <span>{`Quedan: ${amount} de este producto`}</span>
            <span>{`Descripcion: ${description}`}</span>

            <button type="button" className="btn btn-success" onClick={handleBuyProduct} >Ir a Comprar</button>

        </div>
    </div>
  )
}
