
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BuyProduct } from '../components/Home/BuyProduct';
import { GetPermission } from '../components/Home/GetPermission';

import { Home } from '../components/Home/Home';
import { Search } from '../components/Home/Search';
import { SingleCategoryHome } from '../components/Home/SingleCategoryHome';
import { SingleProduct } from '../components/Home/SingleProduct';
import { LoginScreen } from '../components/Login';
import { HowItWorks } from '../components/navigation/HowItWorks';
import { RegisterScreen } from '../components/Register';

export const AuthHomeRouter = () => {

  return (

    <div>
        <Routes>
            <Route path="/" element={ <Home /> } />
            
            <Route path="login" element={ <LoginScreen /> } />
            <Route path="register" element={ <RegisterScreen /> } />
            <Route path="permission" element={ <GetPermission /> } />
            <Route path="howItWorks" element={ <HowItWorks /> } />
            
            <Route path="singleProduct" element={ <SingleProduct /> } />
            <Route path="buyProduct" element={ <BuyProduct /> } />
            <Route path="singleCategory" element={ <SingleCategoryHome /> } />
            <Route path="busqueda"   element={ <Search /> } />

        </Routes>
    </div>
  )
}
