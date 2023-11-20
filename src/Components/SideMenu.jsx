import React, {Fragment, useEffect} from 'react'
import { createTheme, styled, useTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AppBarCC from './AppBarCC'
import Post from './Post'
import ContactList from './CardSM'

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
import Grid from '@mui/material/Grid';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

import { useMediaQuery } from '@mui/material';

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

/*const Post = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	color: theme.palette.text.secondary,
}));*/


const contacts = [{"id":1,"name":"Grange Slight"},
{"id":2,"name":"Cleveland Staniland"},
{"id":3,"name":"Libbi Felderer"},
{"id":4,"name":"Letizia Synke"},
{"id":5,"name":"Rora Rickersey"},
{"id":6,"name":"Anjela Giacomoni"},
{"id":7,"name":"Jeramie De Cristofalo"},
{"id":8,"name":"Charin Mugglestone"},
{"id":9,"name":"Ludovico Howatt"},
{"id":10,"name":"Dorie Mendez"},
{"id":11,"name":"Erroll Youngs"},
{"id":12,"name":"Virginie Melbourne"},
{"id":13,"name":"Erin Whistlecraft"},
{"id":14,"name":"Josey Brignall"},
{"id":15,"name":"Carly Lago"},
{"id":16,"name":"Aveline Chasemoore"},
{"id":17,"name":"Clarita Banbrook"},
{"id":18,"name":"Layton Twidle"},
{"id":19,"name":"Mariana Salthouse"},
{"id":20,"name":"Humphrey Zolini"}]

export default function SideMenu() {
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

	const handleCannotOpen = (val) => {
		setCannotOpen(val);
	};

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
	];

	const isXs = useMediaQuery('(max-width:996px)'); // Adjust the width to match your "xs" breakpoint

	// Call your function when the screen size matches "xs"
	useEffect(() => {
		if (isXs) {
			handleDrawerClose();
			handleCannotOpen(true);
		} else {
			handleCannotOpen(false);
		}
	}, [isXs]);

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
				{['Inicio', 'Perfil', 'Rangos'].map((text, index) => (
					<Tooltip key={text} title={text} placement="right">
					<ListItem  disablePadding sx={{ display: 'block' }}>
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
						<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
					</ListItemButton>
					</ListItem>
					</Tooltip>
				))}

				{['Retos', 'Participaciones'].map((text, index) => (
					<Tooltip key={text} title={text} placement="right" >
					<ListItem  disablePadding sx={{ display:  { xs: 'flex', md: 'none' }, }}>
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
						<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
					</ListItemButton>
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

			<Grid container spacing={2} marginRight={2}>
				<Grid container item xs={isXs ? 12 : 10} 
					direction="column"
					justifyContent="flex-start"
					alignItems="center"
					gap={4}
				>
					{Array.from(Array(6)).map((_, index) => (
						<Post key={index}>xs=8</Post>
					))}
				</Grid>
				{isXs ? null : <Grid item xs={2} container
					direction="column"
					justifyContent="flex-start"
					alignItems="flex-end">
					
					<ContactList title={"Chats"} contacts={contacts} mtbool={false}></ContactList>
					<ContactList title={"Seguidores"} contacts={contacts} mtbool={true}></ContactList>
				</Grid>}
			</Grid>
		</Box>

		</Box>
	);
}