
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';




export const AppRouter = () => {
  return (
    <div>
        <Routes>

            <Route  path='/' element={ <Navigate to="/public" /> } />

            <Route path="private/*" element={ <PrivateRoutes /> } />
              {/* <PrivateRoute isAuthenticated={isAuthenticated}>
                <DashboardRoutes />
              </PrivateRoute> */}


            <Route path="public/*" element={ <PublicRoutes /> } />
              {/* <PublicRoute isAuthenticated={isAuthenticated}>
                <AuthRouter />
              </PublicRoute> */}
            

        </Routes>
    </div>
  )
}
