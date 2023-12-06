import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import preferences from '../js/preferences.js';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';

export default function Preferences({register, selectedButtons, handleSetButtonStyle, noPreferences}) {

    const isXs = useMediaQuery('(max-width:393px)')	
    const isSuperXs = useMediaQuery('(max-width:280px)')	

    return (
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant='h3' mb={2} sx={{margin:'auto', fontFamily: 'Poppins', mb:4, }}>
                ✨ Preferencias ✨
            </Typography>
            <br/>
            {noPreferences && <Typography variant="caption" color={'error'} sx={{mb:4}}>
                Se debe seleccionar al menos una preferencia
			</Typography>}
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 6, md: 8, lg:12 }}
            >

                {preferences.map((pref) => (
                <Grid item xs={2} sm={2} md={2} key={pref.index} sx={{ textAlign: 'center' }}>
                    <Button
                        color={pref.color}
                        variant={selectedButtons.includes(pref.name) ? 'contained' : 'outlined'}
                        sx={{
                            p: 2,
                            alignContent: 'center',
                            alignSelf: 'center',
                            height: isSuperXs ? 120 : (isXs ? 150 : 180),
                            width: isSuperXs ? 120 : (isXs ? 150 : 180),
                            boxShadow: `0px 6px 6px -3px ${pref.shadow1}, 
                            0px 10px 14px 1px ${pref.shadow2}, 
                            0px 4px 18px 3px ${pref.shadow3}`,
                            m: 'auto',
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