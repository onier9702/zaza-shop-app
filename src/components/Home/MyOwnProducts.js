
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/auth/MyOwnProds.css';
import { AllOwnProds } from './AllOwnProds';
import { setAllOwnProducts } from '../../actions/userProduct';
import { useNavigate } from 'react-router-dom';

export const MyOwnProducts = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useSelector(state => state.auth);
  const { products } = useSelector(state => state.product);

  const arrOwnProds = products.filter( prod => prod.user.name === name ); 
  dispatch( setAllOwnProducts(arrOwnProds) );
  // console.log(arrOwnProds);

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <>
      <i id="return-i" className="bi bi-arrow-left-short" onClick={handleReturn} ></i>
      <div className="div-MyProducts">

        <h1>Mis Productos</h1>
        {
            arrOwnProds.map( pro => (
                <AllOwnProds key={pro.id} product={pro} />
            ))
        }        

      </div>
    </>
  )
}
