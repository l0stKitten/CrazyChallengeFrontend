	import { useState } from 'react';
	import { Button, TextField, Typography, Link, Grid, Box, Divider, Paper } from '@mui/material';
	import '../Components/Challenge/styles.css';
	import ImageCrazyChallenge from '../img/crazy_challenge.png'
	import GoogleIcon from '@mui/icons-material/Google';
	import useMediaQuery from '@mui/material/useMediaQuery';
	import { styled } from '@mui/material/styles';
	import { useNavigate } from 'react-router-dom';
	import { useAuth } from "../context/authContext";
	import { useEffect } from "react";
	import { useUserContext  } from '../context/temporalAuthContext';


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
		const { login, errors: loginErrors, isAuthenticated, loginWithGoogle } = useAuth();
		const { setSharedVariable } = useUserContext();

		useEffect(() => {
			if (isAuthenticated) {
			navigate("/posts");
			}
		}, [isAuthenticated]);

		useEffect(() => {
			setError(loginErrors);
		  }, [loginErrors]);

		const handleSubmit = async (e) => {
			e.preventDefault();
			const data = {
				email: email,
				password: password
			};

			login(data);
		};

		const handleGoogle= async (e) => {
			e.preventDefault();
			const resGoogle = await loginWithGoogle();
			try {
				const data = {
					email: resGoogle.user.email,
					password: '123456'
				};
				const a = await login(data);
				if (a == 400){
					setSharedVariable(resGoogle);
					navigate("/register");
				}
			}catch (error) {
				console.log(error);
				
			}
		}


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
						{loginErrors.length > 0 && error.map((err, index) => (
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
								onClick={(e)=>handleGoogle(e)}
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
