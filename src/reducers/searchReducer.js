

// Search Reducer

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

    allResults: [],
}

export const searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.searchFoundedProd:
            return {
                ...state,
                allResults: [...action.payload]
            }
    
        default:
            return state;
    }


};

