    import React, { Fragment} from 'react'
    import { styled, alpha } from '@mui/material/styles';
    import Box from '@mui/material/Box';
    import Toolbar from '@mui/material/Toolbar';
    import IconButton from '@mui/material/IconButton';
    import Typography from '@mui/material/Typography';
    import InputBase from '@mui/material/InputBase';
    import Badge from '@mui/material/Badge';
    import MenuItem from '@mui/material/MenuItem';
    import Menu from '@mui/material/Menu';
    import SearchIcon from '@mui/icons-material/Search';
    import AccountCircle from '@mui/icons-material/AccountCircle';
    import NotificationsIcon from '@mui/icons-material/Notifications';
    import MoreIcon from '@mui/icons-material/MoreVert';
    import MuiAppBar from '@mui/material/AppBar';
    import Avatar from '@mui/material/Avatar';
    import Stack from '@mui/material/Stack';
    import Button from '@mui/material/Button';
    import Grid from '@mui/material/Grid';
    import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
    import { NavLink } from 'react-router-dom';
    import { useNavigate } from 'react-router-dom';
    import LogoutIcon from '@mui/icons-material/Logout';
    import { useAuth } from "../context/authContext";
    import { useEffect, useState } from 'react';
import { set } from 'react-hook-form';

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '20ch',
        },
    },
    }));
    const drawerWidth = 245;
    const drawerWidthClosed = 125;
    const drawerWidthOpenGap = 60;
    const drawerWidthOpenGapRight = 30;
    const drawerMarginTop = 20;



    const AppBar = styled(MuiAppBar, {
        backgroundColor: 'background.paper',
        shouldForwardProp: (prop) => prop !== 'open',
        })(({ theme, open }) => ({
            marginTop: drawerMarginTop,
            marginRight: drawerWidthOpenGapRight,
            width: `calc(100% - ${drawerWidthClosed}px)`,
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            ...(open && {
                marginTop: drawerMarginTop,
                marginLeft: drawerWidth,
                marginRight: drawerWidthOpenGapRight,
                width: `calc(100% - ${drawerWidth}px - ${drawerWidthOpenGap}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
                }),
        }),
    }));

    const CustomAppBar = styled(AppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        // Your existing styles here
    
        // Add an inline style for the background color
        backgroundColor: 'background', // Replace 'your-color-here' with your desired color
        // ...
    }));

    export default function PrimarySearchAppBar( {openVar, cannotOpen} ) {

        const {logout, user, getUserById} = useAuth();

        const [username, setUserName] = useState('');

        const [points, setPoints] = useState('');

        const [anchorEl, setAnchorEl] = React.useState(null);
        const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const navigate = useNavigate();

        useEffect(() => {
            const fetchData = async () => {
                try {
                    
                    const usuario = await getUserById(user.id);
                    console.log(usuario);
                    setUserName(usuario.user.username);
                    setPoints(usuario.user.points);

                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            };

            fetchData();
        }, [getUserById, user.id]);

        const handleLogout = () => {
            logout();
        };

        const handleNavigate = () => {
            navigate('/posts')
        }

        const handleProfileMenuOpen = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleMobileMenuClose = () => {
            setMobileMoreAnchorEl(null);
        };

        const handleMenuClose = () => {
            setAnchorEl(null);
            handleMobileMenuClose();
        };

        const handleMobileMenuOpen = (event) => {
            setMobileMoreAnchorEl(event.currentTarget);
        };

        const menuId = 'primary-search-account-menu';
        const renderMenu = (
            <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            </Menu>
        );

        const mobileMenuId = 'primary-search-account-menu-mobile';
        const renderMobileMenu = (
            <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            >

            <MenuItem>
                <NavLink to="/challenges">
                    <Button variant="outlined" color="primary" disableElevation >Retos</Button>
                </NavLink>
            </MenuItem>
            <MenuItem>
                <Button variant="contained" color="secondary" disableElevation >Participaciones</Button>
            </MenuItem>
                    
            <MenuItem>
                <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                >
                <Badge badgeContent={17} color="primary">
                    <NotificationsIcon />
                </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
                >
                <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            </Menu>
        );

        function stringToColor(string) {
            let hash = 0;
            let i;
        
            /* eslint-disable no-bitwise */
            for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
            }
        
            let color = '#';
        
            for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
            }
            /* eslint-enable no-bitwise */
        
            return color;
        }
            
        function stringAvatar(name) {
            return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}`,
            };
        }

        return (
            <Fragment>
            <CustomAppBar  elevation={0} position="fixed" open={openVar && !cannotOpen} sx={{borderRadius:'12px'}}>
                <Toolbar>
                {!openVar && <Box 
                    sx={{display: 'flex',
                    mr: 4}}
                    onClick={handleNavigate}
                >
                        
                <Typography sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1, fontSize:25 }}>
                    😜
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'none', lg:'flex' },
                    fontFamily: 'Average Sans',
                    fontWeight: 400,
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    Crazy Challenge
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    display: { xs: 'flex', md: 'flex', lg:'none' },
                    fontFamily: 'Average Sans',
                    fontWeight: 400,
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    CC
                </Typography>
                
                </Box>}

                <Stack direction="row" spacing={2} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
                    <NavLink to="/challenges">
                        <Button variant="outlined" color="primary" disableElevation >Retos</Button>
                    </NavLink>
                    
                    <Button variant="contained" color="secondary" disableElevation >Participaciones</Button>
                    <NavLink to="/shorts">
                        <IconButton aria-label="video">
                            <VideoLibraryIcon />
                        </IconButton>
                    </NavLink>
                    
                </Stack>
                

                <Box sx={{ flexGrow: 1 }} />
                <Search sx={{border: 1, borderColor: '#E7E8EF'}}>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Buscar..."
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' }, mr:4 }}>
    
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                        >
                        <Badge badgeContent={17} color="primary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
    
                    <Grid container wrap="nowrap" alignItems="center">
                        <Grid item>
                            
                        <Avatar sx={{ width: 10, height: 10 }} {...stringAvatar(username)} />
                        </Grid>
                        <Grid item sx={{ml:2}}>
                        <Typography variant="body2">{username}</Typography>
                        <Typography variant="body2">Rango: {points < 10 ? 'Novato' : 'Pro'}</Typography>
                        </Grid>
                        
                    </Grid>

                    <Button onClick={handleLogout}><LogoutIcon color="disabled" /></Button>
                    
                </Stack>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                    >
                    <MoreIcon />
                    </IconButton>
                </Box>
                </Toolbar>
            </CustomAppBar>
            {renderMobileMenu}
            {renderMenu}
            </Fragment>
        );
    }