import axios from './axios';

export const loginRequest = (user) => {
    return axios.post('/api/user/login', user)
}

export const registerRequest = (user) => {
    return axios.post('/api/user/register', user)
}

export const logoutRequest = () => {
    return axios.post('/api/user/logout')
}

export const findByNameRequest = (name) => {
    return axios.get('/api/user/finByName/' + name )
}

export const deleteRequest = (id) => {
    return axios.delete('/api/user/' + id)
}

export const updateRequest = (id, user) => {
    return axios.put('/api/user/' + id, user)
}

export const getUserByIdRequest = (id) => {
    return axios.post('/api/user/' + id)
}

export const updatePasswordRequest = (id, password) => {
    return axios.patch('/api/user/updatePassword/' + id, password)
}

export const verifyTokenRequest = async () => {
    return axios.get('/api/user/verify')
}