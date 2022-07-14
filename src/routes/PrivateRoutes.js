
import React from 'react';
import { Navigate } from 'react-router-dom';


export const PrivateRoutes = ({children, authenticated}) => {


  return ( authenticated )
            ? children
            : (<Navigate to="/pub" />)
}
