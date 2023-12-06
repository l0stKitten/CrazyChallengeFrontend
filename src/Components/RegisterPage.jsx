import React from 'react';
import { TextField, Typography, Link, Grid, Box, Divider, Paper } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';

import { Controller } from 'react-hook-form';

import useMediaQuery from '@mui/material/useMediaQuery';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import '../Components/Challenge/styles.css';
import ImageCrazyChallenge from '../img/crazy_challenge.png'

const StyledPaper = styled(Paper)`
	padding: ${({ theme }) => theme.spacing(0)};
	text-align: center;
	color: ${({ theme }) => theme.palette.text.secondary};
	height: 60vh; /* 100% of the viewport height */
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

const RegisterForm = ({register, errors, control, value, setValue, selectedGender, handleGenderChange}) => {

	const isXs = useMediaQuery('(max-width:912px)')	

	return (
		<Grid container spacing={2} >
			{!isXs && (
				<Grid item xs={6} >
					<StyledPaper elevation={0}>
							<Image src={ImageCrazyChallenge} className='image-login' alt='imagen-login' />
					</StyledPaper>
				</Grid>
			)}

			<Grid item xs={isXs ? 12 : 6}>

				<Typography variant="h4" gutterBottom sx={{fontFamily: 'Poppins'}}>
					Datos de Usuario 😜
				</Typography>

				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

					<Grid item xs={6}>
						<Box sx={{mt:2, mb:1}}>
							<TextField 
								label="Nombre de Usuario"
								type="text"
								variant="outlined"
								fullWidth
								required
								autoComplete='username'
								{...register("username")}
							/>
							<Typography variant="caption" color={'error'}>
								{errors.username?.message}
							</Typography>
						</Box>
					</Grid>

					<Grid item xs={6}>
						<Box sx={{mt:2, mb:1}}>
							<TextField
								label="Nombre Completo"
								type="text"
								variant="outlined"
								fullWidth
								required
								autoComplete='name'
								{...register("fullname")}
							/>
							<Typography variant="caption" color={'error'}>
								{errors.fullname?.message}
							</Typography>
						</Box>
					</Grid>

					<Grid item xs={6}>
						<Box sx={{mt:2, mb:1}}>
							<TextField
								label="Correo electrónico"
								type="email"
								variant="outlined"
								fullWidth
								required
								autoComplete='email'
								{...register("email")}
							/>
							<Typography variant="caption" color={'error'}>
								{errors.email?.message}
							</Typography>
						</Box>
					</Grid>

					<Grid item xs={6}>
						<Box sx={{mt:2, mb:1}}>
							<Controller
								name="dateOfBirth"
								control={control}
								render={({ field }) => (
									<div>
										<DatePicker 
											label="Fecha de Nacimiento"
											value={value}
											onChange={(newValue) => {
												setValue(newValue);
												field.onChange(newValue);
											}}
											disableFuture 
											sx={{width: '100%'}}
										/>
										<br></br>
										<Typography variant="caption" color={'error'}>
											{errors.dateOfBirth?.message}
										</Typography>
									</div>
								)}
							/>
						</Box>
					</Grid>

					<Grid item xs={6}>
						<Box sx={{mt:2, mb:1}}>
							<TextField
								label="Contraseña"
								type="password"
								variant="outlined"
								fullWidth
								required
								autoComplete='new-password'
								error={!!errors.password}
								helperText={errors.password?.message}
								{...register("password")}
							/>
						</Box>
					</Grid>

					<Grid item xs={6}>
						<Box sx={{mt:2, mb:1}}>
							<TextField
								label="Repetir Contraseña"
								type="password"
								variant="outlined"
								fullWidth
								required
								autoComplete='new-password'
								error={!!errors.confirmPassword}
								helperText={errors.confirmPassword?.message}
								{...register("confirmPassword")}
							/>
						</Box>
					</Grid>

					<Grid item xs={6}>
						<Box sx={{mt:2, mb:1,}}>
							<FormControl>
								<FormLabel id="demo-controlled-radio-buttons-group">Género</FormLabel>
								<RadioGroup
									aria-labelledby="demo-controlled-radio-buttons-group"
									name="gender"
									value={selectedGender}
									onChange={handleGenderChange}
									row  
								>
									<FormControlLabel value="mujer" control={<Radio />} label="Mujer" {...register("gender")} />
									<FormControlLabel value="hombre" control={<Radio />} label="Hombre" {...register("gender")}/>
									<FormControlLabel value="otros" control={<Radio />} label="Otros" {...register("gender")}/>
								</RadioGroup>
								<Typography variant="caption" color={'error'}>
									{errors.gender?.message}
								</Typography>
							</FormControl>
						</Box>
					</Grid>

					<Grid item xs={12}>
						<Box sx={{mt:2, mb:1}}>
							<Divider variant="middle" />
						</Box>
					</Grid>

					<Grid item xs={6}>
						<Box sx={{mt:2, mb:1}}>
							<Link href="#" variant="body2" style={{ marginTop: '1rem' }}>
								¿Ya tienes una cuenta? Inicia sesión
							</Link>
						</Box>
					</Grid>

				</Grid>	
			
			</Grid>

		</Grid>
	);
};

export default RegisterForm;
