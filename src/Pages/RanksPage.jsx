import React, { useStat, Fragment } from 'react';

import Menu from '../Components/Menu';
import RankInfo from '../Components/RankInfo'

export default function RanksPage() {

	return (
		<Menu dynamicComponent={RankInfo}></Menu>
	);
}