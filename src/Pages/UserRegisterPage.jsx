import { useState } from 'react';
import { Button, TextField, Typography, Link, Grid, Box, Divider } from '@mui/material';
import '../Components/Challenge/styles.css';
import ImageCrazyChallenge from '../img/crazy_challenge.png'

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box sx={{ flexGrow: 1, height: '100vh' }}>
      <Grid className='login-container' container spacing={2}>
        <Grid item xs={8}>
          <img src={ImageCrazyChallenge} className='image-login' alt='imagen-login' style={{ maxWidth: '100%', height: '99vh', width: '100%' }} />
        </Grid>
        <Grid container item xs={4} paddingRight={2} sx={{ justifyContent: 'center', marginTop: '50px' }}>
          <Grid item xs={8}>
            <form onSubmit={handleSubmit}>
              <Typography variant="h4" gutterBottom>
                Registro de Usuario
              </Typography>
              <TextField
                label="Nombre"
                type="text"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Apellido"
                type="text"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                required
              />
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
                minLength={6}
              />
              <TextField
                label="Repetir Contraseña"
                type="password"
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
                required
                minLength={6}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                style={{ marginTop: '1rem' }}
              >
                Registrar
              </Button>

              <Divider mt={4} style={{ margin: '20px 0' }} />
              <Link href="#" variant="body2" style={{ marginTop: '1rem' }}>
                ¿Ya tienes una cuenta? Inicia sesión
              </Link>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterForm;
