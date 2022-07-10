
// Product Reducer

import { types } from "../types/types";

/*
    name: 'Iphone 12',
    user: {
        name: 'Onier',
        uid: '23254fs5f153rg153g',
    },
    precio: 600,
    amount: 3,

*/


const initialState = {

    products: [],
    activeProduct: {}
}

export const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.productLoadAll:
            return {
                ...state,
                products: [...action.payload]
            }

        case types.productActive:
            return {
                ...state,
                activeProduct: {...action.payload}
            }
    
        default:
            return state;
    }


};

