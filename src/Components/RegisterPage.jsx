import { Button, TextField, Typography, Link, Grid, Box, Divider } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import '../Components/Challenge/styles.css';
import ImageCrazyChallenge from '../img/crazy_challenge.png'




const RegisterForm = ({register, errors, onSubmit, handleSubmit}) => {


	return (
		<Box sx={{ flexGrow: 1, height: '100vh' }}>
		<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
			<Box gridColumn="span 8">
				<img src={ImageCrazyChallenge} className='image-login' alt='imagen-login' style={{ height: '100vh', width: '100%'}} />
			</Box>

			<Box gridColumn="span 4">
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container direction="column" justifyContent="center" alignItems="flex-start" spacing={2} sx={{ ml:3, mt:4 }}>
				
				<Grid item xs={12}>
					<Typography variant="h4" gutterBottom>
						Registro de Usuario
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<TextField
						label="Nombre de Usuario"
						type="text"
						variant="outlined"
						fullWidth
						required
						{...register("username")}
					/>
				</Grid>

				<Grid item xs={12}>
					<TextField
						label="Nombre Completo"
						type="text"
						variant="outlined"
						fullWidth
						required
						{...register("fullname")}
					/>
				</Grid>

				<Grid item xs={12}>
					<TextField
						label="Correo electrónico"
						type="email"
						variant="outlined"
						fullWidth
						required
						{...register("email")}
					/>
				</Grid>

				<Grid item xs={12}>
					<FormControl>
						<FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
						<RadioGroup
							aria-labelledby="demo-controlled-radio-buttons-group"
							name="gender" 
							{...register("gender")}
						>
							<FormControlLabel value="female" control={<Radio />} label="Female" />
							<FormControlLabel value="male" control={<Radio />} label="Male" />
						</RadioGroup>
					</FormControl>
				</Grid>

				<Grid item xs={12}>
					<DatePicker label="Fecha de Nacimiento" />
				</Grid>

				<Grid item xs={12}>
					<TextField
						label="Contraseña"
						type="password"
						variant="outlined"
						fullWidth
						required
						error={!!errors.password}
						helperText={errors.password?.message}
						{...register("password")}
					/>
				</Grid>

				<Grid item xs={12}>
					<TextField
						label="Repetir Contraseña"
						type="password"
						variant="outlined"
						fullWidth
						required
						error={!!errors.confirmPassword}
						helperText={errors.confirmPassword?.message}
						{...register("confirmPassword")}
					/>
				</Grid>

				<Grid item xs={12}>
					<Button
						type="submit"
						variant="contained"
						fullWidth
						style={{ marginTop: '1rem' }}
					>
						Registrar
					</Button>
				</Grid>

				<Divider mt={12} style={{ margin: '20px 0' }} />

				<Grid item xs={12}>
					<Link href="#" variant="body2" style={{ marginTop: '1rem' }}>
						¿Ya tienes una cuenta? Inicia sesión
					</Link>
				</Grid>
				
				</Grid>
			</form>
			</Box>
			
		</Box>
		</Box>
	);
};

export default RegisterForm;
