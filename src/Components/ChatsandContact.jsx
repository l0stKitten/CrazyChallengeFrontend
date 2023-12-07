import React, { Fragment } from 'react'

import ContactList from './CardSM'
import ChatList from './ChatList'
import ChatPopup from './ChatPopup'

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
	const [openChat, setOpenChat] = React.useState(false);
    const [selectedChat, setSelectedChat] = React.useState(null);
    const [minimizedChats, setMinimizedChats] = React.useState([]);

    const handleMinimizeChat = (chatData) => {
        setMinimizedChats([...minimizedChats, chatData]);
    };

    const handleChatOpen = (contact) => {
        setSelectedChat(contact);
        setOpenChat(true);
    };
    
    const handleChatClose = () => {
        setOpenChat(false);
        setSelectedChat(null);
    };

	return (
        <Fragment>
            <ChatList title={"Chats"} handleChatOpen={handleChatOpen} chatlist={chats} setChats={setChats} seguidores={contacts} mtbool={false}></ChatList>
            <ContactList title={"Seguidores"} contacts={contacts} mtbool={true}></ContactList>
            <ChatPopup
                open={openChat}
                onClose={handleChatClose}
                chatData={selectedChat}
                onMinimize={handleMinimizeChat}
            />
        </Fragment>
		
	);
}