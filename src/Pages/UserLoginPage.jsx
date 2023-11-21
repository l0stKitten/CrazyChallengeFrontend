import { useState } from 'react';
import { Button, TextField, Typography, Link, Grid, Box, Divider } from '@mui/material';
import '../Components/Challenge/styles.css';
import ImageCrazyChallenge from '../img/crazy_challenge.png'
import GoogleIcon from '@mui/icons-material/Google';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box sx={{ flexGrow: 1, height: '100vh'}}>
      <Grid className='login-container' container spacing={2}>
        <Grid item xs={8}>
          <img src={ImageCrazyChallenge} className='image-login' alt='imagen-login' style={{ maxWidth: '100%', height: '99vh', width: '100%'}}/>
        </Grid>
        <Grid item xs={4} paddingRight={2} >
          <form onSubmit={handleSubmit}>
            <Typography variant="h4" gutterBottom>  
              Crazy Challenge
            </Typography>
            <TextField
              label="Correo electrónico"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
            <TextField
              label="Contraseña"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{ marginTop: '1rem' }}
            >
              Iniciar Sesión
            </Button>

            <Divider mt={4} style={{margin:"20px 0"}}/>

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
            <Link href="#" variant="body2" style={{ marginTop: '1rem' }}>
              ¿Olvidaste tu contraseña?
            </Link>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
