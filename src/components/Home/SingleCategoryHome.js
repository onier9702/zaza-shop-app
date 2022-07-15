
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../../styles/home/SingleCategory.css';
import { ProdsBelongCate } from './ProdsBelongCate';

export const SingleCategoryHome = () => {
    
  const navigate = useNavigate();
  const { activeCategory, categories } = useSelector( state => state.category);
  const { name } = activeCategory;
  const { products } = useSelector(state => state.product);

  let prodBelongCate = [];
  for ( let prod of products ){

    if ( prod.category.name === name ){  // product who belong this category
        prodBelongCate.push(prod);
    };

  };


  const handleReturn = () => {
      navigate(-1);
  };

  return (
    <div className="single-category">
        <i className="bi bi-arrow-left-short" onClick={handleReturn} ></i>
        <div className="info-category">

          <h3 style={{color: '#219ebc', marginBottom: 18}} >{name}</h3>
          {
            prodBelongCate.map( prod => (
              <ProdsBelongCate key={prod.id} product={prod} />
            ))
          }

        </div>
    </div>
  )
}
