import React from 'react';
import ChatPopup from './ChatPopup'; // Ajusta la ruta según la estructura de tu proyecto

const ChatList = ({ openChats, minimizedChats, onChatOpen, onChatClose, onChatMinimize }) => {
  return (
    <div>
      {/* Renderizar chats abiertos */}
      {openChats.map((chat, index) => (
        <ChatPopup
          key={index}
          open={true} // Indica que el chat está abierto
          onClose={() => onChatClose(chat)}
          chatData={chat}
          onMinimize={() => onChatMinimize(chat)}
        />
      ))}

      {/* Renderizar chats minimizados */}
      {minimizedChats.map((chat, index) => (
        <ChatPopup
          key={index}
          open={false} // Indica que el chat está minimizado
          onClose={() => onChatClose(chat)}
          chatData={chat}
          onMinimize={() => onChatMinimize(chat)}
        />
      ))}
    </div>
  );
};

export default ChatList;