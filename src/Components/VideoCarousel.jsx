import React, { useState, useEffect } from 'react';
import { Button, IconButton, Slide, Typography, Grid } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReactPlayer from 'react-player';

import { styled } from '@mui/material/styles';

const StyledPlayerWrapper = styled('div')({
	borderRadius: '10px', // Add your desired border radius here
	overflow: 'hidden', // Ensure that the border radius is applied correctly
});

const VideoCarousel = ({ videos  }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex < videos.length - 1 ? prevIndex + 1 : 0));
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : videos.length - 1));
	};

	useEffect(() => {
		const handleScroll = (event) => {
		const delta = event.deltaY;

		if (delta > 0) {
			// Scrolling down, move to the next item
			handleNext();
		} else if (delta < 0) {
			// Scrolling up, move to the previous item
			handlePrev();
		}
		};

		window.addEventListener('wheel', handleScroll);

		return () => {
		// Cleanup the event listener on component unmount
		window.removeEventListener('wheel', handleScroll);
		};
	}, [handlePrev, handleNext]);

	return (
		<Grid container alignItems="center" spacing={2} >
			<Grid item xs={1}  sx={{ display: {xs:'none', md:'flex'}, justifyContent: 'flex-start', p:0 }}>
				<IconButton onClick={handlePrev} aria-label="previous">
					<ArrowBackIosNewIcon />
				</IconButton>
			</Grid>
			<Grid item xs={10} sx={{ display: 'flex', justifyContent: 'center' }} p={0}>
				<Slide direction="left" in={true} mountOnEnter unmountOnExit>
					<StyledPlayerWrapper>
						<ReactPlayer
								url={videos[currentIndex]}
								playing={true}
								controls={true}
								width={456} // Adjust the width as needed
								height={811} // Adjust the height as needed
						/>
					</StyledPlayerWrapper>
					
				</Slide>
			</Grid>
			<Grid item xs={1} sx={{ display: {xs:'none', md:'flex'}, justifyContent: 'flex-end', p:0 }}>
				<IconButton onClick={handleNext} aria-label="next">
				<ArrowForwardIosIcon />
				</IconButton>
			</Grid>
		</Grid>
	);
};

export default VideoCarousel;