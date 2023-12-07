import MedalIcon from '@mui/icons-material/EmojiEvents';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Moving from '@mui/icons-material/Moving';
import Grade from '@mui/icons-material/Grade';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import {
    Avatar,
    Box,
    Divider,
    Grid,
    Typography,
    IconButton
} from '@mui/material';
import React, { useState , useEffect} from 'react';

const RankInfo = ({ userPhoto, fullName, address, currentRank, nextRank }) => {
    const [shake, setShake] = useState(false);

    const handleShake = () => {
        setShake(true);
        setTimeout(() => {
            setShake(false);
        }, 1000);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleShake();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            borderRadius={8}
            p={3}
            mt={2}
            sx={{ height: '75vh', display: 'flex', flexDirection: 'column',}}
            style={{background:"linear-gradient(180deg, rgba(255,255,255,1) 56%, rgba(129,254,233,1) 75%, rgba(187,182,244,1) 100%)"}}
        >
            
                <Grid container spacing={3} wrap="nowrap" alignItems="center" justifyContent="center">
                    <Grid item>
                        <Avatar sx={{ width: 150, height: 150 }} src={userPhoto} alt="User Photo"/>
                    </Grid>
                    <Grid item sx={{ml:2}}>
                        <Typography variant="h6" mt={2} sx={{ fontWeight: 'bold' }}>
                            {fullName}
                        </Typography>
                        <Typography variant="subtitle1">{address}</Typography>
                    </Grid>
                </Grid>

                <Box sx={{p:4}}>
                    <Divider variant="middle" />
                </Box>
            
               
                <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                height={'100%'}
                >
                    <Grid item alignItems="center" textAlign="center"
                    >
                            <MedalIcon style={{ fontSize: 40, color: 'gold' }} />
                            <Typography variant="h6">Rango actual: {currentRank}</Typography>
                    </Grid>
                    <Grid item 
                        textAlign="center"
                        className={shake ? 'shake' : ''}
                    >
                            <CelebrationIcon
                                style={{ fontSize: 40, color: 'lightgrey' }}
                                className={shake ? 'shake' : ''}
                            />
                            <Typography variant="h6">Próximo rango: {nextRank}</Typography>
                            <IconButton aria-label="Keyboard Double Arrow Down Outlined">
                                <KeyboardDoubleArrowDownOutlinedIcon/>
                            </IconButton>
                    </Grid>
                    
                </Grid>
            
        </Box>
    );
};

const UserProfile = () => {
    const [fullName, setFullName] = useState('Chandan S');
    const [rank, setRank] = useState('Novato');
    const [userPhoto, setUserPhoto] = useState('https://i.pinimg.com/originals/40/7b/62/407b62161d8ba02b3626a7524fa835a7.jpg');
    const [nextRank, setNextRank] = useState('Prox Rango');
    const [address, setAddress] = useState('Arequipa, Peru');

    return (
        <div>
            { }
            <RankInfo
                userPhoto={userPhoto}
                fullName={fullName}
                address={address}
                currentRank={rank}
                nextRank={nextRank}
            />
        </div>
    );
};

export default UserProfile;