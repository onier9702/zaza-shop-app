
import { configureStore } from '@reduxjs/toolkit';

import { uiReducer } from '../reducers/uiReducer';
import { authReducer } from '../reducers/authReducer';
import {productReducer} from '../reducers/productReducer';
import { categoryReducer } from '../reducers/categoryReducer';
import { authProprietor } from '../reducers/proprietor';

export default configureStore({

  reducer: {
    auth: authReducer,
    ui: uiReducer,
    category: categoryReducer,
    product: productReducer,
    owner: authProprietor,
  },
  
})