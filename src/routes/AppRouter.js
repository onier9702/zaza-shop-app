
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  Navigate, Route, Routes } from 'react-router-dom';


import { startLoadAllCategories, startLoadAllProducts } from '../actions/homeEvents';
import '../styles/home/Home.css';


import { ChooseNav } from '../components/navigation/ChooseNav';

import { PublicRoutes } from './PublicRoutes';
import { AuthHomeRouter } from './AuthHomeRouter';
import { PrivateRoutes } from './PrivateRoutes';
import { DashboardRouter } from './DashboardRouter';
import { startChecking } from '../actions/auth';
import { AuthNavbar } from '../components/navigation/AuthNavbar';
import { startLoadAllSellers } from '../actions/owner';




export const AppRouter = () => {

  const dispatch = useDispatch();
  // const [authenticated, setAuthenticated] = useState(false);
  const { checking, uid } = useSelector(state => state.auth);

  // const token = useRef(localStorage.getItem('token'));

  useEffect(() => {

    dispatch( startChecking() );
    dispatch( startLoadAllCategories() );
    dispatch( startLoadAllProducts() );
    dispatch( startLoadAllSellers() );

  }, [dispatch, uid]);

  if (checking) {
    return <h3 >Cargando...</h3>
  }
  

  return (
    <div className="boss">
        
        {
          (uid) ? <AuthNavbar /> : <ChooseNav/>
        }
        

        <Routes>
          <Route path="/" element={<Navigate to="/pub" />} />
          <Route path="pub/*" element={ 
            <PublicRoutes authenticated={(uid) ? true : false} >
              <AuthHomeRouter />
            </PublicRoutes> } 
          />

          <Route path="pri/*" element={ 
            <PrivateRoutes authenticated={(uid) ? true : false} >
              <DashboardRouter />
            </PrivateRoutes> } 
          />

        </Routes>
    
    </div>
  )
}
