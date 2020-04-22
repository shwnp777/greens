import React from 'react';
import {Link} from 'react-router-dom';

const SideNavList = () => {
	return (
		<div>
			<ul className='list-unstyled components'>
				<li className='active'>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About Us</Link>
				</li>
				<li>
					<Link to='/services'>Services</Link>
				</li>
				<li>
					<Link to='/contact'>Contact Us</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideNavList;
