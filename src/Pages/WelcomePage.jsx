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

function WelcomePage() {

	const { width, height } = useWindowSize();

	const colors = ['#28D2CD', '#f40952', '#AC20EE', '#FFBE1C', '#00e676'];

	const style = {
        height: 150,
    };
	
	return (
		<div>
		<div className="globe"></div>
		<br />
		<Confetti width={width} height={height} recycle={true} colors={colors}/>
		<Box sx={{ height:'100%', width:'100%', justifyContent: 'center', alignContent:'center'} }>
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

			<Typography variant='h4'>
				Bienvenido a Crazy Challenge
				<span  aria-label="tada">
					🎉
				</span>
				,{" "}
				<Link to="/posts">
				<span >Iniciar </span>{" "}
				</Link>
			</Typography>
			
		</Box>
		</div>
	);
}
export default WelcomePage;