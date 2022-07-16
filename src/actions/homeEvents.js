
import { fetchNotToken } from "../helpers/fetch";
import { types } from "../types/types";

const startLoadAllCategories = ( ) => {

    // request all Categories
    return async(dispatch) => {

        try {

            const resp = await fetchNotToken('categories/');
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

const startLoadAllProducts = () => {

    return async(dispatch) => {

        try {

            const resp = await fetchNotToken('products/');
            const {products} = await resp.json();
            // console.log(products);

            dispatch( setAllProducts(products) );


        } catch (error) {
            console.log(error);
        }

    };

};

const setAllProducts = ( products ) => ({

    type: types.productLoadAll,
    payload: products
});

const findActiveProduct = (id = '', products = []) => {

    return (dispatch) => {

        let newArr = [];
        products.forEach( p => newArr.push(p) );

        const activeProduct = newArr.find( prod => prod.id === id );
        // console.log(activeProduct);
        dispatch( setActiveProduct(activeProduct) );
    }
};

const setActiveProduct = ( product = {} ) => ({
    type: types.productActive,
    payload: product
});

const findActiveCategory = ( id= '', categories = [] ) => {

    return (dispatch) => {

        let newArr = [];
        categories.forEach( c => newArr.push(c) );

        const activeCate = newArr.find( cate => cate.id === id );
        // console.log(activeCate);
        dispatch( setActiveCategory(activeCate) );
    }

};

const setActiveCategory = ( cate = {} ) => ({
    type: types.categoryActive,
    payload: cate
})

export {
    startLoadAllCategories,
    startLoadAllProducts,
    findActiveProduct,
    findActiveCategory
}