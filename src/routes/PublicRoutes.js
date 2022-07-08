
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/public/Home';
import { Login } from '../components/public/Login';
import { Register } from '../components/public/Register';

export const PublicRoutes = () => {


  return (
    <div>
        <Routes >
            <Route path='/' element={ <Home /> } />
            <Route path='/register' element={ <Register /> } />
            <Route path='/login' element={ <Login /> } />


        </Routes>
    </div>
  )
}
