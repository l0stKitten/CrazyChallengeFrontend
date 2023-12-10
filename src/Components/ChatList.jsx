import React, { useState, Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import { Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemText } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {createChatRequest} from '../api/chat'
import { createTheme} from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

import imgTest from '../img/puppycat.png'

import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

const ChatList = ({ title, chatlist, mtbool, handleChatOpen, seguidores, setChats, setOpenChatID}) => {
    const [showAll, setShowAll] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setModalOpen(false);
      };


    const openChat = (contact) => {
        const isChatInList = chatlist.some((existingChat) => existingChat.id === contact.id);

        if (!isChatInList) {

            //const chat = createChatRequest(imgTest, contact.username, contact.id);

            //const updatedChats = [...chatlist, chat];
            //setChats(updatedChats);
            //crear Chat con
            
            handleCloseModal()
            handleChatOpen(contact)
            setOpenChatID(contact.id)
        } else {
            handleCloseModal()
            handleChatOpen(contact)
            setOpenChatID(contact.id)
        }
      
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const themeSideMenu = createTheme({
		typography: {
			fontFamily: [
			  'Average Sans',
			].join(','),
		}
	})

    return (
        <Fragment>
        <Dialog open={modalOpen} onClose={handleCloseModal}>
            <DialogTitle>Contactos</DialogTitle>
            <DialogContent>
                <List>
                {seguidores.map((contact) => (
                    <ListItem key={contact.id}>
                        <ListItemText primary={contact.name} />
                        <IconButton aria-label="add"
                            onClick={() => openChat(contact)}
                            color="primary"
                        >
                            <SendOutlinedIcon />
                        </IconButton>
                    </ListItem>
                ))}
                </List>
            </DialogContent>
            <DialogActions>
                <Button color="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>

        <Card sx={{ boxShadow:0, borderRadius: 3, mt: mtbool ? 2 : 0 }}>
            <ThemeProvider theme={themeSideMenu}>
                <CardHeader
                    title={title}

                    action={
                        <IconButton aria-label="add" onClick={handleOpenModal}>
                            <AddCommentOutlinedIcon />
                        </IconButton>
                    }
                />

                
            </ThemeProvider>
            
            <Divider variant="middle"/>
            <CardContent>
                <Grid 
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >
                    {/* {chatlist.map((contact, index) => (
                        <Grid item xs={12} key={contact} >
                        <Grid container wrap="nowrap" alignItems="center" onClick={() => handleChatOpen(contact)}>
                            <Grid item >
                                <Avatar alt={contact} src="/path-to-avatar-image.jpg" />
                            </Grid>
                            <Grid item marginLeft={2}>
                                <Typography variant="body2">{contact}</Typography>
                            </Grid>
                        </Grid>
                        </Grid>
                    ))} */}
                </Grid>
                
            </CardContent>
        
        </Card>
        </Fragment>
    );
};

export default ChatList;