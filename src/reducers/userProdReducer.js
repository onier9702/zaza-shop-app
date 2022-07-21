

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

    userAllproducts: [],
    activeUserProduct: {}
}

export const userProdReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.userAllProducts:
            return {
                ...state,
                userAllproducts: [...action.payload]
            }

        case types.userActiveProduct:
            return {
                ...state,
                activeUserProduct: {...action.payload}
            }

    
        default:
            return state;
    }


};

