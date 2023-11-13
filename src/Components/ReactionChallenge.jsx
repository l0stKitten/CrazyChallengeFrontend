import * as React from 'react';
import { Box } from '@mui/system';
import { Player } from "@lottiefiles/react-lottie-player";
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
    const handleReactionfunctionRC = () => {
        /*handleReaction(inlove)
        handleClose()*/
        console.log("xd")
    };

    const handleReactionfunctionRNC = () => {
        console.log("xd")
    };

    const handleReactionfunctionME = () => {
        console.log("xd")
    };

    const handleReactionfunctionMD = () => {
        console.log("xd")
    };

    const handleReactionfunctionMS = () => {
        console.log("xd")
    };

    const handleReactionfunctionP = () => {
        console.log("xd")
    };

    const handleReactionfunctionMEM = () => {
        console.log("xd")
    };

    const handleReactionfunctionMC = () => {
        console.log("xd")
    };

    const handleReactionfunctionMM = () => {
        console.log("xd")
    };

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
            
            
            <Tooltip placement="top" title="Reto Completado">
                <Box onClick={handleReactionfunctionRC}>
                    <Player autoplay loop src={completado} style={style} />
                </Box>
            </Tooltip>

            <Tooltip placement="top" title="Reto No Completado">
                <Box onClick={handleReactionfunctionRNC}>
                    <Player autoplay loop src={nocompletado} style={style} />
                </Box>
            </Tooltip>

            <Tooltip placement="top" title="Me Encanta">
                <Box onClick={handleReactionfunctionME}>
                    <Player hover loop src={mencanta} style={style} />
                </Box>
            </Tooltip>

            <Tooltip placement="top" title="Me Divierte">
                <Box onClick={handleReactionfunctionMD}>
                    <Player hover loop src={medivierte} style={style} />
                </Box>
            </Tooltip>

            <Tooltip placement="top" title="Me Sorprende">
                <Box onClick={handleReactionfunctionMS}>
                    <Player hover loop src={mesorprende} style={style} />
                </Box>
            </Tooltip>

            <Tooltip placement="top" title="Cool">
                <Box onClick={handleReactionfunctionP}>
                    <Player hover loop src={pro} style={style} />
                </Box>
            </Tooltip>

            <Tooltip placement="top" title="Me Emociona">
                <Box onClick={handleReactionfunctionMEM}>
                    <Player hover loop src={meemociona} style={style} />
                </Box>
            </Tooltip>

            <Tooltip placement="top" title="Me Encorazona">
                <Box onClick={handleReactionfunctionMC}>
                    <Player hover loop src={meencorazona} style={style} />
                </Box>
            </Tooltip>

            <Tooltip placement="top" title="Me Mata">
                <Box onClick={handleReactionfunctionMM}>
                    <Player hover loop src={memata} style={style} />
                </Box>
            </Tooltip>
        </Box>
    );
}