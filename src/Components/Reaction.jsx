import React, {Fragment, useState} from 'react'
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import mencanta from "../jsonlottie/me encanta.json";
import medivierte from "../jsonlottie/me divierte.json";
import mesorprende from "../jsonlottie/me sorprende.json";
import pro from "../jsonlottie/eres pro.json";
import meemociona from "../jsonlottie/me emociona.json";
import meencorazona from "../jsonlottie/me encorazona.json";
import memata from "../jsonlottie/me mata.json";


export default function ReactionPost() {

    const style = {
        height: 50,
    };

    return (
        <Fragment>
                           
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    boxShadow: 3,
                    width: 350,
                }}
            >

                <Player hover loop src={mencanta} style={style} />
                <Player hover loop src={medivierte} style={style} />
                <Player hover loop src={mesorprende} style={style} />
                <Player hover loop src={pro} style={style} />
                <Player hover loop src={meemociona} style={style} />
                <Player hover loop src={meencorazona} style={style} />
                <Player hover loop src={memata} style={style} />
            </Box>
        </Fragment>
        
    );
}