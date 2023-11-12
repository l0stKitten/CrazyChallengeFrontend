import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import mencanta from "../jsonlottie/me encanta.json";
import medivierte from "../jsonlottie/me divierte.json";
import mesorprende from "../jsonlottie/me sorprende.json";
import pro from "../jsonlottie/eres pro.json";
import meemociona from "../jsonlottie/me emociona.json";
import meencorazona from "../jsonlottie/me encorazona.json";
import memata from "../jsonlottie/me mata.json";
import completado from "../jsonlottie/completado.json";
import nocompletado from "../jsonlottie/no cumplido.json";

const style = {
    height: 50,
};

export default function ReactionChallenge() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                boxShadow: 2,
                borderRadius: 15,
                width: 450,
            }}
        >
            <Player autoplay loop src={completado} style={style} />
            <Player autoplay loop src={nocompletado} style={style} />
            <Player hover loop src={mencanta} style={style} />
            <Player hover loop src={medivierte} style={style} />
            <Player hover loop src={mesorprende} style={style} />
            <Player hover loop src={pro} style={style} />
            <Player hover loop src={meemociona} style={style} />
            <Player hover loop src={meencorazona} style={style} />
            <Player hover loop src={memata} style={style} />
        </Box>
    );
}