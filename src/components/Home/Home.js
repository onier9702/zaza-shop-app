
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/home/Home.css';
import { Logo } from '../Logo';
import { AllCateg } from './AllCateg';
import { CarouselProducts } from './CarouselProducts';

export const Home = () => {

  const { categories } = useSelector(state => state.category);
  // const { products } = useSelector(state => state.product);

  // const dispatch = useDispatch();
  
  const handleSubmit = (e) => {

    e.preventDefault();

  };

  return (

    <div >
      <div className="home">

        <Logo />

        <form className="form-search" 
                    onSubmit={handleSubmit}>

            <input type="text" className="form-control" 
                  placeholder="Buscar..." 
                  aria-label="search" 
                  aria-describedby="basic-addon1" />

        </form>
      </div>

      <div className="show-categories" >
        <div className="slider">
          <div className="slides">
            {
              categories.map( cate => (
                <AllCateg key={cate.id} category={cate} />
              ) )
            }
          </div>
        </div>
      </div>
      
      <div className="div-recent">
        <h4 className="text-recientes">Recientes </h4>
        <i className="bi bi-arrow-right" id="icon-recent"></i>
      </div>

      <CarouselProducts />

    </div>
  )
}
