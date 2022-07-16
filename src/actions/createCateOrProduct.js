import Swal from "sweetalert2";
import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

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

const setNewCate = (categories = []) => ({
    type: types.categoryNewCate,
    payload: categories
});



export {
    startCreateCategory,
}