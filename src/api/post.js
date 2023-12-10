import axios from './axios';

export const createPostRequest = (formData) => {
    return axios.post('/api/post/', formData)
}

export const addReactionRequest = (id, reaction) => {
    return axios.put('/api/post/react/' + id, reaction)
}

export const addCommentRequest = (id, data) => {
    return axios.put('/api/post/comment/' + id, data)
}

export const getAllPostsRequest = () => {
    return axios.get('/api/post/all/1')
}

export const getPostByIdRequest = (id) => {
    return axios.get('/api/post/' + id)
}