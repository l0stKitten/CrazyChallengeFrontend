import axios from './axios';

export const loginRequest = (user) => {
    return axios.post('/api/user/login', user)
}

export const registerRequest = (user) => {
    axios.post('/api/user/register', user)
}

export const logoutRequest = () => {
    axios.post('/api/user/logout')
}

export const findByNameRequest = (name) => {
    axios.get('/api/user/finByName/' + name )
}

export const deleteRequest = (id) => {
    axios.delete('/api/user/' + id)
}

export const updateRequest = (id, user) => {
    axios.put('/api/user/' + id, user)
}

export const getUserByIdRequest = (id) => {
    axios.post('/api/user/' + id)
}

export const updatePasswordRequest = (id, password) => {
    axios.patch('/api/user/updatePassword/' + id, password)
}

export const verifyTokenRequest = async () => {
    axios.get('/api/user/verify')
}