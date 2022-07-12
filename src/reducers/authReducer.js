
/*
    {
        name: 'Onier',
        uid: 'askfd2j24235lqw24dkm',
        mobile: 54474824
        tarjeta CUP: 9205 1299 5465 2356,
        tarjeta USD: 9225 4565 8956 4587,
        address: 'Martha Abreu #114 Zaza del medio',
    }
*/

import { types } from "../types/types";


export const authReducer = ( state = {}, action ) => {

    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload
            }

        case types.authLogout:
            return { }
            
    
        default:
            return state;
    }
}