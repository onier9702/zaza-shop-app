
// User Reducer

import { types } from '../types/types';


const initialState = {

    loading: false,
    msg: null,
    msgGreen: null,
    msgRed: null
}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msg: action.payload,
            }
            
        case types.uiRemoveError:
            return {
                ...state,
                msg: null,
            }

            case types.uiSetMsgGreen:
            return {
                ...state,
                msgGreen: action.payload,
            }
            
        case types.uiRemoveMsgGreen:
            return {
                ...state,
                msgGreen: null,
            }

            case types.uiSetMsgRed:
            return {
                ...state,
                msgRed: action.payload,
            }
            
        case types.uiRemoveMsgRed:
            return {
                ...state,
                msgRed: null,
            }
        case types.uiStartLoading:
            return {
                ...state,
                loading: true,
            }
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }

};

