import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Player } from "@lottiefiles/react-lottie-player";
import troste from '../jsonlottie/troste.json'

const NotFoundPage = () => {
    const style = {
        height: 350,
    };

    return (
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        >
            <Player autoplay loop src={troste} style={style} />
            <Typography variant="h2" component="div" gutterBottom>
                404 Not Found
            </Typography>
            <Typography variant="body1" component="div">
                La página que estás buscando está en construcción o no existe :p
            </Typography>
        </Box>
    );
};

export default NotFoundPage;