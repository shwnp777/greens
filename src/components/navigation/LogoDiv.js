import React from 'react';
import Logo from '../assets/images/greenslogo.png';

import './LogoDiv.css';

const LogoDiv = () => {
	return (
		<div className='LogoDiv'>
			<img src={Logo} alt='Logo' />
		</div>
	);
};

export default LogoDiv;
