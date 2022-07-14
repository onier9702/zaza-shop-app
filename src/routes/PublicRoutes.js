
import React from 'react';
import { Navigate } from 'react-router-dom';


export const PublicRoutes = ({children, authenticated}) => {


  return ( !authenticated )
            ? children
            : (<Navigate to="/pri" />) 

}

