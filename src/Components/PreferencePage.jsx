import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import preferences from '../preferences.js';
import { Typography } from '@mui/material';

export default function Preferences({selectedButtons, handleSetButtonStyle}) {

    return (
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant='h3' mb={2}>
                Preferencias
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 4, md: 8, lg:12 }}
            >
                {preferences.map((pref) => (
                <Grid item xs={2} sm={2} md={2} key={pref.index} sx={{ textAlign: 'center' }}>
                    <Button
                        color={pref.color}
                        variant={selectedButtons.includes(pref.name) ? 'contained' : 'outlined'}
                        sx={{
                            p: 2,
                            alignContent: 'center',
                            height: 180,
                            width: 180,
                            boxShadow: `0px 6px 6px -3px ${pref.shadow1}, 
                            0px 10px 14px 1px ${pref.shadow2}, 
                            0px 4px 18px 3px ${pref.shadow3}`,
                        }}
                        onClick={() => handleSetButtonStyle(pref)}
                        >
                        <Stack direction="column" spacing={1} alignItems="center">
                            {pref.icon}
                            {pref.name}
                        </Stack>
                    </Button>
                </Grid>
                ))}
            </Grid>
        </Box>
    );
}