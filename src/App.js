
import React from 'react';
import { HashRouter } from 'react-router-dom';


import { AppRouter } from './routes/AppRouter';

export const App = () => {

  
  return (
    <HashRouter>
        <AppRouter />
    </HashRouter>
  )
}



