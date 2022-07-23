
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { findActiveSeller } from '../../actions/owner';
import { getTokenFromLocalStorage } from '../../helpers/getTokenFromLocalStorage';

import '../../styles/home/SingleProduct.css';

export const SingleProduct = () => {

    const dispatch = useDispatch();
    const {activeProduct} = useSelector(state => state.product);
    const {sellers} = useSelector(state => state.owner);
    // const [activeProd, setActiveProd] = useState(true);

    const { name, user, precio, description, amount, img1, img2, img3 } = activeProduct;

    const navigate = useNavigate();
    useEffect(() => {
        if ( !name ){
            // console.log('Ative Product empty');
            ( getTokenFromLocalStorage() ) ? navigate('/pri/') : navigate('/pub/');
        }
        
    }, [name, navigate])
    

    const handleReturn = () => {
        navigate(-1);
    };

    const handleBuyProduct = () => {
        // e.preventDefault();        
        console.log('Buy a Iphone inside carousel products');
        dispatch( findActiveSeller(user._id, sellers) );
        
        ( getTokenFromLocalStorage() ) ? navigate('/pri/buyProduct') : navigate('/pub/buyProduct');
        
    };
                    
                    

  return (
    <div className="single-product">
        <i className="bi bi-arrow-left-short" onClick={handleReturn} ></i>
        <div className="info-product">
            <div className="divImages">
                <img src={img1} alt="singleProduct" />
                {
                    (img2) && <img src={img2} alt="singleProduct2" />
                }
                {
                    (img3) && <img src={img3} alt="singleProduct3" />
                }                
            </div>
            
            <h3>{name}</h3>
            <span>{`Precio: ${precio}`}</span>
            {/* <span>{`Categoria: ${category.name}`}</span> */}
            <span>{`Quedan: ${amount} de este producto`}</span>
            <span>{`Descripcion: ${description}`}</span>

            {/* {
                ( img ) && <img src={img} alt="singleProduct" />
            }
            {
                ( name ) && <h3>{name}</h3>
            }
            {
                ( precio ) && <span>{`Precio: ${precio}`}</span>
            }
            {
                ( category.name ) && <span>{`Categoria: ${category.name}`}</span>
            }
            {
                ( amount ) && <span>{`Quedan: ${amount} de este producto`}</span>
            }
            {
                ( description ) && <span>{`Descripcion: ${description}`}</span>
            } */}
            
            <button type="button" className="btn btn-success" onClick={handleBuyProduct} >Ir a Comprar</button>

        </div>
    </div>
  )
}
