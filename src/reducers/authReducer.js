
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

const initialState = {
    checking: true,
    // uid: null,
    // name: null
};

export const authReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking: false
            }

        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }
            
        case types.authLogout:
            return {
                checking: true
            }
            
    
        default:
            return state;
    }
}