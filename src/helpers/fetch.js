
// const baseUrl = process.env.REACT_APP_API_URL; // put this on production
const baseUrl = 'https://zaza-shop.herokuapp.com/api';
// const baseUrl = 'https://localhost:3000/api';

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

    const token = localStorage.getItem('token') || '';
    // console.log(token);

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

// private with token
const fetchUploadImg = ( endpoint, file ) => {

    const url = `${ baseUrl }/${ endpoint }`;
    console.log(url);

    const token = localStorage.getItem('token') || '';
    // console.log(token);
    const formData = new FormData();

    // console.log(file);
    for ( let i = 0; i < 3; i++){
        if( file[i] ){
            formData.append(`file${i+1}`, file[i]);
        }
    };

    // formData.append('file', file);
    // console.log(formData);

    return fetch( url, {
            method: "POST",
            headers: {
                'x-token': token 
            },
            body: formData,
    });
    
};



export {
    fetchNotToken,
    fetchWithToken,
    fetchUploadImg
}















