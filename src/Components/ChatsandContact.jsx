import React, { Fragment, useState, useEffect } from 'react'

import {getMessagesRequest} from '../api/chat'
import ContactList from './CardSM'
import ChatList from './ChatList'
import ChatPopup from './ChatPopup'

import {useAuth} from '../context/authContext'

const contacts = [
{"id":1,"name":"Grange Slight"},
{"id":2,"name":"Cleveland Staniland"},
{"id":3,"name":"Libbi Felderer"},
{"id":4,"name":"Letizia Synke"},
{"id":5,"name":"Rora Rickersey"},
{"id":6,"name":"Anjela Giacomoni"},
{"id":7,"name":"Jeramie De Cristofalo"},
{"id":8,"name":"Charin Mugglestone"},
{"id":9,"name":"Ludovico Howatt"},
{"id":10,"name":"Dorie Mendez"},
{"id":11,"name":"Erroll Youngs"},
{"id":12,"name":"Virginie Melbourne"},
{"id":13,"name":"Erin Whistlecraft"},
{"id":14,"name":"Josey Brignall"},
{"id":15,"name":"Carly Lago"},
{"id":16,"name":"Aveline Chasemoore"},
{"id":17,"name":"Clarita Banbrook"},
{"id":18,"name":"Layton Twidle"},
{"id":19,"name":"Mariana Salthouse"},
{"id":20,"name":"Humphrey Zolini"}]

const initialChatsArray = [
    {"id":1,"name":"Grange Slight"},
    {"id":2,"name":"Cleveland Staniland"},
    {"id":3,"name":"Libbi Felderer"},
    {"id":4,"name":"Letizia Synke"},
    {"id":5,"name":"Rora Rickersey"},
    {"id":6,"name":"Anjela Giacomoni"},
    {"id":7,"name":"Jeramie De Cristofalo"},
    {"id":8,"name":"Charin Mugglestone"},
    {"id":9,"name":"Ludovico Howatt"},]


export default function ChatsandContact() {
    const [chats, setChats] = React.useState([...initialChatsArray]);
    const { user, getUserById} = useAuth();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const usuario = await getUserById(user.id);
    //             console.log(usuario.user.groupChats);
    //             setChats(usuario.user.groupChats)

    //         } catch (error) {
    //             setChats(["prueba"])
    //             console.error('Error fetching user data:', error);
    //         }
    //     };
    //     //
    //     fetchData()
    //     console.log(user)
    // }, [])

    const [openChatID, setOpenChatID] = React.useState(0)
    const [messages, setMessages] = useState([]);

	const [openChat, setOpenChat] = React.useState(false);
    const [selectedChat, setSelectedChat] = React.useState(null);
    const [minimizedChats, setMinimizedChats] = React.useState([]);

    const handleMinimizeChat = (chatData) => {
        setMinimizedChats([...minimizedChats, chatData]);
    };

    const getMessagesChat = async (contact) => {
        const response = await getMessagesRequest(contact)

            if (response.data.chat.length == 0){
                setMessages([])
            } else {
                setMessages(response.data.chat)
            }
    }

    const handleChatOpen = (contact) => {
        try { 
            getMessagesChat(contact)

            setSelectedChat(contact);
            setOpenChat(true);
        } catch (error) {
            console.error(error);
        }
    };
    
    const handleChatClose = () => {
        setOpenChat(false);
        setSelectedChat(null);
    };

	return (
        <Fragment>
            <ChatList title={"Chats"} handleChatOpen={handleChatOpen} chatlist={chats} setChats={setChats} seguidores={contacts} mtbool={false} setOpenChatID={setOpenChatID}></ChatList>
            <ContactList title={"Seguidores"} contacts={contacts} mtbool={true}></ContactList>
            <ChatPopup
                open={openChat}
                onClose={handleChatClose}
                chatData={selectedChat}
                onMinimize={handleMinimizeChat}
                openChatID={openChatID}
                messages={messages}
                setMessages={setMessages}
            />
        </Fragment>
		
	);
}