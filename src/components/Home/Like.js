
import React from 'react';
import { useSelector } from 'react-redux';

import '../../styles/home/CarouselLiked.css';
import { CarouselLiked } from './CarouselLiked';

export const Like = () => {

    const { likeAllProducts = []} = useSelector( state => state.like);

  return (
    <div className="carousel">
        {
            likeAllProducts.map( p => (
                <CarouselLiked product={p} key={p.id} />
            ))
        }
    </div>
  )
}
