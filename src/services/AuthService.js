import { jwtDecode } from "jwt-decode"
import axios from 'axios';
import { API_URL } from "config";
import { useSelector } from "react-redux";

export const storeAuthUser = data => {
    localStorage.setItem('token', JSON.stringify(data.access_token))
    localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeAuthUser = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
}

export const getAuthToken = () => {
    const token = localStorage.getItem('token')
    return token ? JSON.parse(token) : null
}

export const getAuthRole = () => {
    const decodedToken = getAuthToken() ? jwtDecode(getAuthToken()) : null
    return decodedToken !== null ? decodedToken.role : null
}

export const getAuthUser = () => (JSON.parse(localStorage.getItem('user')))


export const logoutUser = async (role) => {
    const logoutURL = `${API_URL}/${role}/logout`;

    try {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getAuthToken()}`,
        };

        const response = await axios.post(logoutURL, {}, { headers });
        return response.data;
    } catch (error) {
        console.error('Error during logout from backend:', error.message);
        throw error;
    }
};



