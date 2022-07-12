import Swal from "sweetalert2";
import { fetchNotToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";


const startRegisterUser = ( form ) => {

    return async(dispatch) => {

        try {
            
            const resp = await fetchNotToken('api/users/new', form, 'POST');
            const data = await resp.json();
    
            if ( data.msg ){
                Swal.fire('Error', data.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        }

    };

};

const startLogin = ( form ) => {

    return async(dispatch) => {

        try {
            
            const resp = await fetchNotToken('api/users/login', form, 'POST');
            const data = await resp.json();
            
            console.log(data);
            if ( !data.token ){
                // Swal.fire('Error', data.msg, 'error');
                return {
                    ok: false,
                    message: 'Ha ocurrido un error, introduzca correctamente sus datos'
                };
            } else {
                const { state, ...dataUser } = data.user;
                dispatch(setLoginUser(dataUser));
                localStorage.setItem('token', data.token);
                localStorage.setItem('uid', data.user.uid);

                return {
                    ok: true,
                    message: 'Login exitoso'
                };
            }

        } catch (error) {
            console.log(error);
            console.log('Catch error in startLogin function');
        }

    };
};

const setLoginUser = ( data ) => ({
    type: types.authLogin,
    payload: data
});

// private
const getUserProfileData = (id) => {

    return async(dispatch) => {

        try {

            const resp = await fetchWithToken(`api/users/${id}`);
            const data = await resp.json();

            if ( data.user ) {
                const { state, ...dataUser } = data.user;
                dispatch(setLoginUser(dataUser)); // this function put data user, not only in Login
                return {
                    ok: true,
                    user: data.user
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
            
            const resp = await fetchWithToken(`api/users/${id}`, form, 'PUT');
            const data = await resp.json();
            console.log(data);
            

        } catch (error) {
            console.log(error);
            console.log('Catch error in startUpdateUserProfile function');
        }

    };

};

export {
    startRegisterUser,
    startLogin,
    startUpdateUserProfile,
    getUserProfileData
}