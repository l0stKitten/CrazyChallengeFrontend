import axios from './axios';

export const loginRequest = (user) => {
    axios.post('/api/user/login')
}

export const registerRequest = (user) => {
    axios.post('/api/user/register')
}

export const logoutRequest = () => {
    axios.post('/api/user/logout')
}

export const findByNameRequest = (name) => {
    axios.get('/api/user/finByName/' + name)
}

export const deleteRequest = (id) => {
    axios.delete('/api/user/' + id)
}

export const updateRequest = (id, user) => {
    axios.put('/api/user/' + id)
}

export const getUserByIdRequest = (id) => {
    axios.post('/api/user/' + id)
}

export const updatePasswordRequest = (id) => {
    axios.patch('/api/user/updatePassword/' + id)
}