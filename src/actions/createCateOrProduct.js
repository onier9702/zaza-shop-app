import Swal from "sweetalert2";
import { fetchUploadImg, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";
import { setAllProducts } from "./homeEvents";

const startCreateCategory = ( name = {}, categories = [] ) => {

    return async(dispatch) => {

        try {

            const resp = await fetchWithToken('categories/', name, 'POST');
            const data = await resp.json();

            console.log(data);

            if ( data.msg ){
                Swal.fire('Error', data.msg, 'info');
                return false;
            } else {
                const newArr = [];
                categories.map( cate => newArr.push(cate) );
                newArr.push( data.category );
                dispatch( setNewCate( newArr ) );
                return true;
            }
            
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'Ocurrio un error creando Categoria', 'warning');
        }

    };
};

const startCreateProduct = ( form = {}, products = [] ) => {

    return async(dispatch) => {

        try {

            const resp = await fetchWithToken('products/new', form, 'POST');
            const data = await resp.json();
            console.log('New Product');
            console.log(data);

            if ( data.msg ){
                Swal.fire('Error', data.msg, 'info');
                return false;
            } else {
                const newArr = [];
                products.map( prod => newArr.push(prod) );
                newArr.push( data.product );
                dispatch( setNewProd( newArr ) );
                return true;
            }
            
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'Ocurrio un error creando Categoria', 'warning');
        }

    };
};

const startUploadImg = ( id = '', file, products = [] ) => {

    return async(dispatch) => {

        try {
            const resp = await fetchUploadImg(`upload/products/${id}`, file);
            const data = await resp.json();
            // console.log(data.model);

            if (data.model){
                const newArr = [];
                products.map( p => newArr.push(p));
                const realArr = newArr.filter( prod => prod.id !== data.model.id);
                realArr.push(data.model);

                dispatch( setAllProducts(realArr) );
                return {
                    ok: true
                };
            } else {
                return {
                    ok: false,
                    msg: data.msg
                }
            }
            
        } catch (error) {
            console.log(error)
        }

    };

}

const setNewProd = (products = []) => ({
    type: types.productNewProd,
    payload: products
});

const setNewCate = (categories = []) => ({
    type: types.categoryNewCate,
    payload: categories
});



export {
    startCreateCategory,
    startCreateProduct,
    startUploadImg
}