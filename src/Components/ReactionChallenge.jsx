import React, {useState} from 'react';
import { Box } from '@mui/system';
import { Player } from "@lottiefiles/react-lottie-player";
import Tooltip from '@mui/material/Tooltip';
import mencanta from "../jsonlottie/me encanta.json";
import medivierte from "../jsonlottie/me divierte.json";
import mesorprende from "../jsonlottie/me sorprende.json";
import pro from "../jsonlottie/eres pro.json";
import meemociona from "../jsonlottie/me emociona.json";
import meencorazona from "../jsonlottie/me encorazona.json";
import memata from "../jsonlottie/me mata.json";
import completado from "../jsonlottie/completado.json";
import nocompletado from "../jsonlottie/no cumplido.json";
import Stack from '@mui/material/Stack';

const style = {
    height: 35,
};

export default function ReactionChallenge() {

    const [completadoEm, setCompletado] = useState(false);
    const [noCompletado, setNoCompletado] = useState(false);	
    const [meEnc, setMeEnc] = useState(false);
    const [meDiv, setMeDiv] = useState(false);
    const [meSor, setMeSor] = useState(false);
    const [soCool, setSoCool] = useState(false);
    const [meEmo, setMeEmo] = useState(false);
    const [meHeart, setMeHeart] = useState(false);
    const [meMata, setMeMata] = useState(false);

    const handleReactionfunctionRC = () => {
        setCompletado(true)
        setNoCompletado(false)
        setMeEnc(false)
        setMeDiv(false)
        setMeSor(false)
        setSoCool(false)
        setMeEmo(false)
        setMeHeart(false)
        setMeMata(false)
    };

    const handleReactionfunctionRNC = () => {
        setCompletado(false)
        setNoCompletado(true)
        setMeEnc(false)
        setMeDiv(false)
        setMeSor(false)
        setSoCool(false)
        setMeEmo(false)
        setMeHeart(false)
        setMeMata(false)
    };

    const handleReactionfunctionME = () => {
        setCompletado(false)
        setNoCompletado(false)
        setMeEnc(true)
        setMeDiv(false)
        setMeSor(false)
        setSoCool(false)
        setMeEmo(false)
        setMeHeart(false)
        setMeMata(false)
    };

    const handleReactionfunctionMD = () => {
        setCompletado(false)
        setNoCompletado(false)
        setMeEnc(false)
        setMeDiv(true)
        setMeSor(false)
        setSoCool(false)
        setMeEmo(false)
        setMeHeart(false)
        setMeMata(false)
    };

    const handleReactionfunctionMS = () => {
        setCompletado(false)
        setNoCompletado(false)
        setMeEnc(false)
        setMeDiv(false)
        setMeSor(true)
        setSoCool(false)
        setMeEmo(false)
        setMeHeart(false)
        setMeMata(false)
    };

    const handleReactionfunctionP = () => {
        setCompletado(false)
        setNoCompletado(false)
        setMeEnc(false)
        setMeDiv(false)
        setMeSor(false)
        setSoCool(true)
        setMeEmo(false)
        setMeHeart(false)
        setMeMata(false)
    };

    const handleReactionfunctionMEM = () => {
        setCompletado(false)
        setNoCompletado(false)
        setMeEnc(false)
        setMeDiv(false)
        setMeSor(false)
        setSoCool(false)
        setMeEmo(true)
        setMeHeart(false)
        setMeMata(false)
    };

    const handleReactionfunctionMC = () => {
        setCompletado(false)
        setNoCompletado(false)
        setMeEnc(false)
        setMeDiv(false)
        setMeSor(false)
        setSoCool(false)
        setMeEmo(false)
        setMeHeart(true)
        setMeMata(false)
    };

    const handleReactionfunctionMM = () => {
        setCompletado(false)
        setNoCompletado(false)
        setMeEnc(false)
        setMeDiv(false)
        setMeSor(false)
        setSoCool(false)
        setMeEmo(false)
        setMeHeart(false)
        setMeMata(true)
    };

    return (
            
            <Stack spacing={1} direction={'column'} sx={{p:2, boxShadow: 2,
                borderRadius: 15, height: 420,}}>
            
            <Tooltip placement="right" title="Reto Completado">
                <Box onClick={handleReactionfunctionRC} sx={{ borderRadius: 100}}
                backgroundColor={completadoEm ? '#F66EFF' : ''}>
                    <Player hover loop src={completado} style={style} />
                </Box>
            </Tooltip>

            <Tooltip placement="right" title="Reto No Completado">
                <Box onClick={handleReactionfunctionRNC} sx={{ borderRadius: 100}}
                backgroundColor={noCompletado ? '#F66EFF' : ''}>
                    <Player hover loop src={nocompletado} style={style} />
                </Box>
            </Tooltip>

            <Tooltip placement="right" title="Me Encanta">
                <Box onClick={handleReactionfunctionME} sx={{ borderRadius: 100}}
                backgroundColor={meEnc ? '#F66EFF' : ''}>
                    <Player hover loop src={mencanta} style={style} />
                </Box>
            </Tooltip>

            <Tooltip placement="right" title="Me Divierte">
                <Box onClick={handleReactionfunctionMD} sx={{ borderRadius: 100}}
                backgroundColor={meDiv ? '#F66EFF' : ''}>
                    <Player hover loop src={medivierte} style={style} />
                </Box>
            </Tooltip>

            <Tooltip placement="right" title="Me Sorprende">
                <Box onClick={handleReactionfunctionMS} sx={{ borderRadius: 100}}
                backgroundColor={meSor ? '#F66EFF' : ''}>
                    <Player hover loop src={mesorprende} style={style} />
                </Box>
            </Tooltip>

            <Tooltip placement="right" title="Cool">
                <Box onClick={handleReactionfunctionP} sx={{ borderRadius: 100}}
                backgroundColor={soCool ? '#F66EFF' : ''}>
                    <Player hover loop src={pro} style={style} />
                </Box>
            </Tooltip>

            <Tooltip placement="right" title="Me Emociona">
                <Box onClick={handleReactionfunctionMEM} sx={{ borderRadius: 100}}
                backgroundColor={meEmo ? '#F66EFF' : ''}>
                    <Player hover loop src={meemociona} style={style} />
                </Box>
            </Tooltip>

            <Tooltip placement="right" title="Me Encorazona">
                <Box onClick={handleReactionfunctionMC} sx={{ borderRadius: 100}}
                backgroundColor={meHeart ? '#F66EFF' : ''}>
                    <Player hover loop src={meencorazona} style={style} />
                </Box>
            </Tooltip>

            <Tooltip placement="right" title="Me Mata">
                <Box onClick={handleReactionfunctionMM} sx={{ borderRadius: 100}}
                backgroundColor={meMata ? '#F66EFF' : ''}>
                    <Player hover loop src={memata} style={style} />
                </Box>
            </Tooltip>

            </Stack>
    );
}