import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MinimizeIcon from '@mui/icons-material/Minimize';

const ChatPopup = ({ open, onClose, chatData }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [minimized, setMinimized] = useState(false);

  const handleSendMessage = () => {
    setMessages([...messages, { text: newMessage, sender: 'user' }]);
    setNewMessage('');
  };

  const chatName = chatData ? chatData.name : '';
  const avatarUrl = chatData ? `/path-to-avatar-image/${chatData.id}.jpg` : ''; // Reemplaza con la lógica de obtención de la URL del avatar

  return (
    <Box className={`chat-popup ${minimized ? 'minimized' : ''}`}>
      {!minimized && (
        <Box
          style={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            maxWidth: '300px', // Ajusta el ancho según tus necesidades
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            style={{
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid #ccc',
            }}
          >
            <Avatar alt={chatName} src={avatarUrl} />
            <span style={{ marginLeft: '8px' }}>{chatName}</span>
            <div>
              <IconButton size="small" onClick={() => setMinimized(true)}>
                <MinimizeIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" onClose={onClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
          </Box>
          <Box style={{ padding: '8px', overflowY: 'auto', maxHeight: '200px' }}>
            {messages.map((message, index) => (
              <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
                {message.text}
              </div>
            ))}
          </Box>
          <Box style={{ padding: '8px', borderTop: '1px solid #ccc' }}>
            <TextField
              label="Escribe un mensaje"
              variant="outlined"
              fullWidth
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <IconButton onClick={handleSendMessage}>
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      )}
      {minimized && (
        <div
          className="minimized-chat"
          onClick={() => setMinimized(false)}
          style={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            background: '#fff',
            borderRadius: '8px',
            padding: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Avatar alt={chatName} src={avatarUrl} />
          <span style={{ marginLeft: '8px' }}>{chatName}</span>
        </div>
      )}
    </Box>
  );
};

export default ChatPopup;