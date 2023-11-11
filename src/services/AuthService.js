import { jwtDecode } from "jwt-decode"

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


