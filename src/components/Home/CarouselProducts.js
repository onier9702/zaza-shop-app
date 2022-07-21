
import React from 'react';
import { useSelector } from 'react-redux';

import '../../styles/home/Carousel2.css';

import { LastProducts } from './LastProducts';

export const CarouselProducts = () => {

  const { products } = useSelector(state => state.product);

  let newArr = [];
  for ( let i = products.length ; i > (products.length - 7); i--  ){
    newArr.push(products[i-1]);
  };
  console.log(newArr);


  return (
    <div className="body" >

        <div className="slider">
            <div className="slides">

                <div className="slide first"></div>
                {
                    newArr.map( prod => (
                    <LastProducts key={prod.id} product={prod} />
                    ) )
                }
                </div> 
            
        </div>
    </div>
  )
}
