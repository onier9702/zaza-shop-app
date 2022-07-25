
import { types } from "../types/types";


const initialState = {

    likeAllProducts: [],
    activeLikeProduct: {}
}

export const likeProdReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.likeAllProducts:
            return {
                ...state,
                likeAllProducts: [...action.payload]
            }

        case types.activeLikeProduct:
            return {
                ...state,
                activeLikeProduct: {...action.payload}
            }

    
        default:
            return state;
    }


};

