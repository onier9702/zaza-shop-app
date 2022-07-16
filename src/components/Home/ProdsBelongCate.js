
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { findActiveProduct } from '../../actions/homeEvents';
import { findActiveSeller } from '../../actions/owner';
import { getTokenFromLocalStorage } from '../../helpers/getTokenFromLocalStorage';

import '../../styles/CuadroProdBelongCate.css';

export const ProdsBelongCate = ({product}) => {


    const navigate = useNavigate();
    const dispatch   = useDispatch();
    const { products, activeProduct } = useSelector( state => state.product);
    const { sellers } = useSelector( state => state.owner);

    // let token;

    // useEffect(() => {
    //   token = localStorage.getItem('token');
    // }, [token])
    
  
    const handleBuyProduct = ({target}) => {

        const idProd = target.id;
        dispatch( findActiveProduct(idProd, products) );
        dispatch( findActiveSeller(activeProduct.user._id, sellers) );
        
        ( getTokenFromLocalStorage() ) ? navigate('/pri/singleProduct') : navigate('/pub/singleProduct');

    };
  
    return (
  
        <div className="cuadro-product">

          <div className="img">
              {
                  (product.img) && <img  src={product.img} alt="img" id={product.id} />
              }
          </div>
          <div className="info-prod">
            <h5 className="name-prod" >{product.name}</h5>
            <span className="color-precio">{`Precio ${product.precio}`}</span>
            <span className="description" >{product.description}</span>
            <span className="amount" >{`Quedan: ${product.amount}`}</span>

            <button onClick={handleBuyProduct} type="button" id={product.id} className="btn btn-info">{`Ver ${product.name}`}</button>
          </div>

        </div>
    )
}
