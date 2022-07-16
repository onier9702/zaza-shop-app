
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { findActiveCategory } from '../../actions/homeEvents';
import { getTokenFromLocalStorage } from '../../helpers/getTokenFromLocalStorage';

import '../../styles/home/HomeAllCateg.css';

export const AllCateg = ({category}) => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {categories} = useSelector( state => state.category);

  // let token;
  // useEffect(() => {
  //   token = localStorage.getItem('token');
  // }, [token]);
  

  const handleClickCat = ({target}) => {

    const idCate = target.id;
    dispatch( findActiveCategory(idCate, categories) );
    ( getTokenFromLocalStorage() ) ? navigate('/pri/singleCategory') : navigate('/pub/singleCategory');
    
  };

  return (
    <div className="cuadro-categ">
        <span onClick={handleClickCat} id={category.id} >{category.name}</span>
    </div>
  )
}
