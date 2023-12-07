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

import SendIcon from '@mui/icons-material/Send';
import ReactionPost from './Reaction'

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

export default function Post() {
    const [expanded, setExpanded] = React.useState(false);
    const [comments, setComments] = useState([{
        "id": 1,
        "author": "jiafe",
        "content": "so funny",
    },
    {
        "id": 2,
        "author": "meife",
        "content": "so funny",
    }])
    const [reaction, setReaction] = React.useState(<FavoriteBorderOutlinedIcon />);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const [comment, setComment] = useState('');

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = () => {
        if (comment.trim() !== '') {
        onCommentSubmit(comment);
        setComment('');
        }
    };

    const onCommentSubmit = (commentText) => {
        // Create a new comment object with the comment text and other relevant data
         
        setComments((prevComments) => {
            return [...prevComments, {
                id: 3,
                content: commentText,
                author: 'User1', // Replace with the actual author's information
            }];
        });
        // Add the new comment to your list of comments (e.g., an array)
        // You may want to use state management tools like useState or Redux for this
      
        // Update the UI to display the new comment
        // You may need to update your component's state to reflect the new comment
    };

    const handleReaction = (icon) => {
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
        <Card sx={{ maxWidth: 680, boxShadow:0, borderRadius: 3}}>
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
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            </Typography>
        </CardContent>
        <CardMedia
            component="img"
            height="610"
            image={img}
            alt="Puppycat Pick up my groceries peasant"
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
                        <ReactionPost handleReaction={handleReaction} handleClose={handleClose}/>
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
                                        value={comment}
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
                    {comments.map((comment) => (
                        <Grid item xs={12} key={comment.id} >
                        <Grid container wrap="nowrap" alignItems="center">
                            <Grid item>
                            <Avatar alt={comment.author} />
                            </Grid>
                            <Grid item sx={{ml:2}}>
                            <Typography variant="body2">{comment.author}</Typography>
                            <Typography variant="body2">{comment.content}</Typography>
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