import React, {useEffect, useState} from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green, red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {PORTBACKEND} from '../config'

import moment from "moment";

import SendIcon from '@mui/icons-material/Send';
import ReactionPost from './Reaction'
import {getPostByIdRequest, addCommentRequest} from '../api/post'
import img from '../img/puppycat.png'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
    }),
}));

export default function Post({user_id, post_id, createdat, description, videopath}) {
    moment.locale('en');
    const [expanded, setExpanded] = React.useState(false);

    const [reaction, setReaction] = React.useState(<FavoriteBorderOutlinedIcon />);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const [commentText, setComment] = useState('');

    const [allComments, setAllComments] = useState([]);
	
	useEffect(() => {
		const getComments = async () => {
			try { 
				const response = await getPostByIdRequest(post_id)
	
				console.log(response.data.comments);
				setAllComments(response.data.comments);
			} catch (error) {
				console.error(error);
			}
		};
	
		getComments();
	}, []);


    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = async () => {
        if (commentText.trim() !== '') {
            try{
                
                const data = {
                    comment: commentText
                };
                const com = await addCommentRequest(post_id, data)

                console.log(com.data)

                setAllComments((prevList) => {
                    return [...prevList, com.data];
                });
                setComment('');
            } catch (error){
                console.log(error)
            }
        }
    };

    const handleReaction = async (icon) => {

        setReaction(icon);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Card sx={{ maxWidth: 680, minWidth: 680, boxShadow:0, borderRadius: 3}}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title={user_id}
            subheader={moment(createdat).format('d MMMM YYYY, hh:mm')}
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </CardContent>
        <CardMedia
            component="img"
            height="610"
            image={PORTBACKEND + videopath}
            alt={PORTBACKEND + videopath}
        />
        <CardActions disableSpacing >
            <ButtonGroup variant="text" color="error" aria-label="text button group" >
                <Button color='secondary' 
                    startIcon={reaction} 
                    aria-describedby={id}
                    onClick={handleClick}
                >
                    Me gusta
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Paper > {/* Adjust alpha value here */}
                        <ReactionPost handleReaction={handleReaction} post_id={post_id} handleClose={handleClose}/>
                    </Paper>
                </Popover>
                <Button color='info' startIcon={<ModeCommentOutlinedIcon />} onClick={handleExpandClick}>Comentar</Button>
            </ButtonGroup>
            
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Card sx={{boxShadow: 0, borderColor:'#'}}>
                    <CardContent sx={{m:0, pt:2, pl:2, pr:2, pb:0}}>
                        <Grid container spacing={2} alignItems={"flex-end"}>
                            <Grid container wrap="nowrap" alignItems="center" marginTop={0.8}>
                                <Grid item>
                                    <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                                        KW
                                    </Avatar>
                                </Grid>
                                <Grid item xs={12} sx={{ml:2}}>
                                    <TextField
                                        fullWidth
                                        label="Write a comment"
                                        value={commentText}
                                        onChange={handleCommentChange}
                                        multiline
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{height:40}}>
                        <Grid container justifyContent="center" alignItems="center" sx={{height:40, mt:1}}>
                            <Grid item >
                                <Button
                                    variant="text"
                                    color="primary"
                                    onClick={handleSubmit}
                                    startIcon={<SendIcon />}
                                >
                                    Submit
                                </Button>
                                        
                            </Grid>
                        </Grid>
                    </CardActions>
                        
                </Card>

                {/*other comments */}
                <Grid container spacing={2}>
                    {allComments.map((comment) => (
                        <Grid item xs={12} key={comment._id} >
                        <Grid container wrap="nowrap" alignItems="center">
                            <Grid item>
                            <Avatar alt={comment.user._id} />
                            </Grid>
                            <Grid item sx={{ml:2}}>
                            <Typography variant="body2">{comment.user._id}</Typography>
                            <Typography variant="body2">{comment.text}</Typography>
                            </Grid>
                        </Grid>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Collapse>
        </Card>
    );
}