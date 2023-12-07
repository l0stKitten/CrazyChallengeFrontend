import React, { useEffect } from 'react'

import Post from './Post'
import ChatsandContact from './ChatsandContact';
import CreatePost from './CreatePost';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';

import { createTheme, styled, useTheme } from '@mui/material/styles';

const DrawerFooter = styled('div')(({ theme }) => ({
	display: 'flex',
	width: '100%',
	alignItems: 'center',
	alignContent: 'center',
	justifyContent: 'center',
	padding: 2,
	bottom: 0, 
	textAlign: 'center',
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

export default function PostsList() {

	const isXs = useMediaQuery('(max-width:996px)'); // Adjust the width to match your "xs" breakpoint

	return (
		<Grid container spacing={2} marginRight={2}>
			<Grid container item xs={isXs ? 12 : 10} 
				direction="column"
				justifyContent="flex-start"
				alignItems="center"
				gap={4}
			>
				<CreatePost></CreatePost>
				{Array.from(Array(6)).map((_, index) => (
					<Post key={index}>xs=8</Post>
				))}
			</Grid>
			{isXs ? null : <Grid item xs={2} container
				direction="column"
				justifyContent="flex-start"
				alignItems="flex-end">
				
				<ChatsandContact></ChatsandContact>
				
			</Grid>}
			
				<DrawerFooter>
					<Typography variant="body2"> © Crazy Challenge </Typography>
				</DrawerFooter>
			
			
		</Grid>
	);
}