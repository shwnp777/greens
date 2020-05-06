import React from 'react';
import { NavLink } from 'react-router-dom';

import './SideBarNav.css';

const SideNavList = () => {
	return (
		<div>
			<ul className='list-unstyled components'>
				<NavLink exact to='/' activeClassName='main-nav-active'>
					<li>Home</li>
				</NavLink>

				<NavLink exact to='/about' activeClassName='main-nav-active'>
					<li>About Us</li>
				</NavLink>

				<NavLink exact to='/services' activeClassName='main-nav-active'>
					<li>Services</li>
				</NavLink>

				<NavLink exact to='/reviews' activeClassName='main-nav-active'>
					<li>Reviews</li>
				</NavLink>

				<NavLink exact to='/contact' activeClassName='main-nav-active'>
					<li>Contact Us</li>
				</NavLink>
			</ul>
			<div className='numberClick'>
				<a href='tel:443-221-3242'>(443) 221-3242</a>
			</div>
		</div>
	);
};

export default SideNavList;
