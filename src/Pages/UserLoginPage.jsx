import { useState } from 'react';
import { Button, TextField, Typography, Link, Grid, Box, Divider, Paper } from '@mui/material';
import '../Components/Challenge/styles.css';
import ImageCrazyChallenge from '../img/crazy_challenge.png'
import GoogleIcon from '@mui/icons-material/Google';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import { PORTBACKEND } from '../config.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StyledPaper = styled(Paper)`
	padding: ${({ theme }) => theme.spacing(0)};
	text-align: center;
	color: ${({ theme }) => theme.palette.text.secondary};
	height: 100vh; /* 100% of the viewport height */
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0,
`;

const Image = styled('img')`
	width: 100%; /* Cover the entire width of the paper */
	height: 100%; /* Cover the entire height of the paper */
	object-fit: cover; /* Maintain aspect ratio while covering */
`;



const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(['']);
	const isXs = useMediaQuery('(max-width:912px)')	
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

			const apiUrl = PORTBACKEND + '/api/user/login';

			await axios.post(apiUrl, {
				email: email,
				password: password
			}).then((res)=> {
				navigate('/posts')

			}).catch((err) => {
				setError(err.response.data.message);
				const timer = setTimeout(() => {
					setError([]);
				}, 5000);

				clearTimeout(timer);
			});
	};


	return (
		<Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent:'center', margin:'auto'}}>
		<Grid container spacing={2} direction={'row'}>
			{!isXs && (
				<Grid item xs={7} >
					<StyledPaper elevation={0}>
							<Image src={ImageCrazyChallenge} className='image-login' alt='imagen-login' />
					</StyledPaper>
				</Grid>
			)}

			<Grid item xs={isXs ? 12 : 5} textAlign={'center'} sx={{mt:'10%'}}>

				<Typography variant="h4" gutterBottom sx={{fontFamily: 'Poppins'}}>
					Iniciar Sesión 😜
				</Typography>

				<Grid
					container
					justifyContent="center"
					alignItems="flex-start"
					
				>
					<Grid item xs={10}>
					{error.length > 0 && error.map((err, index) => (
						<Typography color={'error'} key={index}>{err}</Typography>
					))}

						<Box sx={{mt:2, mb:1}}>
							<TextField
								label="Correo electrónico"
								type="email"
								variant="outlined"
								fullWidth
								required
								
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							
						</Box>
					</Grid>

					<Grid item xs={10}>
						<Box sx={{mt:2, mb:1}}>
							<TextField
								label="Contraseña"
								type="password"
								variant="outlined"
								fullWidth
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Box>
					</Grid>

					<Grid item xs={10}>
						<Button
							type="submit"
							variant="contained"
							fullWidth
							style={{ marginTop: '1rem' }}
							onClick={handleSubmit}
						>
							Iniciar Sesión
						</Button>
					</Grid>

					<Grid item xs={10}>
						<Box sx={{mt:2, mb:1}}>
							<Divider variant="middle" />
						</Box>
					</Grid>

					<Grid item xs={10}>
						<Button
							color="secondary"
							type="submit"
							variant="contained"
							fullWidth
							style={{ marginTop: '1rem' }}
							startIcon={<GoogleIcon/>}
						> 
							Iniciar Sesión con Google
						</Button>
					</Grid>

					<Grid item xs={10} textAlign={'center'} sx={{mt:4}}>
						<Link href="/posts" variant="body2" style={{ marginTop: '1rem' }}>
							¿Olvidaste tu contraseña?
						</Link>
					</Grid>

					<Grid item xs={10} textAlign={'center'} sx={{mt:2}}>
						<Link href="/register" variant="body2" style={{ marginTop: '1rem' }} color={'secondary'}>
							¿Eres nuevo? Registrate
						</Link>
					</Grid>
				</Grid>
			</Grid>

		</Grid>
		</Box>
  	);
};

export default LoginForm;
