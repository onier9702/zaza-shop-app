
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../../styles/home/Home.css';
import { useForm } from '../../hooks/useForm';
// import { removeMsgRed, setMsgRed } from '../../actions/ui';
import { getTokenFromLocalStorage } from '../../helpers/getTokenFromLocalStorage';
import { Logo } from '../Logo';
import { AllCateg } from './AllCateg';
import { CarouselProducts } from './CarouselProducts';
import { LikedProducts } from './LikedProducts';
// import { Search } from './Search';
import { clearProdsBelongCate, startSearch } from '../../actions/homeEvents';

export const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector(state => state.category);
  const { name } = useSelector(state => state.auth);

  const [formValue, handleInputChange, reset] = useForm({
    terminus: ''
  });

  const { terminus } = formValue;

  useEffect(() => {
    dispatch( clearProdsBelongCate() );
  }, [])
  
  
  const handleSubmit = (e) => {

    e.preventDefault();
    if ( terminus.trim().length === 0 ){
      return;
    }
    dispatch( startSearch(terminus) )
      .then( resp => {
        if( resp.ok ){
          ( getTokenFromLocalStorage() ) ? navigate('/pri/busqueda') : navigate('/pub/busqueda');
        }
      })
      .catch( err => console.log(err));

    reset();

  };

  const handleIconUserProfile = () => {
    if (name){
      navigate('/pri/user');
    } else {
      navigate('/pub/login')
    };
  };

  return (

    <div >
      <div className="home">
        <div className="header-home">
          <Logo />
          <i className="bi bi-person-square" onClick={handleIconUserProfile}  ></i>
        </div>
        <form className="form-search" 
                    onSubmit={handleSubmit}>
            
            <div className="div-search">
              <input type="text" className="form-control"  
                    name="terminus"
                    onChange={handleInputChange}
                    value={terminus}
                    placeholder="Buscar..." 
                    autoComplete="off"
                    aria-label="search" 
                    aria-describedby="basic-addon1" />
              <i className="bi bi-search" typeof="submit" onClick={handleSubmit} ></i>
            </div>

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

      <h4 style={{marginBottom: 5,paddingLeft: 25, paddingTop: 15}}>Te Puede Gustar</h4>
      <div className="div-like">
        <LikedProducts />
      </div>

      <div className="div-reservedRights">
        <h5>App en desarrollo por React  @Ing.Onier</h5>
      </div>

    </div>
  )
}
