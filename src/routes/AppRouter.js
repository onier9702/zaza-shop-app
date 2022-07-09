
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  Route, Routes } from 'react-router-dom';
import { startLoadAllCategories } from '../actions/homeEvents';



import { CreateCategory } from '../components/CreateCategory';
import { CreateProduct } from '../components/CreateProduct';
import { Home } from '../components/Home/Home';
import { Login } from '../components/Login';
import { MyProfile } from '../components/MyProfile';
import { ChooseNav } from '../components/navigation/ChooseNav';
import { Register } from '../components/Register';




export const AppRouter = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch( startLoadAllCategories() );
    
  }, []);
  

  return (
    <div>
        <ChooseNav/>
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/user' element={ <MyProfile /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/register' element={ <Register /> } />
            <Route path='/newProduct' element={ <CreateProduct /> } />
            <Route path='/newCategory' element={ <CreateCategory /> } />

        </Routes>
    </div>
  )
}
