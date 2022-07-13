
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findActiveCategory } from '../../actions/homeEvents';

import '../../styles/home/HomeAllCateg.css';

export const AllCateg = ({category}) => {

  const dispatch = useDispatch();
  const {categories} = useSelector( state => state.category);

  const handleClickCat = ({target}) => {

    const idCate = target.id;
    dispatch( findActiveCategory(idCate, categories) );

  }

  return (
    <div className="cuadro-categ">
        <span onClick={handleClickCat} id={category.id} >{category.name}</span>
    </div>
  )
}
