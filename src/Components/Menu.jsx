import React, { Fragment } from 'react'
import { createTheme, styled, useTheme } from '@mui/material/styles';

import { NavLink } from 'react-router-dom';

import AppBarCC from './AppBarCC'

import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { ThemeProvider } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const drawerWidth = 245;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
			width: drawerWidth,
			flexShrink: 0,
			whiteSpace: 'nowrap',
			boxSizing: 'border-box',
			...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
			...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	}),
);


export default function Menu(props) {
	const theme = useTheme();

	const [open, setOpen] = React.useState(false);
	const [cannotOpen, setCannotOpen] = React.useState(false);

	const themeSideMenu = createTheme({
		typography: {
			fontFamily: [
			  'Average Sans',
			].join(','),
		}
	})

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const icons = [
		<HomeOutlined/>,
		<AccountBoxOutlinedIcon/>,
		<MilitaryTechOutlinedIcon/>,
	];

	const iconsRetos = [
		<SlideshowOutlinedIcon/>,
		<EmojiPeopleIcon/>,
		<VideoLibraryIcon />
	];

	const { dynamicComponent: DynamicComponent } = props;

	const menuOptions = [
		{"name": "Inicio", "navigate": "/posts"},
		{"name": "Perfil", "navigate": "/profile"},
		{"name": "Rangos", "navigate": "/"}
	]

	const moreMenuOptions = [
		{"name": "Retos", "navigate": "/challenges"},
		{"name": "Participaciones", "navigate": "/"},
		{"name": "Shorts", "navigate": "/shorts"}
	]

	return (
		<Box sx={{ display: 'flex' }}>
		<CssBaseline />

		<AppBarCC position={'relative'} openVar={open} cannotOpen={cannotOpen} handleDrawerOpen={handleDrawerOpen} sx={{ml: 1}}/>
		<Drawer variant="permanent" open={open && !cannotOpen} PaperProps={{style: {border: 'none'}}} sx={{ display: { xs: {handleDrawerClose}}}}>
			<DrawerHeader>
				{!open && !cannotOpen && <IconButton 
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					sx={{
						flexGrow: 1,
						minWidth: 0,
						mr: 'auto',
						justifyContent: 'center',
						...(open && { display: 'none' }),
						}}
				>
					<ChevronRightIcon />
				</IconButton>}

				{open && <Fragment>
				<Typography sx={{ mr: 1, fontSize:25 }}>
					😜
				</Typography>
				<Typography
					variant="h6"
					noWrap
					component="a"
					href="#app-bar-with-responsive-menu"
					sx={{
					mr: 2,
					display: { xs: 'none', md: 'flex' },
					fontFamily: 'Average Sans',
					fontWeight: 400,
					color: 'inherit',
					textDecoration: 'none',
					}}
				>
					Crazy Challenge
				</Typography>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
				</IconButton>
				</Fragment>}
			</DrawerHeader>
	

			<ThemeProvider theme={themeSideMenu}>
			<List sx={{ flexGrow: 1 }}>
				{menuOptions.map((option, index) => (
					<Tooltip key={option.name} title={option.name} placement="right">
					<ListItem  disablePadding sx={{ display: 'block' }}>
					<NavLink to={option.navigate}>
						<ListItemButton
							sx={{
							minHeight: 48,
							justifyContent: open ? 'initial' : 'center',
							px: 2.5,
							}}
						>
							<ListItemIcon
							sx={{
								minWidth: 0,
								mr: open ? 3 : 'auto',
								justifyContent: 'center',
							}}
							>
							{icons[index]}
							</ListItemIcon>
							<ListItemText primary={option.name} sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
					</NavLink>
					</ListItem>
					</Tooltip>
				))}

				{moreMenuOptions.map((option, index) => (
					<Tooltip key={option.name} title={option.name} placement="right" >
					<ListItem  disablePadding sx={{ display:  { xs: 'flex', md: 'none' }, }}>
					<NavLink to={option.navigate}>
						<ListItemButton
							sx={{
							minHeight: 48,
							justifyContent: open ? 'initial' : 'center',
							px: 2.5,
							}}
						>
							<ListItemIcon
							sx={{
								minWidth: 0,
								mr: open ? 3 : 'auto',
								justifyContent: 'center',
							}}
							>
							{iconsRetos[index]}
							</ListItemIcon>
							<ListItemText primary={option.name} sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
					</NavLink>
					</ListItem>
					</Tooltip>
				))}

				<ListItem disablePadding
					sx={{
						position: 'absolute',
						bottom: 0,
						display: 'block'
					}}
					>
					<ListItemButton sx={{
						minHeight: 48,
						justifyContent: open ? 'initial' : 'center',
						px: 2.5,
						}}
					>
						<ListItemIcon sx={{
							minWidth: 0,
							mr: open ? 3 : 'auto',
							justifyContent: 'center',
						}}
						>
							<NightsStayIcon />
						</ListItemIcon>
						<ListItemText primary="Modo Oscuro" sx={{ opacity: open ? 1 : 0 }} />
					</ListItemButton>
					
				</ListItem>

			</List>
			</ThemeProvider>
		</Drawer>


		<Box component="main" sx={{ flexGrow: 1, p: 3, mt:2, mr:1}}>
			<DrawerHeader />

			{DynamicComponent && <DynamicComponent />}
		</Box>
		</Box>
	);
}