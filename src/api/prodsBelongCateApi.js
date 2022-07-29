

// RTK - Query

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const prodsBelongCateApi = createApi({

    reducerPath: 'productsBelongCate',

     baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL
        // baseUrl: 'https://jsonplaceholder.typicode.com'
     }),

     endpoints: (build) => ({

        getProducts: build.query({
            query: () => '/products/'
        }),

        getProductsPaginated: build.query({
            // query: (page) => ({ url: `/products?limit=2&since=${page * 2}` }),
            query: ({id,page}) => `/products/perCate/${id}?limit=2&since=${page * 2}`
            // ?limit=2&since=${page}
            // query: (id) => `/todos/${id}`
        }),
        
    })
    
});

export const { useGetProductsQuery, useGetProductsPaginatedQuery } = prodsBelongCateApi;