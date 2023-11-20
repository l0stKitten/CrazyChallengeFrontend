import React from 'react'

import VideoCarousel from './VideoCarousel';
import video from '../short/beeandpuppycat.mp4';
import video2 from '../short/pretty-patrick.mp4';
import video3 from '../short/bee-and-puppycat-dancing-loop.mp4';

const videoList = [
	video, 
	video2, 
	video3	
]

export default function ChallengeShort() {
	return (
		<VideoCarousel videos={videoList}></VideoCarousel>
	);
}