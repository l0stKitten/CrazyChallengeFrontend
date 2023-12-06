import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import CookieIcon from '@mui/icons-material/Cookie';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DrawIcon from '@mui/icons-material/Draw';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TerminalIcon from '@mui/icons-material/Terminal';

import Icon from '@mdi/react';
import { mdiDramaMasks } from '@mdi/js';
import { mdiFountainPen } from '@mdi/js';
import { mdiMicrophoneVariant } from '@mdi/js';
import { mdiShoePrint } from '@mdi/js';

const dancing = <Icon path={mdiShoePrint} size={1} />

const singing = <Icon path={mdiMicrophoneVariant} size={1} />

const writing = <Icon path={mdiFountainPen} size={1} />

const acting = <Icon path={mdiDramaMasks} size={1} />

var preferences = [
    { "index": 1, "name": "deportes", "color": "primary", "icon": <SportsHandballIcon/>, "shadow1": "rgba(40, 210, 205, 0.6)", "shadow2": "rgba(40, 210, 205, 0.18)" , "shadow3": "rgba(40, 210, 205, 0.16)"},
    { "index": 2, "name": "cocina", "color": "secondary", "icon": <CookieIcon/>, "shadow1": "rgba(244, 9, 82, 0.6)", "shadow2": "rgba(244, 9, 82, 0.18)", "shadow3": "rgba(244, 9, 82, 0.16)"},
    { "index": 3, "name": "escritura", "color": "warning", "icon": writing, "shadow1": "rgba(255, 190, 28, 0.6)", "shadow2": "rgba(255, 190, 28, 0.18)", "shadow3": "rgba(255, 190, 28, 0.16)"},
    { "index": 4, "name": "ejercicio", "color": "error", "icon": <FitnessCenterIcon/>, "shadow1": "rgba(172, 32, 238, 0.6)", "shadow2": "rgba(172, 32, 238, 0.18)", "shadow3": "rgba(172, 32, 238, 0.16)"},
    { "index": 5, "name": "videojuegos", "color": "primary", "icon": <VideogameAssetIcon/>, "shadow1": "rgba(40, 210, 205, 0.6)", "shadow2": "rgba(40, 210, 205, 0.18)", "shadow3": "rgba(40, 210, 205, 0.16)"},
    { "index": 6, "name": "moda", "color": "secondary", "icon": <CheckroomIcon/>, "shadow1": "rgba(244, 9, 82, 0.6)", "shadow2": "rgba(244, 9, 82, 0.18)", "shadow3": "rgba(244, 9, 82, 0.16)"},
    { "index": 7, "name": "dibujo", "color": "warning", "icon": <DrawIcon/>, "shadow1": "rgba(255, 190, 28, 0.6)", "shadow2": "rgba(255, 190, 28, 0.18)", "shadow3": "rgba(255, 190, 28, 0.16)"},
    { "index": 8, "name": "pintura", "color": "error", "icon": <ColorLensIcon/>, "shadow1": "rgba(172, 32, 238, 0.6)", "shadow2": "rgba(172, 32, 238, 0.18)", "shadow3": "rgba(172, 32, 238, 0.16)"},
    { "index": 9, "name": "canto", "color": "primary", "icon": singing, "shadow1": "rgba(40, 210, 205, 0.6)", "shadow2": "rgba(40, 210, 205, 0.18)", "shadow3": "rgba(40, 210, 205, 0.16)"},
    { "index": 10, "name": "baile", "color": "secondary", "icon": dancing, "shadow1": "rgba(244, 9, 82, 0.6)", "shadow2": "rgba(244, 9, 82, 0.18)", "shadow3": "rgba(244, 9, 82, 0.16)"},
    { "index": 11, "name": "actuación", "color": "warning", "icon": acting, "shadow1": "rgba(255, 190, 28, 0.6)", "shadow2": "rgba(255, 190, 28, 0.18)", "shadow3": "rgba(255, 190, 28, 0.16)"},
    { "index": 12, "name": "programación", "color": "error", "icon": <TerminalIcon/>, "shadow1": "rgba(172, 32, 238, 0.6)", "shadow2": "rgba(172, 32, 238, 0.18)", "shadow3": "rgba(172, 32, 238, 0.16)"},
]

export default preferences;