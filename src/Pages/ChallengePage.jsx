import React from 'react';

import Menu from '../Components/Menu';
import ChallengesList from '../Components/ChallengesList';

export default function ChallengePage() {

	return (
		<Menu dynamicComponent={ChallengesList}></Menu>
	);
}