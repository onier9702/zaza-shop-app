import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";
import { setAllProducts } from "./homeEvents";
import { finishLoadingPage, startLoadingPage } from "./ui";


const findActiveUserProd = ( id = '', products = [] ) => {

    return (disptach) => {

        let newArr = [];
        products.forEach( prod => newArr.push(prod) );

        const activeUserProd = newArr.find( prod => prod.id === id );
        // console.log(activeProduct);
        disptach( setActiveUserProd(activeUserProd) );

    };

};

const setActiveUserProd = (product = {}) => ({
    type: types.userActiveProduct,
    payload: product
});

const setAllOwnProducts = (products = []) => ({
    type: types.userAllProducts,
    payload: products
})

//  User can update his own product --private
const startUpdateProduct = (id, form) => {

    return async(dispatch) => {

        try {

            dispatch( startLoadingPage());
            
            const resp = await fetchWithToken(`products/${id}`, form, 'PUT');
            const data = await resp.json();
            console.log(data);

            if ( data.product ) {
                dispatch(finishLoadingPage());
                return {
                    ok: true
                }
            } else {
                dispatch(finishLoadingPage());
                return {
                    ok: false
                }
            }
            

        } catch (error) {
            console.log(error);
            console.log('Catch error in startUpdateProduct function');
            dispatch(finishLoadingPage());
        }

    };
};

const startDeleteProduct = (id = '', products = []) => {

    return async(dispatch) => {

        try {

            dispatch( startLoadingPage());
            
            const resp = await fetchWithToken(`products/${id}`, undefined, 'DELETE');
            const data = await resp.json();

            if ( data.msg ){
                return {
                    ok: false,
                    msg: data.msg
                };
            } else {
                let arrProducts = [];
                products.map( p => arrProducts.push(p));
                let realProducts = arrProducts.filter( prod => prod.id !== id);
                dispatch( setAllProducts(realProducts) );
                
                return {
                    ok: true
                };
            };
     

        } catch (error) {
            console.log(error);
            console.log('Catch error in startDeleteProduct function');
            dispatch(finishLoadingPage());
        }

    };
};



export {
    findActiveUserProd,
    setAllOwnProducts,
    startUpdateProduct,
    startDeleteProduct
}