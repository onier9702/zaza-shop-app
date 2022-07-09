
// Category Reducer

import { types } from "../types/types";

/*
    name: 'Iphones',
    user: Onier o UID no recuerdo
*/


const initialState = {

    categories: [],
    activeCategory: {}
}

export const categoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.categoryLoadAll:
            return {
                ...state,
                categories: [...action.payload]
            }
    
        default:
            return state;
    }


};

