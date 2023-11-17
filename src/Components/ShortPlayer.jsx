import React, { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { styled } from '@mui/material/styles';
import ReactPlayer from 'react-player';

const StyledPlayerWrapper = styled('div')({
	borderRadius: '10px', // Add your desired border radius here
	overflow: 'hidden', // Ensure that the border radius is applied correctly
});

export default function ShortPlayer(video) {

	return (
		<Box sx={{p:0, width:456, height:811, borderRadius:10, boxShadow: 9}}>
			<StyledPlayerWrapper>
				<ReactPlayer
				className={'shortPlayer'}
				url={video}
				controls={true}
				width={456}
				height={811}
				playing={true}
				loop={true}
				/>
			</StyledPlayerWrapper>
		</Box>
	);
}