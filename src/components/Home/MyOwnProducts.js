
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/auth/MyOwnProds.css';
import { AllOwnProds } from './AllOwnProds';
import { setAllOwnProducts } from '../../actions/userProduct';

export const MyOwnProducts = () => {

  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth);
  const { products } = useSelector(state => state.product);

  const arrOwnProds = products.filter( prod => prod.user.name === name );
  dispatch( setAllOwnProducts(arrOwnProds) );
  // console.log(arrOwnProds);

  return (

    <div className="div-MyProducts">
        {
            arrOwnProds.map( pro => (
                <AllOwnProds key={pro.id} product={pro} />
            ))
        }        

    </div>
  )
}
