import axios from './axios';

export const sendMessageRequest = (id) => {
    return axios.post('/api/chat/sendMessage/'+ id)
}

export const getMessagesRequest = (id) => {
    return axios.get('/api/chat/' + id)
}

export const createChatRequest = (media, groupName, userChat) => {
    return axios.post('/api/chat/', media, groupName, userChat)
}

export const addUserToChatRequest = (id) => {
    return axios.post('/api/chat/addUser/' + id)
}