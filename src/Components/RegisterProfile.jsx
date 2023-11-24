import React from 'react'
import { Box, Avatar, Typography, Grid, TextField } from '@mui/material';


export default function RegisterProfile(props) {
    return (
              
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: '100%'
            }}
        >
            <Grid container direction="column" justifyContent="center" wrap="nowrap" alignItems="center" spacing={2} sx={{ ml:3, mt:4 }}>
                <Grid item xs={8}>
                    <Grid container direction={'row'} wrap="nowrap" alignItems="center">
                        <Avatar sx={{ width: 100, height: 100 }} />
                        <Typography variant="h3" sx={{ml:3}}>Tina Turner</Typography>
                    </Grid>
                    
                </Grid>
                <Grid item xs={12} sx={{ml:2}}>
                    <TextField
                        fullWidth
                        label="Biografía"
                        multiline
                    />
                </Grid>
            </Grid>
                        
        </Box>
        
    );
}