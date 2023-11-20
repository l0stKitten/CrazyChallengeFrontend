import React, { useStat, Fragment } from 'react';

import Menu from '../Components/Menu';
import ChallengeShort from '../Components/ChallengeShort'

export default function ChallengeShortPage() {

	return (
		<Menu dynamicComponent={ChallengeShort}></Menu>
	);
}