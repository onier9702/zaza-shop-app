
import { types } from "../types/types";


export const authProprietor = ( state = {}, action ) => {

    switch (action.type) {
        case types.proprietorUser:
            return {
                // ...state,
                ...action.payload
            }
    
        default:
            return state;
    }
}