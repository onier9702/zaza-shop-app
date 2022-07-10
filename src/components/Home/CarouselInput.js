
import React from 'react';

export const CarouselInput = ({index}) => {

    let i = index + 1;

  return (

    <input type="radio" name="radio-btn" id={`radio${i}`}/>
  )
}
