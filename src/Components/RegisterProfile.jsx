import React, { useState, useEffect} from 'react'
import { Controller } from 'react-hook-form';
import { Box, Button, Avatar, Typography, Grid, TextField } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import  schema  from '../js/registersYupSchema'


export default function RegisterProfile({username, control, setValue, uploadedImage, setUploadedImage}) {

    const handleFileChange = (event) => {
        const file = event.target.files[0];
    
        setUploadedImage(file);
    };

    useEffect(() => {
        // Set the default value for biography after the component mounts
        setValue('biography', schema.fields.biography.default());
    }, [setValue]);
    

    return (
        <Grid container spacing={2} alignItems={'center'} justifyContent={'center'}>
            <Grid item xs={12} textAlign={'center'}>
                <Typography variant='h3' mb={2} sx={{margin:'auto', fontFamily: 'Poppins',}}>
                    😎 Edita tu perfil
                </Typography>
                <br></br>
                <Typography variant="body.2" color={'info'}>
                    (Opcional)
                </Typography>
            </Grid>

            <Grid item xs={12} sx={{mt:4, mb:4}}>
                <Grid container direction={'row'} wrap="nowrap" alignItems={'center'} justifyContent={'center'}>
                    <Avatar sx={{ width: 100, height: 100 }} src={uploadedImage ? URL.createObjectURL(uploadedImage) : undefined} />
                    <Typography variant="h3" sx={{ml:3}}>{JSON.parse(username).username}</Typography>
                    <Box p={3} textAlign="center">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                            id="image-file-input"
                        />
                        <label htmlFor="image-file-input">
                            <Button variant="outlined" component="span" startIcon={< AddPhotoAlternateIcon />}>
                                Foto de Perfil
                            </Button>
                        </label>
                    </Box>
                    
                </Grid>
                
            </Grid>

            <Grid item xs={4} >
                <Controller
                    name="biography"
                    control={control}
                    defaultValue={schema.fields.biography.default()} // Set the default value
                    render={({ field }) => (
                    <TextField
                        fullWidth
                        label="Biografía"
                        multiline
                        {...field}
                    />
                    )}
                />
                </Grid>
        </Grid>
        
    );
}