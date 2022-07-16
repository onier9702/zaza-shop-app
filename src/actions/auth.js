import Swal from "sweetalert2";

import { fetchNotToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";
import { finishLoadingPage, startLoadingPage } from "./ui";

const startChecking = () => {   

    return async(dispatch) => {

        // console.log('I am starting checking');
        const resp = await fetchWithToken('users/renew');
        const body = await resp.json();

        // console.log(body);

        if (body.token) {
            // console.log('Token Checking:' + body.token);
            const { state, ...dataUser } = body.user;
            dispatch(setLoginUser(dataUser));
            localStorage.setItem('token', body.token);
            localStorage.setItem('uid', body.user.uid);

        } else {
            // Swal.fire('Error', body.msg, 'error');
            dispatch(checkingFinish());
        }

    };
}

const checkingFinish = () => ({ type: types.authCheckingFinish });

const startRegisterUser = ( form ) => {

    return async(dispatch) => {

        try {
            
            dispatch( startLoadingPage() ); 
            const resp = await fetchNotToken('users/new', form, 'POST');
            const data = await resp.json();
    
            if ( data.msg ){
                Swal.fire('Error', data.msg, 'error');
            }
            dispatch( finishLoadingPage());

        } catch (error) {
            console.log(error);
            dispatch( finishLoadingPage());
        }

    };

};

const startLogin = ( form ) => {

    return async(dispatch) => {

        try {

            dispatch( startLoadingPage() ); 
            
            const resp = await fetchNotToken('users/login', form, 'POST');
            const data = await resp.json();
            
            if ( !data.token ){
                // Swal.fire('Error', data.msg, 'error');
                dispatch( finishLoadingPage());
                return {
                    ok: false,
                    message: 'Ha ocurrido un error, introduzca correctamente sus datos'
                };
            } else {
                // console.log('Token Login:' + data.token);
                const { state, ...dataUser } = data.user;
                dispatch(setLoginUser(dataUser));
                localStorage.setItem('token', data.token);
                localStorage.setItem('uid', data.user.uid);
                dispatch( finishLoadingPage());

                return {
                    ok: true,
                    message: 'Login exitoso'
                };
            }

        } catch (error) {
            console.log(error);
            console.log('Catch error in startLogin function');
            dispatch( finishLoadingPage());
        }

    };
};


const setLoginUser = ( data ) => ({
    type: types.authLogin,
    payload: data
});

// public
const getUserProfileData = (id) => {

    return async(dispatch) => {

        try {

            const resp = await fetchNotToken(`users/${id}`);
            const data = await resp.json();

            if ( data.user ) {
                // console.log('Inside Get User Profile Data');
                // console.log(data);
                const { state, ...dataUser } = data.user;
                // dispatch(setLoginUser(dataUser)); // this function put data user, not only in Login
                return {
                    ok: true,
                    user: dataUser
                };
            } else {
                return {
                    ok: false,
                }
            }
            
        } catch (error) {
            console.log(error);
            console.log('Error in getUserProfileData function');
        }

    }
};

//  --private
const startUpdateUserProfile = (id, form) => {

    return async(dispatch) => {

        try {

            dispatch( startLoadingPage());
            
            const resp = await fetchWithToken(`users/${id}`, form, 'PUT');
            const data = await resp.json();
            // console.log(data);

            if ( data.user ) {
                const { state, ...dataUser } = data.user;
                dispatch(setLoginUser(dataUser)); // this function put data user, not only in Login
                dispatch(finishLoadingPage());
                return {
                    ok: true,
                };
            } else {
                dispatch(finishLoadingPage());
                return {
                    ok: false,
                }
            }
            

        } catch (error) {
            console.log(error);
            console.log('Catch error in startUpdateUserProfile function');
            dispatch(finishLoadingPage());
        }

    };
};

const startLogout = () => {

    return async(dispatch) => {
        
        localStorage.clear();
        dispatch( authLogout());

    }
    
}

const authLogout = () => ({
    type: types.authLogout
});

export {
    startRegisterUser,
    startLogin,
    startUpdateUserProfile,
    getUserProfileData,
    setLoginUser,
    startLogout,
    startChecking
}