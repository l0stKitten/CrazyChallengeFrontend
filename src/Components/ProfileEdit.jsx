import React, { useEffect, useState } from 'react';
import {
    Grid,
    Box,
    Avatar,
    Typography,
    Button,
    InputAdornment,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Divider,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MailIcon from '@mui/icons-material/Mail';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useAuth } from "../context/authContext";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const PasswordInput = ({ label, value, onChange }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <TextField
            label={label}
            fullWidth
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            InputLabelProps={{
                style: { fontWeight: 'bold', marginBottom: '8px', position: 'absolute' },
                shrink: true,
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            sx={{ backgroundColor: 'white' }} // Agrega fondo blanco al TextField
        />
    );
};


const EditProfile = () => {
    const {user, getUserById, update} = useAuth();
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [rank, setRank] = useState('Novato');
    const [address, setAddress] = useState('Arequipa, Peru');
    const [userPhoto, setUserPhoto] = useState('https://i.pinimg.com/originals/40/7b/62/407b62161d8ba02b3626a7524fa835a7.jpg');
    const [userPreferences, setUserPreferences] = useState(['Preferencia 1', 'Preferencia 2', 'Preferencia 3']);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [userGender, setUserGender] = useState('');
    const [biography, setBiography] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usuario = await getUserById(user.id);

                const preferencias = usuario.user.preferences.map(item => item.category);
                setFullName(usuario.user.fullname);
                setUserName(usuario.user.username);
                setEmail(usuario.user.email);
                setUserPreferences(preferencias);
                setBiography(usuario.user.biography);
                
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [getUserById, user.id]);

    const handleUploadPhoto = () => {
        // lógica subir nueva foto
    };

    const handleDeletePhoto = () => {
        // lógica eliminar la foto actual
    };

    const handleSaveChanges = () => {
        // lógica para guardar los cambios ga
        
            try {

                const data = {
                    fullname: fullName,
                    gender: userGender,
                    biography: biography
                };

                update(user.id, data);

                
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
    };

    const updatedData = {
        fullName,
        userName,
        email,
        rank,
        address,
        userPreferences,
        currentPassword,
        newPassword,
    };

    return (

        <Box
            borderRadius={8}
            p={3} // Ajusta el espacio interior del Box
            mt={2} // Ajusta el espacio superior del Box
        >
            <Box mb={2} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Typography variant="h4" gutterBottom fontWeight="bold">
                    Tu perfil
                </Typography>
            </Box>

            <Divider />

            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" mt={2}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <Avatar sx={{ width: 80, height: 80 }} src={userPhoto} alt="User Photo" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box display="flex" flexDirection="column" alignItems="flex-start" textAlign="center">
                            <Typography variant="h6" mt={2} sx={{ fontWeight: 'bold' }}>
                                {fullName}  
                            </Typography>
                            <Typography variant="subtitle1">Rango {rank}</Typography>
                            <Typography variant="subtitle1">{address}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent={{ xs: 'center', md: 'flex-end' }}>
                                <Button
                                    variant="contained"
                                    onClick={handleUploadPhoto}
                                    style={{
                                        width: '160px',
                                        height: '50px',
                                        marginBottom: '10px',
                                        //marginBottom: { xs: '10px', md: '0' }, // Espaciado inferior en dispositivos pequeños
                                        marginRight: '25px',
                                        //marginRight: { xs: '25px', md: '25px' }, // Espaciado derecho en dispositivos medianos
                                    }}
                                >
                                    Nueva Foto
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={handleDeletePhoto}
                                    color='secondary'
                                    style={{
                                        width: '160px',
                                        height: '50px',
                                        marginBottom: '15px',
                                    }}
                                >
                                    Eliminar
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Divider mt={2} style={{ margin: '25px 0' }} />
            
            <Box>
                <Grid item xs={12}>
                    <TextField
                        label="Biografía"
                        fullWidth
                        InputLabelProps={{
                            style: { fontWeight: 'bold', marginBottom: '8px', position: 'absolute' },
                            shrink: true,
                        }}
                        placeholder={"Tu biografía es: " + biography}
                        value={biography}
                        //sx={{ backgroundColor: 'white' }}
                    onChange={(e) => setBiography(e.target.value)}
                    />
                </Grid>
            </Box>

            <Divider mt={2} style={{ margin: '25px 0' }} />

            <Box>
            <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Full Name"
                            fullWidth
                            InputLabelProps={{
                                style: { fontWeight: 'bold', marginBottom: '8px', position: 'absolute' },
                                shrink: true,
                            }}
                            placeholder={"Tu nombre es: " + fullName}
                            sx={{ backgroundColor: 'white' }} // Agrega fondo blanco al TextField
                        onChange={(e) => setFullName(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
						<Box sx={{mt:2, mb:1,}}>
							<FormControl>
								<FormLabel id="demo-controlled-radio-buttons-group">Género</FormLabel>
								<RadioGroup
									aria-labelledby="demo-controlled-radio-buttons-group"
									name="gender"
									row 
                                    onChange={(e) => setUserGender(e.target.value)} 
								>
									<FormControlLabel value="female" control={<Radio />} label="Mujer"/>
									<FormControlLabel value="male" control={<Radio />} label="Hombre"/>
									<FormControlLabel value="other" control={<Radio />} label="Otros" />
								</RadioGroup>
							</FormControl>
						</Box>
					</Grid>
            </Box>

            <Divider mt={2} style={{ margin: '25px 0' }} />

            <Box>
                {userPreferences.length > 0 && (
                    <React.Fragment>

                        <Typography variant="h7" mt={2} sx={{ fontWeight: 'bold' }}>
                            Preferencias
                        </Typography>

                        <List>
                            {userPreferences.map((preference, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                variant="body2"
                                                sx={{ fontWeight: 'bold' }}
                                            >
                                                {preference}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>


                        <Box display="flex" alignItems="center" mt={2}>
                            <IconButton color="primary">
                                <AddIcon />
                            </IconButton>
                            <Typography sx={{ marginLeft: '8px', fontSize: '12px', fontWeight: 'bold' }}>Añadir nueva</Typography>
                        </Box>

                    </React.Fragment>
                )}
            </Box>

            <Divider mt={2} style={{ margin: '25px 0' }} />

            <Box marginBottom={5}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <PasswordInput
                            label="Contraseña Actual"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                                style: { fontWeight: 'bold', marginBottom: '8px', position: 'absolute', top: 0 },
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <PasswordInput
                            label="Nueva Contraseña"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                                style: { fontWeight: 'bold', marginBottom: '8px', position: 'absolute', top: 0 },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <PasswordInput
                            label="Confirma la Nueva Contraseña"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                                style: { fontWeight: 'bold', marginBottom: '8px', position: 'absolute', top: 0 },
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>

            <Box display="flex" flexDirection="row" justifyContent="flex-end">
                <Button
                    variant="contained"
                    style={{
                        width: '160px',
                        height: '50px',
                        marginRight: '25px',
                    }}
                    color='secondary'
                >
                    Cancelar
                </Button>
                <Button
                    variant="contained"
                    onClick={handleSaveChanges}
                    style={{
                        width: '160px',
                        height: '50px',
                        fontSize: '13px',
                    }}
                >
                    Guardar cambios
                </Button>
            </Box>
        </Box>
    );
};

export default EditProfile;