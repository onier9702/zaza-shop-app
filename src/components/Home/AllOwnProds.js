
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findActiveUserProd } from '../../actions/userProduct';

import '../../styles/auth/MyOwnProds.css';
import { useNavigate } from 'react-router-dom';

export const AllOwnProds = ({product}) => {

    const dispatch = useDispatch();
    const {products} = useSelector( state => state.product);

    const navigate = useNavigate();

    const handleEditProduct = ({target}) => {

        console.log('Edit Product');
        const idProdFounded = target.id;
        dispatch( findActiveUserProd(idProdFounded, products) );
        navigate('/pri/editProduct');
    }

  return (

    <div className="myproduct">
        <div className="one-cuadro" >
            <div className="img">
                {
                    (product.img) && <img  src={product.img} alt="img" id={product.id} />
                }
            </div>
            <div className="information">
                <h5 className="name-prod" >{product.name}</h5>
                <span className="color-precio">{`Precio ${product.precio}`}</span>
                <span className="description" >{product.description}</span>
                <span className="amount" >{`Quedan: ${product.amount}`}</span>
            </div>  
            <i onClick={handleEditProduct} className="bi bi-pencil-square" id={product.id}></i>

        </div>

    </div>

  )
}
