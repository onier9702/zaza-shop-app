
const getTokenFromLocalStorage = () => {

    const token = localStorage.getItem('token');
    if (token) {
        return true;
    } else {
        return false;
    }

};

export {

    getTokenFromLocalStorage

}