
import { types } from '../types/types';


export const setError = ( err ) => ({

    type: types.uiSetError,
    payload: err,
});

export const removeError = () => ({

    type: types.uiRemoveError,
});

export const startLoadingPage = () => ({

    type: types.uiStartLoading,
});

export const finishLoadingPage = () => ({

    type: types.uiFinishLoading,
});

export const setMsgGreen = ( err ) => ({

    type: types.uiSetMsgGreen,
    payload: err,
});

export const removeMsgGreen = () => ({
    type: types.uiRemoveMsgGreen,
});

export const setMsgRed = ( err ) => ({

    type: types.uiSetMsgRed,
    payload: err,
});

export const removeMsgRed = () => ({
    type: types.uiRemoveMsgRed,
});