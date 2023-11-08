export const storeAuthUser = data => {
    localStorage.setItem('token', JSON.stringify(data.access_token));
    localStorage.setItem('user', JSON.stringify(data.user));
}

export const removeAuthUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}

export const getAuthToken = () => {
    return JSON.parse(localStorage.getItem('token'));
}

export const getAuthUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}


