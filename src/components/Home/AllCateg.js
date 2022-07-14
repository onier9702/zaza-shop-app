
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { findActiveCategory } from '../../actions/homeEvents';

import '../../styles/home/HomeAllCateg.css';

export const AllCateg = ({category}) => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {categories} = useSelector( state => state.category);

  let token;
  useEffect(() => {
    token = localStorage.getItem('token');
  }, [token]);
  

  const handleClickCat = ({target}) => {

    const idCate = target.id;
    dispatch( findActiveCategory(idCate, categories) );
    if ( !token ){
      navigate('/pub/singleCategory');
    } else {
      navigate('/pri/singleCategory');
    };
  };

  return (
    <div className="cuadro-categ">
        <span onClick={handleClickCat} id={category.id} >{category.name}</span>
    </div>
  )
}
