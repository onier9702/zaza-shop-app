
import React from 'react';
import { Route, Routes } from 'react-router-dom';


import { CreateCategory } from '../components/private/CreateCategory';
import { CreateProduct } from '../components/private/CreateProduct';
import { IsActiveNavbar } from '../components/private/IsActiveNavbar';
import { User } from '../components/private/User';
import { Home } from '../components/public/Home';

export const PrivateRoutes = () => {


  return (
    <div>

        <IsActiveNavbar />

        <Routes>
            <Route path='/newProduct' element={ <CreateProduct /> } />
            <Route path='/newCategory' element={ <CreateCategory /> } />
            <Route path='/home' element={ <Home /> } />

        </Routes>


    </div>
  )
}
