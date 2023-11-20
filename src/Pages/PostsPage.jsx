import React, { useStat, Fragment } from 'react';

import Menu from '../Components/Menu';
import PostsList from '../Components/PostsList';

export default function PostsPage() {

	return (
		<Menu dynamicComponent={PostsList}></Menu>
	);
}