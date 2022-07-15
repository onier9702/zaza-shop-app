
import React from 'react';
import { useSelector } from 'react-redux';

import '../../styles/home/Carousel2.css';

import { LastProducts } from './LastProducts';

export const CarouselProducts = () => {

  const { products } = useSelector(state => state.product);


  return (
    <div className="body" >

        <div className="slider">
            <div className="slides">

                <div className="slide first"></div>
                {
                    products.map( ( prod, index ) => (
                    <LastProducts key={prod.id} product={prod} index={index} />
                    ) )
                }
                </div> 
            
        </div>
    </div>
  )
}
