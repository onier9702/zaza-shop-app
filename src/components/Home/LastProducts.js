
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { findActiveProduct } from '../../actions/homeEvents';

// import '../../styles/HomeAllProducts.css';
import '../../styles/home/Carousel2.css';


export const LastProducts = ({product}) => {

  const navigate = useNavigate();
  const {products} = useSelector( state => state.product);
  const dispatch   = useDispatch();

  let token;
  useEffect(() => {
    token = localStorage.getItem('token');
  }, [token]);
  

  const handleSeeProductHome = (e) => {
    const currentId = e.target.id;
    // console.log(currentId);
    dispatch( findActiveProduct(currentId, products) );  // activate on Redux the clicked Product
    if ( token ){
      navigate('/pri/singleProduct');
    } else {
      navigate('/pub/singleProduct');
    };
  };

  return (

    // <div className="last-imgs">
    <>
        <div className="slide">
          <div onClick={handleSeeProductHome} className="cuadro-product">
            <img  src={product.img} alt="img" id={product.id} />
            <span className="color-precio" >{`Precio ${product.precio}`}</span>

          </div>
        </div>
    </>
    // </div>
  )
}
