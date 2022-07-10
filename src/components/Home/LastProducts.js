
import React from 'react';

// import '../../styles/HomeAllProducts.css';
import '../../styles/Carousel2.css';


export const LastProducts = ({product}) => {

  return (

    // <div className="last-imgs">
    <>
        <div className="slide">
          <div className="cuadro-product">
            <img src={product.img} alt="img" />
            <span className="color-precio" >{product.precio}</span>
          </div>
        </div>
    </>
    // </div>
  )
}
