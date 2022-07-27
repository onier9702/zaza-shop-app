
// Category Reducer

import { types } from "../types/types";

/*
    name: 'Iphones',
    user: Onier o UID no recuerdo
*/


const initialState = {

    categories: [],
    activeCategory: {},
    prodsBelongCate: [],
    total: 0
    // page: 0
}

export const categoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.categoryLoadAll:
            return {
                ...state,
                categories: [...action.payload]
            }

        case types.categoryActive:
            return {
                ...state,
                activeCategory: {...action.payload}
            }
        
        case types.categoryNewCate:
            return {
                ...state,
                categories: action.payload
            }
        
        case types.categoryProdsBelongCate:
            return {
                ...state,
                prodsBelongCate: [...action.payload.prods],
                total: action.payload.total
                // page: state.page + 1
            }
        case types.categoryClearProdsBelongCate:
            return {
                ...state,
                prodsBelongCate: [],
                // page: 0
            }
    
        default:
            return state;
    }


};

