import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Tooltip } from '@mui/material';
import { red } from '@mui/material/colors';
import {createPostRequest} from '../api/post'

const CreatePost = ({ onPost, setPostList}) => {
    const [postContent, setPostContent] = useState('');
    const [uploadedImage, setUploadedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleCreatePost = async (e) => {
        e.preventDefault();
    
        try {
            console.log('Content:', postContent);
            console.log('media:', uploadedImage.name);

            const formData = new FormData();
            formData.append('media', uploadedImage);
            formData.append('description', postContent);
    
            // Proceed with handleCreatePost using the data returned from handleCreateImage
            const response = await createPostRequest(formData)
    
            console.log(response.data);
    
            setPostList((prevList) => {
                return [...prevList, response.data];
            });
    
            handleCancelClick(); // Call handleCancelClick after the axios request succeeds
        } catch (error) {
            console.log(error);
        }
    };

    const handleButtonClick = () => {
        // Trigger the click event of the file input
        fileInputRef.current.click();
    };

    const handleCancelClick = () => {
        setPostContent('')
        setUploadedImage()
    };

    const handlePostContentChange = (event) => {
        setPostContent(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
    
        setUploadedImage(file);
    };

    const handlePostSubmit = () => {
        // Pass the post content to the parent component for further handling
        onPost(postContent);

        // Clear the input field after submitting the post
        setPostContent('');
    };

    return (
        <Card sx={{ minWidth: 680, boxShadow:0, borderRadius: 3}}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
                <Box textAlign="center">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        id="image-file-input"
                        ref={fileInputRef}
                    />
                    <label htmlFor="image-file-input">
                        <IconButton aria-label="add foto"
                            color="warning"
                            onClick={handleButtonClick}
                        >
                            < AddPhotoAlternateIcon />
                        </IconButton>
                    </label>
                </Box>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
        />
        <CardContent>
            <TextField
                multiline
                rows={4}
                variant="outlined"
                placeholder="What's on your mind?"
                fullWidth
                value={postContent}
                onChange={handlePostContentChange}
            />
        </CardContent>

        <CardMedia
            component="img"
            height={uploadedImage ? '610':'0'}
            src={uploadedImage ? URL.createObjectURL(uploadedImage) : undefined}
            alt="Puppycat Pick up my groceries peasant"
        />

        <CardActions sx={{ justifyContent: 'flex-end' }}>
            <ButtonGroup variant="text" color="error" aria-label="text button group" >
                <Tooltip title={"Cancelar"} placement="top" >
                <IconButton aria-label="cancel"
                    color="secondary"
                    onClick={handleCancelClick}
                >
                    <CancelOutlinedIcon />
                </IconButton>
                </Tooltip>
                
                <Tooltip title={"Postear"} placement="top" >
                    <IconButton aria-label="post"
                        color="primary"
                        onClick={handleCreatePost}
                    >
                        <SendOutlinedIcon />
                    </IconButton>
                </Tooltip>
                
            </ButtonGroup>
        
        </CardActions>
        
        </Card>
    );
};

export default CreatePost;