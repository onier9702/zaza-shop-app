
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { findActiveProduct } from '../../actions/homeEvents';

import '../../styles/CuadroProdBelongCate.css';

export const ProdsBelongCate = ({product}) => {


    const navigate = useNavigate();
    const dispatch   = useDispatch();
    const { products } = useSelector( state => state.product);
  
    const handleBuyProduct = ({target}) => {

        const idProd = target.id;
        dispatch( findActiveProduct(idProd, products) );
        navigate('/pub/buyProduct') || navigate('/pri/buyProduct');

    };
  
    return (
  
        <div style={{marginBottom: 50}} className="cuadro-product">

          <div className="img">
              {
                  (product.img) && <img  src={product.img} alt="img" id={product._id} />
              }
          </div>
          <div className="info-prod">
            <h5 className="name-prod" >{product.name}</h5>
            <span className="color-precio">{`Precio ${product.precio}`}</span>
            <span className="description" >{product.description}</span>
            <span className="amount" >{`Quedan: ${product.amount}`}</span>

            <button onClick={handleBuyProduct} type="button" id={product._id} className="btn btn-info">Ir a comprar</button>
          </div>

        </div>
    )
}
