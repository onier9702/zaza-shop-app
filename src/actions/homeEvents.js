
import { fetchNotToken } from "../helpers/fetch";
import { types } from "../types/types";

const startLoadAllCategories = ( ) => {

    // request all Categories
    return async(dispatch) => {

        try {

            console.log('Holaa');
            const resp = await fetchNotToken('api/categories/');
            const {categories} = await resp.json();
            // console.log(data);
    
            dispatch( setAllCateg(categories) );
            
        } catch (error) {
            console.log(error);
        }

    }

} ;

const setAllCateg = ( categories ) => ({

    type: types.categoryLoadAll,
    payload: categories
});


export {
    startLoadAllCategories,
}