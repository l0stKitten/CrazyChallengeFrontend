import React from 'react';

import Menu from '../Components/Menu';
import ProfileEdit from '../Components/ProfileEdit'

export default function ProfileEditPage() {

	return (
		<Menu dynamicComponent={ProfileEdit}></Menu>
	);
}