// import { Navigate } from "react-router-dom";

export const storeAuthUser = data => {
    localStorage.setItem(data.user.name, JSON.stringify(data.access_token));
}

export const getAuthUser = key => {
    return JSON.parse(localStorage.getItem(key));
}


