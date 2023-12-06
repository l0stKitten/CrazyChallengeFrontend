import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { Box, Grid, Typography} from '@mui/material';
import { Player } from "@lottiefiles/react-lottie-player";
import mesorprende from "../jsonlottie/me sorprende.json";
import pro from "../jsonlottie/eres pro.json";
import meencorazona from "../jsonlottie/me encorazona.json";
import memata from "../jsonlottie/me mata.json";
import superhappy from "../jsonlottie/superhappy.json"
import Button from '@mui/material/Button';


function WelcomePage() {

	const { width, height } = useWindowSize();

	const colors = ['#28D2CD', '#f40952', '#AC20EE', '#FFBE1C', '#00e676'];

	const style = {
        height: 150,
    };
	
	return (
		<div>
		<br />
		<Confetti width={width} height={height} recycle={true} colors={colors}/>
		<Box sx={{ height:'100%', width:'100%', justifyContent: 'center', alignContent:'center', textAlign:'center'} }>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={1}
			> 
				<Grid item >
					<Player hover autoplay src={mesorprende} style={style} />
				</Grid>
				<Grid item >
					<Player hover autoplay src={pro} style={style} />
				</Grid>
				<Grid item >
					<Player hover autoplay src={superhappy} style={style} />
				</Grid>
				<Grid item >
					<Player hover autoplay src={meencorazona} style={style} />
				</Grid>
				<Grid item >
					<Player hover autoplay src={memata} style={style} />
				</Grid>
			
			</Grid>

			<Typography variant='h4' sx={{fontFamily: 'Poppins'}}>
				Bienvenido a Crazy Challenge 🎉
			</Typography>

			<Link to="/posts">
				<Button variant="contained" sx={{mt:4}}>Iniciar</Button>
			</Link>
			
		</Box>
		</div>
	);
}
export default WelcomePage;