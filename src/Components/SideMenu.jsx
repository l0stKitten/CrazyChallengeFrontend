import React, {Fragment, useEffect} from 'react'
import { createTheme, styled, useTheme } from '@mui/material/styles';
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
import ChatOutlined from '@mui/icons-material/ChatOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { ThemeProvider } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

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

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

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

	const isXs = useMediaQuery('(max-width:600px)'); // Adjust the width to match your "xs" breakpoint

	// Call your function when the screen size matches "xs"
	useEffect(() => {
		if (isXs) {
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
					<Tooltip title={text} placement="right">
					<ListItem key={text} disablePadding sx={{ display: 'block' }}>
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

				<ListItem disablePadding
					sx={{
						position: 'absolute',
						bottom: 0,
						display: 'block'
					}}
					>
					<ListItemButton sx={{
						minHeight: 48,
						justifyContent: open ? 'center' : 'center',
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

			<Grid container component="main" spacing={2} sx={{border: 1, mt:14, ml:4, mr:4}}>
				<Grid item xs={8}>
					<Item>xs=8</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>xs=4</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>xs=4</Item>
				</Grid>
				<Grid item xs={8}>
					<Item>xs=8</Item>
				</Grid>
			</Grid>
		</Box>
	);
}