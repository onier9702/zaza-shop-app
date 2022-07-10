
import React from 'react';
import { useSelector } from 'react-redux';

import '../../styles/Carousel2.css';
import { CarouselInput } from './CarouselInput';
import { CarouselLabel } from './CarouselLabel';
import { LastProducts } from './LastProducts';

export const CarouselProducts = () => {

  const { products } = useSelector(state => state.product);


  return (
    <div className="body" >

        <div className="slider">
            <div className="slides">
                {/* <input type="radio" name="radio-btn" id="radio1"/>
                <input type="radio" name="radio-btn" id="radio2"/>
                <input type="radio" name="radio-btn" id="radio3"/>
                <input type="radio" name="radio-btn" id="radio4"/> */}
                {
                    products.map( ( prod, index ) => (
                        <CarouselInput key={prod._id} index={index} />
                        ) )
                }

                <div className="slide first"></div>
                {
                    products.map( ( prod, index ) => (
                    <LastProducts key={prod._id} product={prod} index={index} />
                    ) )
                }
                </div> 

                <div className="manual-navigation">
                    {
                        products.map( ( prod, index ) => (
                            <CarouselLabel key={prod._id} index={index} />
                            ) )
                    }
                    {/* <label for="radio1" className="manual-btn"></label>
                    <label for="radio2" className="manual-btn"></label>
                    <label for="radio3" className="manual-btn"></label> */}
                </div>
            
        </div>
    </div>
  )
}
