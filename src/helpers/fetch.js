
// const baseUrl = process.env.REACT_APP_API_URL;
const baseUrl = 'https://zaza-shop.herokuapp.com';

const fetchNotToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;
    console.log(url);

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
};

const fetchWithToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;
    console.log(url);

    const token = localStorage.getItem('token') || '123456';

    if ( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                'x-token': token,
            }
        } );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token 
            },
            body: JSON.stringify( data )
        });
    }
};


export {
    fetchNotToken,
    fetchWithToken
}















