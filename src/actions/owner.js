

import { fetchNotToken } from '../helpers/fetch';
import { types } from '../types/types';


const startLoadAllSellers = () => {

    return async(dispatch) => {

        try {

            const resp = await fetchNotToken('users/sellers');
            const data = await resp.json();

            dispatch( setAllSellers(data.sellers) );


        } catch (error) {
            console.log(error);
        }

    };
};

const setAllSellers = ( sellers = []) => ({
    type: types.ownerLoadAll,
    payload: sellers
});


const findActiveSeller = ( uid = '', sellers = []) => {

    return (dispatch) => {

        let newArr = [];
        sellers.forEach( seller => newArr.push(seller) );

        const activeSeller = newArr.find( sell => sell.uid === uid );
        // console.log(activeProduct);
        dispatch( setActiveSeller(activeSeller) );
    }
};

const setActiveSeller = ( seller ) => ({
    type: types.ownerActive,
    payload: seller
});



export {
    findActiveSeller,
    startLoadAllSellers
}