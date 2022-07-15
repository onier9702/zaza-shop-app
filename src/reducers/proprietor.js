
import { types } from "../types/types";

const initialState = {
    sellers: [],
    activeSeller: {}
}

export const authProprietor = ( state = initialState, action ) => {

    switch (action.type) {
        case types.ownerLoadAll:
            return {
                ...state,
                sellers: [...action.payload]
            }

        case types.ownerActive:
            return {
                ...state,
                activeSeller: {...action.payload}
            }
    
        default:
            return state;
    }
}