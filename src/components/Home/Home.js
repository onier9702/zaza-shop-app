
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/Home.css';
import { Logo } from '../Logo';
import { AllCateg } from './AllCateg';
import { CarouselProducts } from './CarouselProducts';
import { LastProducts } from './LastProducts';

export const Home = () => {

  const { categories } = useSelector(state => state.category);
  const { products } = useSelector(state => state.product);

  // const dispatch = useDispatch();
  console.log(categories);
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
        {
          categories.map( (cate, index) => (
            <AllCateg key={index} category={cate} />
          ) )
        }
      </div>

      <CarouselProducts />

    </div>
  )
}
