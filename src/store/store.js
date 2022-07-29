
import { configureStore } from '@reduxjs/toolkit';

import { uiReducer } from '../reducers/uiReducer';
import { authReducer } from '../reducers/authReducer';
import {productReducer} from '../reducers/productReducer';
import { categoryReducer } from '../reducers/categoryReducer';
import { authProprietor } from '../reducers/proprietor';
import { searchReducer } from '../reducers/searchReducer';
import { userProdReducer } from '../reducers/userProdReducer';
import { likeProdReducer } from '../reducers/likeReducer';
import { prodsBelongCateApi } from '../api/prodsBelongCateApi';

export default configureStore({

  reducer: {
    auth: authReducer,
    ui: uiReducer,
    category: categoryReducer,
    product: productReducer,
    owner: authProprietor,
    search: searchReducer,
    userProd: userProdReducer,
    like: likeProdReducer,

    [prodsBelongCateApi.reducerPath]: prodsBelongCateApi.reducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat( prodsBelongCateApi.middleware )
  
})