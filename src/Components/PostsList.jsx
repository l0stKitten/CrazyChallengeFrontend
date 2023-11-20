import React, { useEffect } from 'react'

import Post from './Post'
import ChatsandContact from './ChatsandContact';

import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';

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
		</Grid>
	);
}