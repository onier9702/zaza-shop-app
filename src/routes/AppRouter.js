
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  Route, Routes } from 'react-router-dom';


import { startLoadAllCategories, startLoadAllProducts } from '../actions/homeEvents';
import '../styles/home/Home.css';

import { CreateCategory } from '../components/CreateCategory';
import { CreateProduct } from '../components/CreateProduct';
import { Home } from '../components/Home/Home';
import { LoginScreen } from '../components/Login';
import { MyProfile } from '../components/MyProfile';
import { ChooseNav } from '../components/navigation/ChooseNav';
import { RegisterScreen } from '../components/Register';
import { SingleProduct } from '../components/Home/SingleProduct';
import { EditUserAccount } from '../components/EditUserAccount';




export const AppRouter = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch( startLoadAllCategories() );
    dispatch( startLoadAllProducts() );
    
  }, []);
  

  return (
    <div className="boss">
        <ChooseNav/>
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/user' element={ <MyProfile /> } />
            <Route path='/editUser' element={ <EditUserAccount /> } />

            <Route path='/login' element={ <LoginScreen /> } />
            <Route path='/register' element={ <RegisterScreen /> } />
            <Route path='/newProduct' element={ <CreateProduct /> } />
            <Route path='/newCategory' element={ <CreateCategory /> } />
            <Route path='/singleProduct' element={ <SingleProduct /> } />

        </Routes>
    </div>
  )
}
