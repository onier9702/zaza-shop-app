
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import '../../styles/home/CarouselLiked.css';
import { findActiveProduct } from '../../actions/homeEvents';
import { getTokenFromLocalStorage } from '../../helpers/getTokenFromLocalStorage';

export const CarouselLiked = ({product}) => {

  const navigate = useNavigate();
  const {products} = useSelector( state => state.product);
  const dispatch   = useDispatch();
  

  const handleSeeProductHome = (e) => {
    const currentId = e.target.id;
    // console.log(currentId);
    dispatch( findActiveProduct(currentId, products) );  // activate on Redux the clicked Product
    ( getTokenFromLocalStorage() ) ? navigate('/pri/singleProduct') : navigate('/pub/singleProduct');

  };

  return (
    <div className="slides2">
      <div className="cuadroImgName" onClick={handleSeeProductHome} >
          <img src={product.img1} alt="img-like" id={product.id} />
          <span>{product.name}</span>
      </div>
    </div>
  )
}
