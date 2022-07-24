
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/home/CarouselLiked.css';
import { setLikedProducts, startFetchLikedProducts } from '../../actions/homeEvents';
import { GetRandomNumbers } from '../../helpers/GetRandomNumber';
import { Like } from './Like';

export const LikedProducts = () => {

    const dispatch = useDispatch();
    const { products } = useSelector( state => state.product);

    useEffect(() => {

        let prodsLength = products.length;
        let since = GetRandomNumbers(prodsLength - 4);
        
        dispatch( startFetchLikedProducts(5, since) )
            .then( resp => {
                if (resp.ok){
                    dispatch( setLikedProducts(resp.products) );
                }
            } )
            .catch( err => console.log(err))

    }, [dispatch])
    
  return (
    <div style={{paddingLeft: 30}}  className="carousel-liked">
        <Like />
    </div>
  )
}
