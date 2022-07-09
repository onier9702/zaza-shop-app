
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/Home.css';
import { Logo } from '../Logo';

export const Home = () => {

  // const { categories } = useSelector(state => state.category);
  // const dispatch = useDispatch();

  const handleSubmit = (e) => {

    e.preventDefault();

  };

  return (
    <div>
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
        
      </div>

    </div>
  )
}
