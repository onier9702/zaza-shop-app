
import React from 'react';

export const CarouselLabel = ({index}) => {

    let i = index + 1;

  return (

    <label for={`radio${i}`} className="manual-btn"></label>
  )
}
