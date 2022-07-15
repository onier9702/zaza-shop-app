
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ownerUserProduct } from '../../actions/owner';

import '../../styles/home/SingleProduct.css';

export const SingleProduct = () => {

    // const dispatch = useDispatch();
    const {activeProduct} = useSelector(state => state.product);
    const { name, id, user, category, precio, description, amount, img } = activeProduct;

    // const { name: nameUser, _id: idUser } = user;  // User info

    // const { name: nameCategory, _id: idCategory } = category;  // Category info

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    };

    let token;
    useEffect(() => {
        token = localStorage.getItem('token');
    }, [token]);
    

    const handleBuyProduct = () => {
        // e.preventDefault();        
        console.log('Buy a Iphone inside carousel products');
        if (token){
            navigate('/pri/buyProduct');
        } else {
            navigate('/pub/buyProduct');
        };   
    };

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
            <span>{`Categoria: ${category.name}`}</span>
            <span>{`Quedan: ${amount} de este producto`}</span>
            <span>{`Descripcion: ${description}`}</span>

            <button type="button" className="btn btn-success" onClick={handleBuyProduct} >Ir a Comprar</button>

        </div>
    </div>
  )
}
