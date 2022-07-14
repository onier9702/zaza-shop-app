
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { CreateCategory } from '../components/CreateCategory';
import { CreateProduct } from '../components/CreateProduct';
import { EditUserAccount } from '../components/EditUserAccount';
import { BuyProduct } from '../components/Home/BuyProduct';
import { Home } from '../components/Home/Home';
import { SingleCategoryHome } from '../components/Home/SingleCategoryHome';
import { SingleProduct } from '../components/Home/SingleProduct';

import { MyProfile } from '../components/MyProfile';

export const DashboardRouter = () => {   // private with all privileges

  return (
    <div>

        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="user" element={ <MyProfile /> } />
            <Route path="editUser" element={ <EditUserAccount /> } />
            
            
            <Route path="singleProduct" element={ <SingleProduct /> } />
            <Route path="buyProduct" element={ <BuyProduct /> } />
            <Route path="singleCategory" element={ <SingleCategoryHome /> } />
            
            <Route path="newProduct" element={ <CreateProduct /> } />
            <Route path="newCategory" element={ <CreateCategory /> } />
        </Routes>
    </div>
  )
}
